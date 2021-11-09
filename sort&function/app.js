

let average=[19, 12, 18, 13, 19, 14];
// //لیست عناصر را به ترتیب معدل از کم به زیاد قرار دهد
let x=0
for(let i=0;i<average.length;i++){
    for(let j=0;j<average.length;j++){
        if(average[i]<average[j]){
            x=average[j];
            average[j]=average[i];
            average[i]=x;
        }
    }
}
let sortaverage=average;
console.log(sortaverage)
//تابع لیست عناصر را به ترتیب معدل از کم به زیاد قرار دهد
function sort(a1){
    let x=0
for(let i=0;i<a1.length;i++){
    for(let j=0;j<a1.length;j++){
        if(a1[i]<a1[j]){
            x=a1[j];
            a1[j]=a1[i];
            a1[i]=x;
        }
    }
}
return a1;
}
console.log(sort(average));



