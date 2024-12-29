import pandas as pd
from sklearn.metrics import classification_report
import joblib

MODEL_PATH = "test_case_priority_model.pkl"
ENCODERS_PATH = "label_encoders.pkl"
VALIDATION_DATA_PATH = "unit/validation_data.csv"

def evaluate_model():
    try:
        model = joblib.load(MODEL_PATH)
        label_encoders = joblib.load(ENCODERS_PATH)
        data = pd.read_csv(VALIDATION_DATA_PATH)
        
        X = data[['bug_severity', 'frequency_of_changes', 'execution_time', 'test_complexity', 'test_environment']]
        y_true = data['priority']
        
        for column in ['bug_severity', 'test_complexity', 'test_environment']:
            X[column] = label_encoders[column].transform(X[column])
        y_true = label_encoders['priority'].transform(y_true)
        
        y_pred = model.predict(X)
        report = classification_report(y_true, y_pred, target_names=label_encoders['priority'].classes_)
        print("Relatório de Avaliação:")
        print(report)
    except Exception as e:
        print(f"⚠️ Erro ao avaliar o modelo: {e}")

if __name__ == "__main__":
    evaluate_model()
