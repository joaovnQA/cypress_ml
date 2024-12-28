import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib


data = {
    'test_case': ['Login Test', 'Search Test', 'Checkout Test', 'Payment Test', 'Profile Update Test'],
    'bug_severity': ['High', 'Medium', 'Low', 'High', 'Medium'],
    'frequency_of_changes': [10, 5, 1, 12, 4],
    'execution_time': [15, 10, 8, 20, 12],
    'test_complexity': ['High', 'Medium', 'Low', 'High', 'Medium'],
    'test_environment': ['Dev', 'Staging', 'Production', 'Staging', 'Dev'],
    'priority': ['High', 'Medium', 'Low', 'High', 'Medium']
}


label_encoders = {}
for column in ['bug_severity', 'test_complexity', 'test_environment', 'priority']:
    le = LabelEncoder()
    data[column] = le.fit_transform(data[column])
    label_encoders[column] = le


X = pd.DataFrame({
    'bug_severity': data['bug_severity'],
    'frequency_of_changes': data['frequency_of_changes'],
    'execution_time': data['execution_time'],
    'test_complexity': data['test_complexity'],
    'test_environment': data['test_environment']
})

y = data['priority']


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)


y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model accuracy: {accuracy * 100:.2f}%")


joblib.dump(model, 'test_case_priority_model.pkl')
joblib.dump(label_encoders, 'label_encoders.pkl')
