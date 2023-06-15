let submit =document.querySelector('.submitTodo')
let textTodo =document.querySelector('.textTodo')
let ulText =document.querySelector('.text');
let liText =document.querySelector('.textListItem')
console.log(ulText)
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const newTodoItem =textTodo.value;
    if(newTodoItem != ""){
        let newLi =document.createElement('li')
    newLi.className ='textListItem';
    let newLiInnerHtml =`<span class="task">${newTodoItem}</span>
    <div class="buttons">
        <button class="liBtn done">Done</button>
        <button class="liBtn remove">Remove
        </button>
    </div>`
    newLi.innerHTML =newLiInnerHtml;
    ulText.append(newLi)
    }
    
    textTodo.value =""
})

ulText.addEventListener("click", (e)=>{
    console.log(e.target.innerHTML)
    if(e.target.classList.contains('remove')){
       let ul =e.target.parentNode.parentNode;
       ul.remove();
    }
    if(e.target.classList.contains('done')){
        const span=e.target.parentNode.previousElementSibling;
        span.style.textDecoration ='line-through'
    }
})


liText.addEventListener('enter', ()=>{})