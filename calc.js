 function addition(number1 , number2){
     return number1 + number2;
 }

 function substraction( number1 , number2){
     return number1 - number2;
 }

 function division(number1 , number2){
     return number1 / number2;
 }

 function multiplication(number1 , number2){
     return number1 * number2;
 }

 function calculate(){

    let Firstnumber = Number(document.getElementById("first").value)
    let Secondnumber = Number(document.getElementById("second").value)
    let operation = document.getElementById("operation").value
    let answer =  document.getElementById("answer")

    switch(operation){
        case "+":
          result = addition(Firstnumber , Secondnumber)
          break;

          case "-":
              result = substraction(Firstnumber , Secondnumber)
              break;

              case "*":
                  result = multiplication(Firstnumber , Secondnumber)
                  break;

                  case "/":
                  result = division(Firstnumber, Secondnumber)
                  break;

                  default:
                      result = "Invalid input"
                      break;
                
    }
    answer.textContent = `${Firstnumber} ${operation} ${Secondnumber} = ${result}`
 }