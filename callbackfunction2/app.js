//callback function
function ab(b){
    return "a" + b;
}
function calltheparameter(p){
    return p("this is");
}
console.log(calltheparameter(ab));