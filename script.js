import conversormoedas from "./conversormoedas.js";
import conversortemperatura from "./conversortemperatura.js"
import mentalista from "./mentalista.js";

//Código de boas vindas

alert("Bem vindo, por favor escolha a opção que você deseja utilizar.")

//Código com Opções em Lista

const menu = () => {
  let running = true;

while (running) {
  var menu = parseInt(prompt("Escolha uma opção: \n1. Conversão De Moedas \n2. Conversão De Temperatura \n3. Mentalista \n5. Sair"));
  switch (menu) {
  case 1:
        var option = parseInt(prompt("Escolha uma opção: \n1. Dolar \n2. Euro \n3. Iene \n4. Bitcoin \n5. Voltar ao menu anterior"));
        switch (option) {
          case 1:
            conversormoedas.dolar.convertDolarToReal();
            break;
          case 2:
            conversormoedas.euro.convertEuroToReal();
            break;
          case 3:
            conversormoedas.iene.convertIeneToReal();
            break;  
          case 4:
            conversormoedas.bitcoin.convertBitcoinToReal();
            break;     
          case 5:
            break;            
          default:
            alert("Opção inválida");
        }
        break;
  case 2:
        var option1 = parseInt(prompt("Escolha uma opção: \n1. Celsius para Fahrenheit \n2. Celsius para Kelvin \n3. Voltar ao menu anterior"));
        switch (option1) {
          case 1:
            conversortemperatura.celsius.convertCelsiusToFahrenheit();
            break;
          case 2:
            conversortemperatura.celsius1.convertCelsiusToKelvin();
            break;
          case 3:
            break;            
          default:
            alert("Opção inválida");
        }
        break;
  case 3:
        mentalista.mentalist.chooseOneNumber();
        break;      
  case 5:
        alert('Saindo...');
        running = false;
        break;   
 default:
      alert('Opção inválida');
      break;
    }
  }
};

menu();