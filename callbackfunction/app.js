//callback function
function test(){
    console.log('this is a test function');
    let a = 2;
    console.log(a+10);
    return a;
}
function temp(f){
    let z = f();
    return z * 2;
}
console.log(temp(test))