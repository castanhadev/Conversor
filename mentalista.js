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

      export default{
        mentalist: mentalist,
      }