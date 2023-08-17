'use strict'
const addTaskInput=document.querySelector('.add-input')
const addTask = document.querySelector('.add-task')
const editTask = document.querySelectorAll('i')

addTask.addEventListener('click',()=>{
    fetch('/',{
        method : 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body : JSON.stringify({
            description :addTaskInput.value
        })
    }).then(response=>{
        if(!response.ok) {
            alert('task description cannot be empty')
            window.location.href = "/";

    }
        console.log('clearing')
        addTaskInput.value=""
        window.location.href = "/";
    })
})
editTask.forEach(task=>{
    task.addEventListener('click',(e)=>{
        const div =e.target.parentElement.parentElement
        const id=div.parentElement.querySelector('input').value
       div.innerHTML ="<input type='text' class='editTaskInput'> <button class='edit-task'>done</button>"
       const input=div.querySelector('.editTaskInput')
       div.querySelector('.edit-task').addEventListener('click',()=>{
       fetch('/',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body :JSON.stringify({
            newDescription : input.value,
            id 
        })

       }).then(response=>{
        if(!response.ok)
        alert('task description cannot be empty')
       
        window.location.href = "/";
       })
       })
       
    })
})
