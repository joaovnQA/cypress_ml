def test_model_loading():
    model = load_model()  # Função que carrega o modelo
    assert model is not None, "O modelo não foi carregado corretamente."
