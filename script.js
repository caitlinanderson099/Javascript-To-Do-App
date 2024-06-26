function addTodo() {
    // grab the input element and its value
    const input = document.getElementById('todo-input');
    // grab the value and trim the white space at the start and/or end
    const inputValue = input.value.trim();

    // Check to see if the input value isn't empty
    if (inputValue !== "") {
        // Create a new list item (li)
        // Grab the unordered list (ul) from the html
        const todoList = document.getElementById('todo-list');
        // Create a list item using   createElement
        const li = document.createElement('li');
        // Create a checkbox using   createElement
        const checkbox = document.createElement('input'); // input because the checkbox is an input in html, this makes it an input
        // Set checkbox element to a checkbox - this makes it a checkbox
        checkbox.type = 'checkbox';
        // Create a textNode that uses the inputvalue
        const textNode = document.createTextNode(inputValue);

        // Append the checkbox and text to the list item (li)
        li.appendChild(checkbox);
        li.appendChild(textNode);
        // Append the list item (li) to the unordered list (ul) of todo list
        todoList.appendChild(li);
    } else {
        // if it is empty, alert user that it is empty
        alert("Please enter a valid to do item");
    }
}

// Add an eventlistener to the 'Add Button' to add a new todo item
document.getElementById('add-button').addEventListener('click', addTodo);

// Event  Listener to mark todo items as completed

// onchange event on the todo item 

document.getElementById('todo-list').addEventListener('change', function(event) {
    //check if the event trigger was a checkbox
    if (event.target.type === 'checkbox') {
        // grab the parent list item of the checkbox
        const listItem = event.target.parentNode;
        // check if the checkbox is checked or not
        if (event.target.checked) {
            // apply line-through style when the checkbox is checked
            listItem.style.textDecoration = "line-through";
        } else {
            // remove the line-through when unchecked
            listItem.style.textDecoration = "none";
        }
    }
})
