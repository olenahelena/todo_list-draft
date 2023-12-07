"use strict"

// selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// events listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// functions

function addTodo(event) {
    event.preventDefault();
// create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-list__container');
// create li element
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
     todoDiv.appendChild(completeButton);

    // check mark button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // append to list

    todoList.appendChild(todoDiv);

    // clear to do input value

    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // delete todo item
    if ((item.classList[0]) = "delete-btn") {
        item.remove(); 
    }
}