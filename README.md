# Projeto de Previsão com Flask e Benchmark de Desempenho

Este projeto tem como objetivo criar um aplicativo web simples utilizando Flask, que expõe a funcionalidade de previsão de um modelo de aprendizado de máquina treinado. O projeto também inclui a criação de testes E2E usando Cypress e benchmarks de desempenho para avaliar a qualidade do modelo e sua inferência.

## Estrutura do Projeto

- `app.py`: Arquivo principal que sobe o servidor Flask e expõe a funcionalidade de previsão.
- `train_model.py`: Arquivo responsável por treinar o modelo de aprendizado de máquina.
- `unit/performance_benchmark.py`: Benchmark de desempenho do modelo.
- `unit/evaluate_model.py`: Avaliação do modelo treinado.
- `validation_data.csv`: Dados de validação utilizados para os benchmarks e avaliações.
- `templates/login.html`: Template HTML para a página de login.
- `templates/predict.html`: Template HTML para a página de previsão.

## Requisitos

Para executar este projeto, você precisa ter as seguintes dependências instaladas:

- Python 3.11.4
- Flask
- Scikit-learn (ou outra biblioteca utilizada para o treinamento do modelo)
- Cypress para testes E2E

Instale as dependências com:

```bash
pip install -r requirements.txt
```

## Passos para Execução

### 1. Treinar o Modelo

Para treinar o modelo de aprendizado de máquina, utilize o seguinte comando:

```bash
python train_model.py
```

Este comando irá carregar os dados de treinamento, treinar o modelo e salvar o modelo treinado para uso posterior.

### 2. Subir a Aplicação

Após treinar o modelo, execute o servidor Flask com o comando:

```bash
python app.py
```

Isso iniciará a aplicação na sua máquina local, permitindo o acesso às páginas de login e previsão.

### 3. Rodar os Modelos de Benchmark

Para avaliar o desempenho do modelo, utilize os scripts de benchmark:

```bash
python unit/performance_benchmark.py
```

Este script irá avaliar o tempo de execução e o consumo de recursos do modelo.

Além disso, você pode avaliar a qualidade do modelo com:

```bash
python unit/evaluate_model.py
```

### 4. Rodar os Testes E2E com Cypress

Os testes E2E são executados usando Cypress. Para rodá-los, execute o seguinte comando:

```bash
npx cypress run
```

### Estratégia de Testes

Os testes E2E validam as funcionalidades principais do sistema, incluindo:

- **Login**: Testes para garantir que o login funcione corretamente, incluindo casos de login com credenciais válidas e inválidas, e o comportamento esperado quando campos obrigatórios não são preenchidos.
- **Página de Previsão**: Testes para garantir que todos os campos e botões necessários estejam visíveis e funcionando corretamente, além de validar as previsões feitas com entradas válidas e inválidas.
- **Comportamento de Erro:**: Testes que validam o comportamento da aplicação quando os campos de entrada contêm valores inválidos ou quando estão vazios.

### Modelos de Machine Learning e Benchmark

Os modelos de aprendizado de máquina utilizados neste projeto foram treinados utilizando um conjunto de dados baseado em __validation_data__. A avaliação e os benchmarks foram realizados para garantir que o modelo seja eficaz, preciso e adequado ao propósito de previsão. O __evaluate_model.py__ realiza uma avaliação detalhada de desempenho e acurácia, enquanto o __performance_benchmark.py__ mede o tempo de inferência e a eficiência do modelo.

## Desafios Enfrentados
- **Aplicação Flash**: Como não experiencia em desenvolvimento tive muita dificuldade para pensar em um modelo para atender os requisitos de desenvolvimento.
- **Machine Learning e Benchmark**: Tenho apenas o conhecimento teorico sobre esse temas, então utilizei bastante o auxilio do chatgpt para desenvolver um modelo que atendessem os requisitos e que eu tivesse uma melhor cobertura sobre os desafios listados.
- **Pipeline**: Tive problemas com as dependencias do projeto para executar a pipeline
