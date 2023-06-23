const empties = document.querySelectorAll('.empty')
let temp_id
let temp = []

let todos = [
    {
        id: 'Hello',
        title: 'Buy milk',
        description: 'description will be here'
    },
    {
        id: 'Hello',
        title: 'Buy ball',
        description: 'description will be here'
    },
    {
        id: 'Hello',
        title: 'Do homework',
        description: 'description will be here'
    }
]

for(let todo of todos) {
    let div = document.createElement('div')
    let b = document.createElement('b')
    let p = document.createElement('p')

    div.setAttribute('id', todo.id)
    div.setAttribute('class', 'fill')
    div.setAttribute('draggable', true)

    b.innerHTML = todo.title
    p.innerHTML = todo.description

    div.append(b, p)
    empties[0].append(div)

    temp.push(div)

    div.ondragstart = () => {
        temp_id = todo.id
        div.classList.add('hold')
        setTimeout(() => (div.className = 'invisible'), 0)
    }
    div.ondragend = () => {
        div.className = 'fill'
    }
}

for(empty of empties) {

    empty.ondragover = (event) => {
        event.preventDefault()
    }
    empty.ondragenter = function(event) {
        event.preventDefault()
        this.className += ' hovered'
    }
    empty.ondragleave = function() {
        this.className = 'empty'
    }
    empty.ondrop = function() {
        this.className = 'empty'
        temp.forEach((item, index) => {
            if(item.id === temp_id) {
                this.append(item)
            }
        })
    }
}