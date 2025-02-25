function AddTask(props) {
    function AddTask({handleSubmit, task, setTask, editid}) {
        return (
            <section className="addTask">
                <form>
                onSubmit={props.handleSubmit}
                    <input type="text" />
                    <button type="submit">{ props.test }</button>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit">{ editid ? 'Update' : 'Add' }</button>
                    </form> 
                </form>
            </section>
        )
    }
}

