import { useState } from 'react'

function TodoInput(props) {
    const { addTodo } = props
    function addTodoHandler() {
        addTodo('some text')
    }
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={increase}>{count}</button>
            <p onClick={addTodoHandler}>todo input</p>
        </div>
    )
}

export default TodoInput