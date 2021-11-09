

//آرایه جدید شامل معدلهای بیشتر از 14
let average=[19, 12, 18, 13, 19, 14];
let maxaverage=[]
for(let i=0; i<average.length;i++){
    if(average[i]>14){
        maxaverage.push(average[i]);

    }

}
console.log(maxaverage)
// تابع معدلهای بیشتر از 14 
 function maximumaverage(a1){
    let maxaverage=[];
 for(let i=0; i < a1.length; i++){
     if(a1[i]>14){
         maxaverage.push(a1[i]);
     }
 }
 return maxaverage;
 }

 console.log(maximumaverage(average));




