//Módulos para Conversão de Moedas

    //Conversão Dolar para Real
    const dolar = {
        convertDolarToReal: function() {
          var dolarToReal = parseFloat(prompt('Digite um valor em Dólar para a conversão: '));
          var dolarValue = 5.32;
          var resultDolarToReal = dolarToReal * dolarValue;
          alert('O valor de $' + dolarToReal + ' em Dolar para Reais é de R$' + resultDolarToReal.toFixed(2) + '.');
        }
      };
  
      //Conversão Euro para Real
      const euro = {
        convertEuroToReal: function() {
          var euroToReal = parseFloat(prompt('Digite um valor em Euro para a Conversão: '));
          var euroValue = 5.55;
          var resultEuroToReal = euroToReal * euroValue;
           alert('O valor de €' + euroToReal + ' em Euro para Reais é de R$' + resultEuroToReal.toFixed(2) + '.');
        }
      };
  
      //Conversão Iene para Real  
      const iene = {
        convertIeneToReal: function() {
          var ieneToReal = parseFloat(prompt('Digite um valor em Iene para a Conversão: '));
          var ieneValue = 0.039;
          var resultIeneToReal = ieneToReal * ieneValue;
          alert('O valor de ¥' + ieneToReal + ' em Iene para Reais é de R$' + resultIeneToReal.toFixed(2) + '.');
        }
      };
  
      //Conversão Bitcoin para Real  
      const bitcoin = {
        convertBitcoinToReal: function() {
          var bitcoinToReal = parseFloat(prompt('Digite um valor em Bitcoin para a Conversão: '));
          var bitcoinValue = 117491.51;
          var resultBitcoinToReal = bitcoinToReal * bitcoinValue;
          alert('O valor de ₿' + bitcoinToReal + ' em Bitcoin para Reais é de R$' + resultBitcoinToReal.toFixed(2) + '.');
        }
      };

      
export default {
    dolar: dolar,
    euro: euro,
    iene: iene,
    bitcoin, bitcoin,
};