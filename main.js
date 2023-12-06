/*
Title : To do list with vanila javascript 
Date : 05-12-2023
*/


//select element and assign to variable 

let newtask = document.getElementById('new-task')
let form = document.querySelector('form');

let todoUl = document.querySelector('#items')
let completeUl = document.querySelector('.complete-list ul')


// creating function 

    let creatTask = function (task) {
        // creating a li element , label , checkbox input
        let listItem = document.createElement('li');
        let checkbox = document.createElement('input')
        let label = document.createElement('label')

       
        // checktype set , label text set ;
        label.innerText = ' ' + task ;
        checkbox.type = 'checkbox';
        // append element as a chid
        listItem.appendChild(checkbox);
        listItem.appendChild(label)
        // console.log(listItem)
        return listItem;
    }

    // adtask akta call back function 
    let addTask = function(event) {
        event.preventDefault() ;
        if(newtask.value === '') {
            return ;
        }
        let listItem = creatTask(newtask.value) // call create task function
        // console.log(listItem)
        
        todoUl.appendChild(listItem);
       
        
        // bind the new list item to the incomplete list

        bindInCompleteItems(listItem, completeTask)
    }


    
    let completeTask = function () {
        let listItem = this.parentNode ; // amra je input checkbox click kortece she tar parent amk dea disse ;
        
        // creating delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete' ;
        deleteBtn.className = 'delete'

        listItem.appendChild(deleteBtn);

        // remove checkbox ; complete task a checkbox nai ;
        let checkbox = listItem.querySelector('input[type="checkbox"]');
        checkbox.remove();

        // now append li into checkbox
        completeUl.appendChild(listItem)

        // bind delete function 
        bindCompleteItems(listItem, deleteTask)
    }
 
    let deleteTask = function () {
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        ul.removeChild(listItem);
    }
   
    let  bindCompleteItems = function (taskItem , deleteButtonClick) {
        let deleteBtn = taskItem.querySelector('.delete');
        deleteBtn.onclick = deleteButtonClick ;
    }
   

    let bindInCompleteItems = function (taskItem, checkboxClick) {
        let checkbox = taskItem.querySelector('input[type="checkbox"]');
        checkbox.onchange = checkboxClick;
    }

    for( let i = 0; i < todoUl.children.length; i++) {
        bindInCompleteItems(todoUl.children[i] , completeTask)
    }
    for( let i = 0; i < completeUl.children.length; i++) {
        bindCompleteItems(completeUl.children[i] , deleteTask)
    }

    
    form.addEventListener('submit', addTask)