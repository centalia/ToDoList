const Todoinfo = () =>{
    return(
        <div className="todo__info">
            <div className="todo__total-tasks">
                Total tasks: <span>0</span>
            </div>
            <button className="todo__delete-all-button is-visible" type="button">
                Delete all
            </button>
        </div>
    )
}

export default Todoinfo