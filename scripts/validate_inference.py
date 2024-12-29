import joblib
import pandas as pd
import numpy as np
import logging
import sys

logging.basicConfig(level=logging.INFO)

def carregar_modelo():
    try:
        modelo = joblib.load('test_case_priority_model.pkl')
        label_encoders = joblib.load('label_encoders.pkl')
        logging.info("Modelo e codificadores carregados com sucesso.")
        return modelo, label_encoders
    except Exception as e:
        logging.error(f"Erro ao carregar o modelo ou os codificadores: {e}")
        return None, None

def validar_previsao(modelo, label_encoders):
    dados_entrada = pd.DataFrame({
        'bug_severity': [label_encoders['bug_severity'].transform(['High'])[0]],
        'frequency_of_changes': [10],
        'execution_time': [15],
        'test_complexity': [label_encoders['test_complexity'].transform(['High'])[0]],
        'test_environment': [label_encoders['test_environment'].transform(['Dev'])[0]]
    })

    try:
        previsao = modelo.predict(dados_entrada)
        resultado = label_encoders['priority'].inverse_transform(previsao)
        logging.info(f"Previsão feita com sucesso. Prioridade prevista: {resultado[0]}")
        return True
    except Exception as e:
        logging.error(f"Erro na previsão: {e}")
        return False

def main():
    modelo, label_encoders = carregar_modelo()

    if modelo and label_encoders:
        resultado = validar_previsao(modelo, label_encoders)
        
        if resultado:
            logging.info("Validação da inferência bem-sucedida.")
            sys.exit(0)
        else:
            logging.error("Falha na validação da inferência.")
            sys.exit(1)
    else:
        logging.error("Falha ao carregar o modelo e os codificadores.")
        sys.exit(1)

if __name__ == "__main__":
    main()
