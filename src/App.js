import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import EffectTest from './components/EffectTest'
import { useState, useEffect } from 'react'

function App() {

  useEffect(() => {
    document.title = 'todo list'
  })

  const [list, setList] = useState([
    { id: 1, text: 'todo 1' },
    { id: 2, text: 'todo 2' },
    { id: 3, text: 'todo 3' },
  ])

  function addTodo(t) {
    const newTodo = { id: list.length + 1, text: t }
    setList([...list, newTodo])
  }

  return (
    <div>
      <EffectTest/>
      <TodoInput addTodo={addTodo} />
      {list.length && <TodoList foo="hello foo" list={list} />}
    </div>
  );
}

export default App;
