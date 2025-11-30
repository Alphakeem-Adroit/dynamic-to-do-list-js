document.addEventListener('DOMContentLoaded', function () {
  
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();

        
        if (taskText === ""){
        // Prompting user to enter a task if nothing was entered
            alert("Enter a task");
        } else {
        // Adding and removing items to list when entered
            const li = document.createElement("li");
            li.textContent = taskText;

            const removeButton = document.createElement("button");
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.onclick = function () {
                li.remove();
            }

            li.appendChild(removeButton);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    }

    // Ensuring DOM loaded before invoking addTask function
    document.addEventListener('DOMContentLoaded', addTask);

    // Making Add Task button function as intended in addTask when clicked
    addButton.addEventListener('click', addTask);

    // Enabling Enter key on keyboard to work as same as pressing the Add Task button on the app interface
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});