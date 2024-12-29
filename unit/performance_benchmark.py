import requests
import time

PREDICT_URL = "http://127.0.0.1:5000/predict"
payload = {
    "bug_severity": "High",
    "frequency_of_changes": 10,
    "execution_time": 15,
    "test_complexity": "Medium",
    "test_environment": "Staging"
}
MAX_RESPONSE_TIME = 0.5

def benchmark_performance():
    try:
        start_time = time.time()
        response = requests.post(PREDICT_URL, json=payload)
        end_time = time.time()
        response_time = end_time - start_time
        
        if response.status_code == 200:
            print(f"Tempo de resposta: {response_time:.4f} segundos")
            if response_time > MAX_RESPONSE_TIME:
                print("⚠️ O tempo de resposta excede o limite aceitável!")
            else:
                print("✅ O tempo de resposta está dentro do limite aceitável.")
        else:
            print(f"⚠️ Erro na requisição. Código de status: {response.status_code}")
    except Exception as e:
        print(f"⚠️ Erro durante o benchmarking de desempenho: {e}")

if __name__ == "__main__":
    benchmark_performance()
