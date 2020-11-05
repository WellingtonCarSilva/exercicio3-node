const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Exercicio 3 - Wellington.');
});

app.get('/calculo', function (req, res) {
    var resultado = 0;

    if (req.query.operador == "+" || req.query.operador == " ") {
        resultado = somar(req.query.numero1, req.query.numero2);
    }
    else if (req.query.operador == "-") {
        resultado = subtrair(req.query.numero1, req.query.numero2);
    }
    else if (req.query.operador == "*" || req.query.operador.toUpperCase() == "X") {
        resultado = multiplicar(req.query.numero1, req.query.numero2);
    }
    else if (req.query.operador == "/") {
        resultado = dividir(req.query.numero1, req.query.numero2);
    }
    res.send(resultado.toString());
});

app.post('/calculos', function(req, res){
    var resultado = 0;
    
    if (req.body.operador == "+" || req.body.operador == " ") {
        resultado = somar(req.body.numero1, req.body.numero2);
    }
    else if (req.body.operador == "-") {
        resultado = subtrair(req.body.numero1, req.body.numero2);
    }
    else if (req.body.operador == "*" || req.body.operador.toUpperCase() == "X") {
        resultado = multiplicar(req.body.numero1, req.body.numero2);
    }
    else if (req.body.operador == "/") {
        resultado = dividir(req.body.numero1, req.body.numero2);
    }
    res.send(resultado.toString());
});

function somar(x, y) {
    return parseFloat(x.replace('^[-+]?\d*\.?\d*$')) + parseFloat(y.replace('^[-+]?\d*\.?\d*$'));
}

function dividir(x, y) {
    return parseFloat(x.replace('^[-+]?\d*\.?\d*$')) / parseFloat(y.replace('^[-+]?\d*\.?\d*$'));
}

function subtrair(x, y) {
    return parseFloat(x.replace('^[-+]?\d*\.?\d*$')) - parseFloat(y.replace('^[-+]?\d*\.?\d*$'));
}

function multiplicar(x, y) {
    return parseFloat(x.replace('^[-+]?\d*\.?\d*$')) * parseFloat(y.replace('^[-+]?\d*\.?\d*$'));
}

app.listen(3000)

module.exports = {
    somar: somar,
    dividir: dividir,
    subtrair: subtrair,
    multiplicar: multiplicar
}