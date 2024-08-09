function TodoList(props) {
    const { list = [] } = props
    return (
        <ul>
            {
                list.map(el => (
                    <li key={el.id}>{el.text}</li>
                ))
            }
        </ul>
    )
}

export default TodoList