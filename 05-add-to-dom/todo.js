let btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', function(){
    let taskName = document.querySelector('#newTask').value;

    let taskElement = document.createElement('li'); // ==> <li></li>

    let taskLabel = document.createElement('span'); // ==> <span></span>
    taskLabel.innerHTML = taskName; // ==> <span>taskName</span>
    taskElement.appendChild(taskLabel); // ==> <li><span>taskName</span></li>

    // create an independent button element
    let editButtonElement = document.createElement('button'); 
    // ==> <button></button>
    editButtonElement.innerHTML = "Edit"; // ==> <button>Edit</button>
    editButtonElement.addEventListener('click', function(){
        let newTaskName = prompt(`change task name from ${taskName} to?`);
        taskLabel.innerHTML = newTaskName;
    })

    // add the button to the task element
    taskElement.appendChild(editButtonElement); // ==> <li>taskName<button>...</button></li>

    let parentElement = document.querySelector('#todos');
    parentElement.appendChild(taskElement);



})