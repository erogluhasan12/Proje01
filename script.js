let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click', function(){
    let paragragh = document.createElement('p');
    paragragh.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragragh);
    paragragh.innerHTML = inputText.value;
    inputText.value = "";

    paragragh.addEventListener('click', function(){
        paragragh.style.textDecoration = 'line-through';
    })

    paragragh.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragragh);
    })

    clearToDo.addEventListener('click', function(){
        paragragh.remove();
    })
})
