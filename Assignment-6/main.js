const ul = document.querySelector('ul')
const inputText = document.querySelector('#item')
const addButton = document.querySelector('button')

addButton.addEventListener('click', () => {
    let item = inputText.value
    if(item !== '') {
        inputText.value = ''

        let li = document.createElement('li')
        let span = document.createElement('span')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')

        li.appendChild(span)
        li.appendChild(deleteButton)
        li.appendChild(editButton)

        span.textContent = item
        deleteButton.textContent = 'delete'
        editButton.textContent = 'edit'

        ul.appendChild(li)

        deleteButton.addEventListener('click', () => {
            ul.removeChild(li)
        })

        editButton.addEventListener('click', () => {
            inputText.value = span.textContent
            ul.removeChild(li)
        })
    }
})