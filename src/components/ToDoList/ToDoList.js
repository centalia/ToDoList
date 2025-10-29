import '/src/sass/index.scss'
import '/src/sass/components/todo.scss'

class ToDoList{
    constructor(Selector){
        this.container = document.querySelector(Selector);
        this.render();
    }

    render(){
        this.container.innerHTML = `
        `
    }
}

export default ToDoList;