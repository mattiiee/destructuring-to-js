const { Todo } = require('./todos.js')
function todoManagement() {
  let todos = []
  function addTodo(description) {
    const todo = new Todo(description)
    return todos.push(todo)
  }
  function findTodo(searchId) {
    // console.log(todos)
    const result = todos.find((todo) => searchId === todo.id)
    return result
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => searchId === todo.id)
  }
  function removeTodo(removeId) {
    todos.splice(findIndexTodo(removeId), 1)
    console.log(todos)
  }
  function getTodos() {
    return todos
  }
  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos
  }
}
function doSomething(msg) {
  return msg
}
module.exports = { todoManagement, doSomething }
  const todo1 = new Todo('Laundry')
  const todo2 = new Todo('Exercise')
  console.log(todo1.getTodo())
  console.log(todo2.getTodo())
  todo2.setDescription('Play game')
  console.log(todo2.getTodo())
  // const todoManagement = TodoManagement()
  // console.log(todoManagement.addTodo('Running'))
  // console.log(todoManagement.addTodo('Hello world, Goose'))
  const { addTodo, findTodo, findIndexTodo, removeTodo, getTodos } =
    todoManagement()
  console.log(addTodo('Devops Su Su'))
  console.log(addTodo('Frontend Su Su'))
  console.log(findTodo(1))
  console.log(findIndexTodo(1))
  console.log(findIndexTodo(3))
  // removeTodo(3)
  console.log(getTodos())