class Todo {
    static nextId = 1
    constructor(description) {
        this.id = Todo.nextId++
        this.description = description
    }

    getTodo() {
        return this
    }

    setDescription(newDescription) {
        this.description = newDescription
    }
}
module.exports = {Todo}
const todo1 = new Todo('Laundry')
const todo2 = new Todo('Exercise')

console.log(todo1.getTodo());
console.log(todo2.getTodo());
todo2.setDescription('Games')
console.log(todo2.getTodo());
