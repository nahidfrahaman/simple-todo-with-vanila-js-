/*
title : to do list by vanila javascript own practices
*/


// select the element and assign to variable 

let form = document.querySelector('form');
let newTask = document.querySelector('#new-task');
let todoUl = document.querySelector('#items')


let completeUl = document.querySelector('.complete-list ul');



// function 

let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkboxInput = document.createElement('input');
    let label = document.createElement('label');

    // assign task vale into label 

    label.innerText = ' ' + task;
    checkboxInput.type = 'checkbox'

    // apend as child into listItem 
    
    listItem.appendChild(checkboxInput);
    listItem.appendChild(label);

    return listItem;
}



let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value)
    
    //
    todoUl.appendChild(listItem);
    
    bindInCompleteItems(listItem, cheboxClick)

}

let cheboxClick = function () {
    // sleceting parent li of input checkbox 
    let listItem = this.parentNode;
   
    // seletcing checkbox
    let checkbox = listItem.querySelector('input[type="checkbox"]')
    listItem.removeChild(checkbox)

    // creating delte button
    let deletBtn = document.createElement('button');
    deletBtn.innerText = 'Delete';
    deletBtn.className = 'delete';

    // append delete btn 
    listItem.appendChild(deletBtn);
    completeUl.appendChild(listItem);

    bindCompleteItems(listItem , deleteItems);

    
}

let deleteItems = function () {
    let listItems = this.parentNode;
    completeUl.removeChild(listItems)
}

let bindCompleteItems = function (taskItem , deleteBtnClick) {
   let deletBtn = taskItem.querySelector('.delete')
   console.log(deletBtn);

   deletBtn.onclick = deleteBtnClick ;
  
}


let bindInCompleteItems = function (taskItem , cheboxClick) {
    let checkbox = taskItem.querySelector('input[type="checkbox');
   
    checkbox.onchange = cheboxClick;
}


for (let i = 0 ; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], cheboxClick);
}

for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteItems)
}


form.addEventListener('submit', addTask)