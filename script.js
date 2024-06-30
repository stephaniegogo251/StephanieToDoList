document.addEventListener('DOMContentLoaded', () => {
    const tasksList = document.getElementById('tasks');
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');

    addTaskButton.addEventListener('click', () => {
        const newTaskText = newTaskInput.value.trim();

        if (newTaskText === "") {
            alert("Please enter a task.");
            return;
        }

        const newTask = document.createElement('div');
        newTask.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskLabel = document.createElement('label');
        taskLabel.textContent = newTaskText;

        newTask.appendChild(checkbox);
        newTask.appendChild(taskLabel);
        tasksList.appendChild(newTask);

        newTaskInput.value = "";
    });
});
