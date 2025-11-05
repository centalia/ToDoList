import AddTaskForm from "@/components/AddTaskForm"
import SearchTaskForm from "@/components/SearchTaskForm"
import TodoInfo from "@/components/TodoInfo"
import TodoList from "@/components/TodoList"

const Todo = () => {

    const tasks = [
        {id:'task-1', title: 'TODO1', isDone: false,},
        {id:'task-2', title: 'TODO2', isDone: false,},
        {id:'task-3', title: 'TODO3', isDone: false,},
        {id:'task-4', title: 'TODO4', isDone: false,}
    ]

    return(
        <div className="todo" >
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo 
                total   = {tasks.length}
                done    = {tasks.filter(({ isDone }) => isDone).length}
            />
            <TodoList tasks = {tasks} />
        </div>
    )
}

export default Todo