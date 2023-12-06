"use strict"

// selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// events listeners
todoButton.addEventListener('click', addTodo);


// functions

function addTodo(event) {
    event.preventDefault();
}