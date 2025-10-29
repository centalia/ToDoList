import AddTaskForm from "@/components/AddTaskForm"
import SearchTaskForm from "@/components/SearchTaskForm"
import Todoinfo from "./components/TodoInfo"

const App = () => {
    return(
        <div className="todo" >
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <Todoinfo />
                <ul className="todo__list">
                    <li className="todo__item todo-item">
                        <input className="todo-item__checkbox"
                            id="todo-1"
                            type="checkbox"
                        />
                        <label 
                            className="todo-item__label"
                            htmlFor="todo-1"
                        >
                            Todo 1
                        </label>
                        <button
                            className="todo-item__delete-button" 
                            type="button"
                            aria-label="Delete"
                            title="Delete"
                            >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </li>
                    <li className="todo__item todo-item">
                        <input className="todo-item__checkbox"
                            id="todo-2"
                            type="checkbox"
                        />
                        <label className="todo-item__label"
                            htmlFor="todo-2"
                        >
                            Todo 2
                        </label>
                        <button
                            className="todo-item__delete-button" 
                            type="button"
                            aria-label="Delete"
                            title="Delete"
                            >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </li>
                    <li className="todo__item todo-item">
                        <input className="todo-item__checkbox"
                            id="todo-3"
                            type="checkbox"
                        />
                        <label className="todo-item__label"
                            htmlFor="todo-3"
                        >
                            Todo 3
                        </label>
                        <button
                            className="todo-item__delete-button" 
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
            <div className="todo__empty-message"></div>
        </div>
    )
}

export default App