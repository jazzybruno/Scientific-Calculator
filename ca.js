function sine(angle){
    return Math.sin(angle * Math.PI/180);
}

function cosine(angle){
    return Math.cos(angle);
}

function tangent(angle){
    return Math.tan(angle);
}

function square(num1){
    return num1 * num1;
}

function root(num1){
    return Math.sqrt(num1);
}

function LN(num1){
    return Math.log(num1);
}



function calculate(){

    let cat = Number(document.getElementById("first").value)
    let operation = document.getElementById("operation").value
    let answer =  document.getElementById("answer")
    
    
    switch(operation){
        case "sin":
          result = sine(cat)
          break;

          case "cos":
              result = cosine(cat)
              break; 

              case "tan":
                  result = tangent(cat)
                  break;

                  case "sq":
                      result = square(cat)
                      break;

                      case "sqrt":
                          result =  root(cat)
                          break;

                          case "ln":
                              result = LN(cat)
                              break;

                              
                                  
                              default :
                              result - "Invalid input"
                              break;
    }
    
    answer.textContent = `${cat} ${operation} = ${result}`
}

