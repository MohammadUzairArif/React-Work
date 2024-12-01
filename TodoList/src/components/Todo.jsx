import React, { useState } from 'react'
import '../style.css'
const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const handleSubmit = ()=>{
        setTodos((todos)=>{
           return todos.concat({
                text:input,
                id: Math.floor(Math.random()*10)
            })
        })
        setInput('')
    }

    const removeTodo = (id) =>
        setTodos((todos)=>todos.filter((t) => t.id !== id))
  return (
    <div className='container'>
      <input type="text" onChange={e=>setInput(e.target.value)} placeholder='New Todo' value={input} />
      <button onClick={handleSubmit}>Submit</button>

      <ul className='todos-list'>
        {todos.map(({text,id})=>(
            <li className='todo' key={id}>
                <span>{text}</span>
                <button className='close' onClick={()=> removeTodo(id)}>x</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
