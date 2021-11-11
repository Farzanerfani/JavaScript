let btn=document.getElementsByTagName('button')[0]
btn.addEventListener('click', ()=>{
    let input=document.getElementById('new-task')
    let li=document.createElement('li')
    let label=document.createElement('label')
    label.innerHTML=input.value
    let deletebutton=document.createElement('button')
    deletebutton.classList=['delete']
    deletebutton.innerHTML='delete' 
    li.appendChild(label)
    li.appendChild(deletebutton)


    let ul=document.getElementById('incomplete-tasks')
    ul.appendChild(li)

    input.value=""
})
