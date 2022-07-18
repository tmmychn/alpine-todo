import "./styles/TodoComponent.css"

export default () => {
    return (
        <div className="todo-container">
            <div className="todo-create todo-style">
                <span className="todo-checkbox"/>
                <input type="text" placeholder="Create a new todo..." 
                id="todo-create-input" /> 
            </div>
            <div className="overflow-container">
                <div 
                    className="todo-list-container" 
                    x-data={`
                        {
                            todoItems:[
                                "Complete todo app",
                                "Learn Alpine",
                                "Jog in the park",
                            ],
                            count: 0,
                        }
                    `}
                >
                    <ul className="todo-list">
                        <template x-for="item in todoItems" x-bind:key="item">
                            <li className="todo-item-container todo-style active" x-text="item"></li>
                        </template> 
                    </ul>
                    <div className="todo-menu-container text-semitrans">
                        <div><span x-text="count"></span> items left</div>
                        {/* Clear completed button */}
                        <button x-on:click="count++">Clear Completed</button>
                    </div>
                </div>
            </div>
            
            <h3 className="drag-text text-semitrans">Drag and drop to reorder list</h3>
        </div>
    )
}