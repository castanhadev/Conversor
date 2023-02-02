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

    //Anos Luz para Quilômetros
    const lightyear = {
      convertLightYearToKm: function() {
        var kmValue = parseFloat(prompt('Digite um valor em Quilômetro para a Conversão: '));
        var lightYearValue = 0.00000000000010570
        var resultLightYearToKm = kmValue * lightYearValue;
        alert('O valor de ' + kmValue + ' em Quilómetro para Anos Luz é de ' + resultLightYearToKm.toExponential(2) + '.');
      }
    };

    //Mentalista
    const mentalist = {
      chooseOneNumber: function() {
        var randomNumber = parseInt(Math.random(0.001, 0.999) * 1001),
        choice, remainChoices;

        remainChoices = prompt("Bem Vindo! Defina o número máximo de tentativas para o jogo.");

        while (choice != randomNumber && remainChoices >= 1) { // Enquanto o chute estiver errado E (&&) chancesRestantes for maior ou igual a 1, o program é executado. Se o chute estiver correto ou o valor de chancesRestantes for menor que 1, a execução é encerrada.
        choice = prompt("Chute um número inteiro de 1 a 1000.");

        if(!choice) {
          alert('Isso é como desistir... Você Perdeu.')
          break;
          }

        if(choice<1 || choice>1000){
          alert('Por favor, digite um número entre 1 e 1000.')
        } else{      
          remainChoices = remainChoices - 1; //a cada tentativa, o valor de chancesRestantes é reduzido em 1
            if (choice == randomNumber) {
              alert("Acertou!");
            } else if (choice > randomNumber) {
              alert("O número secreto é menor do que " + choice + ". \nRestam " + remainChoices + " tentativa(s) para acertar.");
            } else if (choice < randomNumber) {
              alert("O numero secreto é maior do que " + choice + ". \nRestam " + remainChoices + " tentativa(s) para acertar.");
            }

            if (remainChoices == 0) {
              alert("Suas chances acabaram. Fim de Jogo.");
            }
            }
          }
              }
    }; 

//Código de boas vindas

alert("Bem vindo, por favor escolha a opção que você deseja utilizar.")

//Código com Opções em Lista

const menu = () => {
  let running = true;

while (running) {
  var menu = parseInt(prompt("Escolha uma opção: \n1. Conversão De Moedas \n2. Conversão De Temperatura \n3. Conversão Anos Luz / KM \n4. Mentalista \n5. Sair"));
  switch (menu) {
  case 1:
        var option = parseInt(prompt("Escolha uma opção: \n1. Dolar \n2. Euro \n3. Iene \n4. Bitcoin \n5. Voltar ao menu anterior"));
        switch (option) {
          case 1:
            dolar.convertDolarToReal();
            break;
          case 2:
            euro.convertEuroToReal();
            break;
          case 3:
            iene.convertIeneToReal();
            break;  
          case 4:
            bitcoin.convertBitcoinToReal();
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
            celsius.convertCelsiusToFahrenheit();
            break;
          case 2:
            celsius1.convertCelsiusToKelvin();
            break;
          case 3:
            break;            
          default:
            alert("Opção inválida");
        }
        break;
  case 3:
        lightyear.convertLightYearToKm();
        break;
  case 4:
        mentalist.chooseOneNumber();
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