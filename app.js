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
const ol = document.querySelector('ol')
ol.appendChild(createAddBtn())
ol.appendChild(createRemoveBtn())
