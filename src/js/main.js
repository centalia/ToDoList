import ToDoList from '/src/components/ToDoList/ToDoList.js'


class App{
  constructor(){
    this.todoList = new ToDoList('#app')
  }
}

new App();