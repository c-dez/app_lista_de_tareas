let taskArray = []
const taskList = document.querySelector('.taskList>.container')
const submitBtn = document.querySelector('.submitBtn')
const inputText = document.querySelector('.inputText')


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

function NewObj(value){
    this.value = value;
    // this.addBtn = createAddBtn()
}
NewObj.prototype.getValue = function(){ return this.value}

const addBtnFunc = ()=>{
    const obj=new NewObj(inputText.value)
    taskArray.push(obj)
    const value = document.createElement('div')
    value.textContent = obj.value
    taskList.appendChild(value)

    const addBtn = createAddBtn()
    taskList.appendChild(addBtn)
    addBtn.addEventListener('click',()=>{
        console.log(obj.getValue())
    })
}

submitBtn.addEventListener('click', ()=>{
    if(inputText.value){
    addBtnFunc()
    }
})



    


