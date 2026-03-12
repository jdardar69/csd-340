// Jordan Dardar
// Assignment 11.2 JavaScript - Part 3

let taskList = [
  "Complete discussion board",
  "Read chapter 11",
  "Submit assignment",
  "Review notes",
  "Check email",
  "Practice coding",
  "Update GitHub",
  "Study JavaScript",
  "Work on project",
  "Backup files"
];

function displayTasks() {
  const displayArea = document.getElementById("taskDisplay");
  const deleteSelect = document.getElementById("deleteSelect");

  displayArea.innerHTML = "";
  deleteSelect.innerHTML = '<option value="">-- Select item to delete --</option>';

  let orderedList = document.createElement("ol");

  for (let i = 0; i < taskList.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = taskList[i];
    orderedList.appendChild(listItem);

    let option = document.createElement("option");
    option.value = i;
    option.textContent = taskList[i];
    deleteSelect.appendChild(option);
  }

  displayArea.appendChild(orderedList);
}

function addTask() {
  const inputBox = document.getElementById("taskInput");
  const newTask = inputBox.value.trim();

  if (newTask === "") {
    alert("Please enter a task before clicking Add.");
    return;
  }

  taskList.push(newTask);
  alert("Added: " + newTask);
  inputBox.value = "";
  displayTasks();
}

function deleteLastTask() {
  if (taskList.length === 0) {
    alert("The task list is already empty.");
    return;
  }

  const removedTask = taskList.pop();
  alert("Deleted last entry: " + removedTask);
  displayTasks();
}

function deleteSelectedTask() {
  const deleteSelect = document.getElementById("deleteSelect");
  const selectedIndex = deleteSelect.value;

  if (selectedIndex === "") {
    alert("Please select an item to delete.");
    return;
  }

  const removedTask = taskList.splice(selectedIndex, 1);
  alert("Deleted selected item: " + removedTask[0]);
  displayTasks();
}

function sortTasks() {
  taskList.sort();
  alert("The task list has been sorted.");
  displayTasks();
}

window.onload = function () {
  displayTasks();
};