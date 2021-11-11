console.log(document)
let ages=[19, 22, 33, 16, 18]
let paragraph=document.getElementById('paragraph')
paragraph.innerHTML=ages

let max=ages[0];
for(let i=0;i<ages.length;i++){
    if(ages[i]>max){
        max=ages[i];
    }
}
let title=document.getElementById('title')
title.innerHTML=max 
let ul=document.getElementsByTagName('ul')
console.log(document.getElementsByTagName('ul')[1])

let ul1=document.getElementsByTagName('ul')[0]
console.log(ul1,ul1.children)
