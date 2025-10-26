import '/src/sass/index.scss'
import '/src/sass/components/todo.scss'

class ToDoList{
    constructor(Selector){
        this.container = document.querySelector(Selector);
        this.render();
    }

    render(){
        this.container.innerHTML = `
            <div class="todo">
                <h1 class="todo__title">To Do List</h1>
                <form class="todo__form">
                    <div class="todo__field field">
                        <div class="field__label">
                            <label 
                                class="field__label"
                                for="new-task"
                            >
                                New task
                            </label>
                            <input
                                class="field__input"
                                id="new-task"
                                placeholder=" "
                                autocomplete="off"
                            />
                        </div>
                        <button class="button"
                            type="submit"
                        >
                            Add
                        </button>
                    </div>
                </form>
                <form class="todo__form">
                    <div class="todo__field field">
                        <div class="field__label">
                            <label 
                                class="field__label"
                                for="search-task"
                            >
                                Search task
                            </label>
                            <input
                                class="field__input"
                                id="search-task"
                                placeholder=" "
                                autocomplete="off"
                                type="search"
                            />
                        </div>
                    </div>
                </form>
                <div class="todo__info">
                    <div class="todo__total-task">
                        Total Task: <span>0</span>
                    </div>
                <button class="todo__delete-all-btn"
                            type="button"
                        >
                            Delete All
                </button>
                </div>
                <ul class="todo__list">
                    <li class="todo__item todo-item">
                        <input class="todo-item__checkbox"
                            id="todo-1"
                            type="checkbox"
                        />
                        <label class="todo-item__label"
                            for="todo-1"
                        >
                            Todo 1
                        </label>
                        <button
                            class="todo-item__delete-button" 
                            type="button"
                            aria-label="Delete"
                            title="Delete"
                            >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </li>
                    <li class="todo__item todo-item">
                        <input class="todo-item__checkbox"
                            id="todo-2"
                            type="checkbox"
                        />
                        <label class="todo-item__label"
                            for="todo-2"
                        >
                            Todo 2
                        </label>
                        <button
                            class="todo-item__delete-button" 
                            type="button"
                            aria-label="Delete"
                            title="Delete"
                            >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </li>
                    <li class="todo__item todo-item">
                        <input class="todo-item__checkbox"
                            id="todo-3"
                            type="checkbox"
                        />
                        <label class="todo-item__label"
                            for="todo-3"
                        >
                            Todo 3
                        </label>
                        <button
                            class="todo-item__delete-button" 
                            type="button"
                            aria-label="Delete"
                            title="Delete"
                            >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </li>       
                </ul>
                <div class="todo__empty-message">
                    
                </div>
            </div>`
    }
}

export default ToDoList;