//Função dos botões números//

function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//Função do Botão de limpeza//

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

//Função do Botão de apagar//

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
}

//Função do Botão de calcular//

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        var resultado = document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        var resultado = document.getElementById('resultado').innerHTML = "Nada..."
    }
}