
greeting();

var x=10;
console.log(x);
//hoisting takes place because the function is defined in the global execution context 
function greeting(){
    console.log("hello there!");
}
// function declared using arrow function consider it as var does not support hoisting
var hello = () => {
    console.log("hey bro!");
}

hello();

const o = {
"BreadOmlette": {
    "bread": 2,
    "eggs": 5,
    "onion": 5,
    "tomato": 2,
    "salt": 10
  },
  "Cake": {
    "eggs": 2,
    "flour": 1,
    "butter": 2,
    "sugar": 4
  },
  "FrenchToast": {
    "eggs": 3,
    "salt": 1,
    "milk": 1,
    "bread": 4,
    "flour": 1,
    "sugar": 4,
    "butter": 1
  },
  "Pudding": {
    "milk": 3,
    "flour": 5,
    "sugar": 4
  },
  "Sandwich": {
    "onion": 3,
    "tomato": 2,
    "lettuce": 3,
    "bread": 2
  }
}

function sum() {
const counter = {}
for(let x in o){
    let y = o[x];
    for(let itr in y){
        console.log(itr);
        if(counter[itr] === undefined){
            counter[itr] = y[itr];
        }
        else{
            counter[itr] += y[itr];

        }
    }
}
console.log(counter);
}

sum();