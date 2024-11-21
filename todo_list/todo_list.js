// Select the elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Get the input value and remove extra spaces

    if (taskText === '') {
        alert('Please enter a task!'); // Alert if the input is empty
        return;
    }

    // Create a new <li> element
    const taskItem = document.createElement('li');

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a span to hold the task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    // Add event listener to the checkbox to toggle strikethrough
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskTextSpan.style.textDecoration = 'line-through';
            taskTextSpan.style.color = 'gray';
        } else {
            taskTextSpan.style.textDecoration = 'none';
            taskTextSpan.style.color = 'black';
        }
    });

    // Create a "Delete" button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem); // Remove the task item from the list
    });

    // Append the checkbox, text, and delete button to the task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);

    // Append the task item to the <ul>
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
});
