//تشخیص عدد اول
let i=12;
let aval=true;
for(let j=2; j<i;j++){
    if(i%j==0){
        aval=false
        console.log('adad aval nist')
    }

}
if(aval){
console.log('adad aval ast')
}
// تابع عدد اول 
let prime=true;
 function isprime(number){
    for(let j=2; j<number;j++){
        if(number%j===0){
            prime=false
            return false;
        }
    
    }
    if(prime){
        return true;
    }
 }
 console.log(isprime(10));
    
