let inputs = document.getElementById("userItem");
let clickBtn = document.getElementById("clickButton");
let ul = document.querySelector("ul");

let createListItemElement = function() {
    let listItem = createNewTask(inputs.value);
    ul.appendChild(listItem);
    inputs.value = "";
    bindTaskEvents(listItem);
    
}
function createNewTask(inputItem){
    // create List Item
    let item = document.createElement("li");
    // label
    let label = document.createElement("label");
    // input (text)
    let editInput = document.createElement("input");
    // button.edit
    let editButton = document.createElement("button");
    // button.delete
    let deleteButton = document.createElement("button");
    console.log(deleteButton);
    label.innerText = inputItem;
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
   
    item.appendChild(label);
    item.appendChild(editInput);
    item.appendChild(editButton);
    item.appendChild(deleteButton);

    return item;
}
function bindTaskEvents(taskListItem) {
   
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    let listCross = taskListItem.querySelector("label");

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;   
    listCross.onclick = crossOut; 
}

function editTask() {
    let currentItem = this.parentNode;
    let editInput = currentItem.querySelector("input[type=text]");
    let label = currentItem.querySelector("label");
    let containsClass = currentItem.classList.contains("editMode");

    // if the listItem element contains the editMode class
    if (containsClass) {
        //label text become the input's value
        label.innerText = editInput.value;
    } else {
        //input value becomes the labels text
        editInput.value = label.innerText;
    }
    currentItem.classList.toggle("editMode"); //to add/remove the Edit Mode
}

function deleteTask() {
    let currentItem = this.parentNode;
    let ulist = currentItem.parentNode;
    ulist.removeChild(currentItem);

    // currentItem.classList.add("deleteAll"); 
}

function crossOut() {
    //When the Checkbox is checked 
    //Append the task list item to the #completed-tasks ul
    let currentItem = this.parentNode;
    currentItem.classList.toggle("done");
}

function addItemOnClick(){
    if(inputs.value.length>0){
      createListItemElement(); 
    }
  }
  inputs.addEventListener("keyup",function(event){
    if(inputs.value.length>0 && event.keyCode===13)
    {
      createListItemElement();
    }
  })
  clickBtn.addEventListener("click", addItemOnClick);





  