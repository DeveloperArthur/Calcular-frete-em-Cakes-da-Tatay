function processaValores(){
    limparValoresDaTela();

    var quilometragemDoVeiculo = document.getElementById('quilometragemDoVeiculo').value;
    var precoDaGasolina = document.getElementById('precoDaGasolina').value;
    var distanciaEmKm = document.getElementById('distanciaEmKm').value;

    var camposValidos = validaCamposObrigatorios(quilometragemDoVeiculo, precoDaGasolina, distanciaEmKm);
    if(camposValidos){
        var valorDoFrete = calculaFrete(quilometragemDoVeiculo, distanciaEmKm, precoDaGasolina)
        exibeValorDoFreteNaTela(valorDoFrete)
        redirecionaAoFimDaPagina();
    }else exibeErroDosCampos();
}

function limparValoresDaTela(){
    document.getElementById('preco').innerHTML = '';
}

function validaCamposObrigatorios(quilometragemDoVeiculo, precoDaGasolina, distanciaEmKm){
    if(quilometragemDoVeiculo == "" || precoDaGasolina == "" || distanciaEmKm == "" ||
    quilometragemDoVeiculo <= 0 || precoDaGasolina <= 0 || distanciaEmKm <= 0)
        return false;
    return true;
}

function calculaFrete(quilometragemDoVeiculo, distanciaEmKm, precoDaGasolina){
    return (quilometragemDoVeiculo / distanciaEmKm) * precoDaGasolina;
}

function exibeValorDoFreteNaTela(valorDoFrete){
    document.getElementById('preco').innerHTML = "Valor do frete: "+valorDoFrete.toFixed(2);
}

function exibeErroDosCampos(){
    alert('Os campos não foram preenchidos corretamente');
}

function redirecionaAoFimDaPagina(){
    window.location.href = '#fimDaPagina';
}

function calculaDistanciaEmKmNoGoogleMaps(){
    //Documentação da API Matrix Distance
    //https://developers.google.com/maps/documentation/distance-matrix/overview
    try{

    }catch{
        alert('Deu um erro ao calcular a distância desses endereços\nVerifique se os endereços estão escritos corretamente')
    }
}