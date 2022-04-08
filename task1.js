const Arr = ["Anna", 'John', 'Joe', 'Dastan'];
const input = document.getElementById('name');
const btn2 = document.getElementById('btn2')

function Search (e){
    e.preventDefault()
    Arr.forEach(element => {
        const regex = new RegExp(`${input.value}`, 'gi');
        const result = regex.test()
        if (input.value === ''){
            alert('Поле пустое')
            return result === false
        }
        else if (result === false){
            alert('Не найдено совпадений')
        }
        else if (result ===  true){
            alert("Найдены совпадения")
        }
    });
}

btn2.addEventListener('click', Search)


