var assert = require('assert');
const index = require('./index');

describe('Calculos', function() {
  describe('somar()', function() {
    it('Deve retornar 2 para a soma dos valores.', function() {
       var resultado = index.somar("1","1"); 
       assert.equal(resultado, 2);
    });
  });

 
    describe('somar()', function() {
      it('Deve retornar 123.000 para a soma dos valores.', function() {
         var resultado = index.somar("-123","123123"); 
         assert.equal(resultado, 123000);
      });
    });

    describe('subtrair()', function() {
      it('Deve retornar 22 para a subtração dos valores.', function() {
         var resultado = index.subtrair("10","-12"); 
         assert.strict.equal(resultado, 22);
      });
    });


    describe('dividir()', function() {
      it('Deve retornar -10.25 para a divisão dos valores.', function() {
         var resultado = index.dividir("123","-12"); 
         assert.strict.equal(resultado, -10.25);
      });
    });

    describe('multiplicar()', function() {
      it('Deve retornar 0 para a divisão dos valores.', function() {
         var resultado = index.multiplicar("8","0"); 
         assert.strict.equal(resultado, 0);
      });
    });

    describe('multiplicar()', function() {
        it('Deve retornar 15.257.321.499 para a divisão dos valores.', function() {
           var resultado = index.multiplicar("1239123","12313"); 
           assert.strict.equal(resultado, 15257321499);
        });
      });
});

