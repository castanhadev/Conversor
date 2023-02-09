//Módulos para Conversão De Temperatura

    //Celsius para Fahrenheit
    const celsius = {
        convertCelsiusToFahrenheit: function() {
          var celsiusValue = parseFloat(prompt('Digite um valor em Graus Celsius para a Conversão: '));
          var celsiusToFahrenheit = (celsiusValue * 9/5) + 32;
          alert('O valor de ' + celsiusValue + 'º Graus Celsius para Fahrenheit é de ' + celsiusToFahrenheit +'ºF' + '.');
        }
      };
  
      //Celsius para Kelvin
      const celsius1 = {
        convertCelsiusToKelvin: function() {
          var celsiusValue = parseFloat(prompt('Digite um valor em Graus Celsius para a Conversão: '));
          var celsiusToKelvin = (celsiusValue + 273.15);
          alert('O valor de ' + celsiusValue + 'º Graus Celsius para Kelvin é de ' + celsiusToKelvin +'ºK' + '.');
        }
      };

export default {
    celsius: celsius,
    celsius1: celsius1,
}