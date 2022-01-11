
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