import React from 'react'
import { useState } from 'react'

function Todo() {
 
    const [todos,setTodos] = useState()

    const handleSubmit = (e) =>{
     e.preventDefault();
     alert(JSON.stringify(e.data))
    }

    const handleChange = (e) => {
       setTodos(e.target.value)
    }

    return (
        <div className='todo__container'>
            <div className='todo'>
                <h3 className='todo__title'>React Hub Todo</h3>
                <form onSubmit={handleSubmit}>
                <input type='text' name='text' placeholder='New todos...' className='todo__input' onChange={handleChange}/>
                <button className='todo_add_btn' type='submit'>Add</button>
                </form>
                <div className='todo__space'>
                    <div className='todo__items'></div>
                  <p className='todo_items_title'>{todos}</p>
                </div>
            </div>
        </div>
    )
}

export default Todo