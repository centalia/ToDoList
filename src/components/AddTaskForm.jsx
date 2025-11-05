import Button from "@/components/Button"
import Field from "@/components/Field"

const AddTaskForm = () => {
    return(
        <form className="todo__form">
            <Field className = "todo_field"
                label = "New Task"
                id = "new-task"
            />
            <Button type = "submit">Add</Button>
        </form>
    )
}

export default AddTaskForm