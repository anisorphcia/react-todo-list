import { useState } from 'react'

function TodoInput(props) {
    const { addTodo } = props
    function addTodoHandler() {
        addTodo(text)
        setText('')
    }
    const [text, setText] = useState('')

    function handleChangeText(event){
        // 修改 text 内容
        setText(event.target.value)
    }
    return (
        <div>
            <input value={text} onChange={handleChangeText}/>
            <button onClick={addTodoHandler}>todo input</button>
        </div>
    )
}

export default TodoInput