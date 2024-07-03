const todoList = JSON.parse(localStorage.getItem('todo')) || [];
renderTodolist();

function clearTask(){
  todoListHTML='';
  todoList.splice(0, todoList.length);
  localStorage.removeItem('todo');
  renderTodolist();
}

function renderTodolist(){
  let todoListHTML='';
 for(let i=0; i<todoList.length; i++){
  const todoObject = todoList[i];
  const {name, dueDate} = todoObject;
  const html= `
  <div class="task-name">
  ${name}
  </div> 
  <div>${dueDate}</div>
  <div><button onclick="
  todoList.splice(${i},1);
  renderTodolist();
  localStorage.setItem('todo', JSON.stringify(todoList))
  " class="del-button">Delete</button></div>`;
  todoListHTML+=html;
}
document.querySelector('.js-tasks')
.innerHTML= todoListHTML;
}


function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
const name= inputElement.value;
 
const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;

if(name==='' || dueDate===''){
  alert('Please fill both name and due date of the task');
}
else{
 todoList.push({
  name,
  dueDate
});
 inputElement.value= '';
 dateInputElement.value='';
 renderTodolist();
 localStorage.setItem('todo', JSON.stringify(todoList));
}
}


