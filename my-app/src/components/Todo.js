import React from 'react'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';

function Todo() {


    const [toDos, setToDos] = useState()
    const [toDoLists, setToDoLists] = useState([])


    const handleChange = (e) => {
        setToDos(e.target.value)
    }

    const handleDelete = () => {
        setToDoLists('')
    }

    const handleEdit = () => {

    }
    return (
        <div className='todo__container'>
            <div className='todo'>
                <h3 className='todo__title'>React Hub Todo</h3>
                <input type='text' name='text' placeholder='Type new todos...' className='todo__input' value={toDos} onChange={handleChange} />
                <Fade bottom>
                    <button className='todo_add_btn' type='submit' onClick={() => setToDoLists([...toDoLists, toDos])}>Add</button>
                </Fade>
                <div className='todo__space'>
                    {toDoLists.map((toDoList) => {
                        return (
                            <div className='todo__items'>
                                <input type='checkbox' />
                                <div className='todo_title_close'>
                                    <p className='todo_items_title'>{toDoList}</p>
                                    <img src='/pencil.png' alt='' className='todo__pencil' onClick={handleEdit} />
                                    <img src='/delete.png' alt='' className='todo__delete' onClick={handleDelete} />
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo