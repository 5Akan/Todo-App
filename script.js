const form = document.getElementById('form');
const input = document.getElementById('input');
const todoul = document.getElementById('todolist');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
   
    addTodos();
        
});

function addTodos(params) {
    
    const todo = input.value;

   if(todo){
       const todoli = document.createElement('li');
        todoli.innerText = todo;
       

        todoli.addEventListener('click', () => {
            todoli.classList.toggle('completed');
        });

        /**This 'contextmenu' simply makes you use 
         * rightclick to perform the event */
        todoli.addEventListener('contextmenu', (e) =>{
            e.preventDefault();

            todoli.remove();
        })

        input.value = '';
        todoul.appendChild(todoli);
   }
}

function updateLS(params) {
    
    const notesEl = document.querySelectorAll('li');

    const notes = [];

    notesEl.forEach((notesEl) =>{
        notes.push({
            text : notesEl.innerText
        })
    })
}