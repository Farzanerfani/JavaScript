

//آرایه جدید شامل معدلهای کمتر از 14
let average=[19, 12, 18, 13, 19, 14];
let minaverage=[]
for(let i=0; i<average.length;i++){
    if(average[i]<14){
        minaverage.push(average[i]);

    }

}
console.log(minaverage)
// تابع معدلهای کمتر از 14 
 function minimumaverage(a1){
    let minaverage=[];
 for(let i=0; i < a1.length; i++){
     if(a1[i]<14){
         minaverage.push(a1[i]);
     }
 }
 return minaverage;
 }

 console.log(minimumaverage(average));




