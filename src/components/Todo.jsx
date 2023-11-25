import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : "", color: todo.isCompleted ? "white" : "black"}}>
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>
    </div>
    <div>
      <button className='complete' onClick={() => completeTodo(todo.id)}>Realizada</button>
      <button className='remove' onClick={()=> removeTodo(todo.id)}>Deletar</button>
    </div>
  </div>
  )
}

export default Todo