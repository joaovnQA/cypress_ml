from flask import Flask, render_template, request, redirect, url_for, session
import os
import joblib
import pandas as pd

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'your_secret_key')  


model = joblib.load('test_case_priority_model.pkl')
label_encoders = joblib.load('label_encoders.pkl')


def preprocess_input(data):
    try:
       
        for column in ['bug_severity', 'test_complexity', 'test_environment']:
            le = label_encoders[column]
            data[column] = le.transform([data[column]])[0]
        return pd.DataFrame([data])
    except Exception as e:
        raise ValueError(f"Error in preprocessing input: {str(e)}")


@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if username == "admin" and password == "admin":
            session['logged_in'] = True  
            return redirect(url_for('predict'))
        else:
            return render_template("login.html", error="Invalid credentials")
    return render_template("login.html")


@app.route("/logout")
def logout():
    session.pop('logged_in', None)  
    return redirect(url_for('login')) 


@app.route("/predict", methods=["GET", "POST"])
def predict():
    if 'logged_in' not in session:  
        return redirect(url_for('login'))

    if request.method == "POST":
        try:
            
            bug_severity = request.form['bug_severity']
            frequency_of_changes = int(request.form['frequency_of_changes'])
            execution_time = int(request.form['execution_time'])
            test_complexity = request.form['test_complexity']
            test_environment = request.form['test_environment']

            
            data = {
                'bug_severity': bug_severity,
                'frequency_of_changes': frequency_of_changes,
                'execution_time': execution_time,
                'test_complexity': test_complexity,
                'test_environment': test_environment
            }

            
            input_data = preprocess_input(data)

            
            prediction = model.predict(input_data)[0]

            
            priority = label_encoders['priority'].inverse_transform([prediction])[0]

            return render_template("predict.html", prediction=priority)

        except Exception as e:
            return render_template("predict.html", error=f"Error making prediction: {str(e)}")

    return render_template("predict.html")


if __name__ == "__main__":
    app.run(debug=True)
