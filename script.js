const form = document.getElementById('form');
const input = document.getElementById('input');
const todoul = document.getElementById('todolist');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => {
        addTodos(todo);
    })
}


form.addEventListener('submit', (e) =>{
    e.preventDefault();
   
    addTodos();
        
});

function addTodos(todo) {
    
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

   if(todoText){
       const todoli = document.createElement('li');

       
    if(todo && todo.completed){
        todoli.classList.add('completed');
       }

        todoli.innerText = todoText;
       
        todoli.addEventListener('click', () => {
            todoli.classList.toggle('completed');
            updateLS();
        });

        /**This 'contextmenu' simply makes you use 
         * rightclick to perform the event */
        todoli.addEventListener('contextmenu', (e) =>{
            e.preventDefault();

            todoli.remove();
            updateLS();
        })

        todoul.appendChild(todoli);
        input.value = '';

        updateLS();
   }
   
}

function updateLS() {
    const todoEl = document.querySelectorAll('li');

    const todos = [];

    todoEl.forEach((todoEl) =>{
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed'),
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos));
}