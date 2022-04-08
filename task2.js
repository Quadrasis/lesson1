const btn = document.getElementById('btn');
const numbers = document.getElementById('numbers')

function addNumberTag (){
    const regex = new RegExp(`\\W`, 'g')
    const div = document.getElementById('div')
    const a = document.createElement('a')
    div.append(a)

    a.innerText = numbers.value.replace(regex, '')
    a.setAttribute('href', `tel:${numbers.value.replace(regex, '')}`)
}



btn.addEventListener('click', addNumberTag)
