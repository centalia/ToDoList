const Todoinfo = (props) =>{

    const {
        total,
        done
    } = props 

    const hasTask = total > 0;

    return(
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done {done} from {total}
            </div>
            {hasTask && (
                <button className="todo__delete-all-button" type="button">
                    Delete all
                </button>
            )}
        </div>
    )
}

export default Todoinfo