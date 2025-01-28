// Business name generater Using strings and functions

console.log("business name generater");

// asuming a random number
let num = Math.random();
console.log(num);
function adj() {
  if (num > 0 && num < 0.33) {
    return "Crazy";
  } else if (num > 0.33 && num < 0.66) {
    return "Fire";
  } else {
    return "Amazing";
  }
}

function middle() {
  if (num > 0 && num < 0.33) {
    return "Engine";
  } else if (num > 0.33 && num < 0.66) {
    return "Foods";
  } else {
    return "Garments";
  }
}
function lastword() {
    if (num > 0 && num < 0.33) {
      return "Bros";
    }
    else if(num >0.33 && num < 0.66){
      return "Limited";
    }
    else{
      return "Hub";
    }
  }

let adjective = console.log(adj());
let MiddleName = console.log(middle());
let Word = console.log(lastword());
let statement = "the ane of the business is :" + adjective + MiddleName + Word;
