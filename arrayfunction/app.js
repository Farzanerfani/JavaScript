//callback function
let ages = [19, 18, 14, 17, 12, 13];

let morthan14=ages.filter(function(element){
    if(element>14){
        return true;
    }
    else{
        return false;
    }
})
console.log(morthan14)

let t=ages.findIndex(function(element){
    if(element===13){
        return true;
    }
    else {
        return false;
    }
})
console.log(t);