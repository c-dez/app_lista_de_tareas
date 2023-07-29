let taskArray = ['test', 'cat']
const ol = document.querySelector('.task-list>ol')
const submitBtn = document.querySelector('.submitBtn')


const createAddBtn = ()=>{
    const addBtn = document.createElement('button');
    addBtn.classList.add('addbtn');
    addBtn.innerHTML = '<img src="./icons/check-bold.png"></img>'
    addBtn.style.backgroundColor = 'green'
    addBtn.style.width = '30px'
    addBtn.style.height = '30px'
    addBtn.style.borderRadius = '20px'
    addBtn.style.border = '0px'

    const img = addBtn.querySelector('img')
    img.style.width = '20px'
    img.style.display = 'block'
    img.style.margin = 'auto'

    return addBtn;
}

const createRemoveBtn = ()=>{
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerHTML = '<img src="./icons/cancel.png"></img>'
    removeBtn.style.backgroundColor = 'red'
    removeBtn.style.width = '30px'
    removeBtn.style.height = '30px'
    removeBtn.style.borderRadius = '20px'
    removeBtn.style.border = '0px'

    const img = removeBtn.querySelector('img')
    img.style.width = '20px'
    img.style.display = 'block'
    img.style.margin = 'auto'

    return removeBtn;
}



const addToTaskArray = ()=>{//push to array and cleans value
    const inputText = document.querySelector('.inputText')
    if(inputText.value){
        taskArray.push(inputText.value)
        inputText.value = ''
    }
}

    

(()=>{//creates list form array
    taskArray.forEach(item=>{
        const task = document.createElement('div')
        task.textContent = item
        ol.appendChild(task)
        task.appendChild(createAddBtn())
        task.appendChild(createRemoveBtn())
    })
})()

const addTaskToTaskList = ()=>{
    const task = document.createElement('li')
    task.textContent = taskArray[taskArray.length -1]
    ol.appendChild(task)
    task.appendChild(createAddBtn())
    task.appendChild(createRemoveBtn())

}

submitBtn.addEventListener('click',()=>{
    const inputText = document.querySelector('.inputText')
    if(inputText.value){
        addToTaskArray()
        addTaskToTaskList()

    }

})
