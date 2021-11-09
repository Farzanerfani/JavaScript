let test=()=>{
    console.log('test')
}
test();



let test1=(a,b)=>{
    return a+b;
}
console.log(test1(10,20));

let addtwo2=(a)=>a+2;
console.log(addtwo2(12));

let ages=[12,14,18,15,13];
let x=ages.filter(element => element>14)
console.log(x)