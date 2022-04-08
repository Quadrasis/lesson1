const obj = {
    name: 'Bruce',
    surname: 'Wayne',
    age: '?'
}

const json = JSON.stringify(obj)
localStorage.setItem('product', json)
const product = localStorage.getItem('product')
const obj2 = JSON.parse(product)
console.log(obj2)

function del () {
    localStorage.clear()
}

function del2() {
    localStorage.removeItem(`${document.getElementById('del_input').value}`, json)
}

function add (){
    localStorage.setItem(`${document.getElementById('add_input').value}`, json)
}

document.getElementById('delete').addEventListener('click', del)
document.getElementById('add').addEventListener('click', add)
document.getElementById('key_delete').addEventListener('click', del2)
