import React from 'react'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';

function Todo() {


    const [toDos, setToDos] = useState()
    const [toDoLists, setToDoLists] = useState([])


    const handleDelete = (event,noteId) => {
        event.stopPropagation();
        setToDoLists(prevState => prevState.filter((obj,unknownid)=> unknownid !== noteId)) 
    }
    const handleEdit = (event,noteId) => {
        event.stopPropagation();
        setToDos(prevState => prevState.filter)
    }
    return (
        <div className='todo__container'>
            <div className='todo'>
                <h3 className='todo__title'>React Hub Todo</h3>
                <input type='text' name='text' placeholder='Type new todos...' className='todo__input' value={toDos} onChange={(e) => setToDos(e.target.value)} />
                <Fade bottom>
                    <button className='todo_add_btn' type='submit' onClick={() => setToDoLists([...toDoLists, { id: Date.now(), text: toDos, status: false }])}>Add</button>
                </Fade>
                <div className='todo__space'>
                    {toDoLists.map((note,id) => {
                        return (
                            <div key={note.id} className='todo__items'>                    
                                <div className='todo_title_close'>
                                    <p className='todo_items_title'>{note.text}</p>
                                    <img src='/pencil.png' alt='' className='todo__pencil' onClick={(event)=>handleEdit(event,id)} />
                                    <img src='/delete.png' alt='' className='todo__delete' onClick={(event)=>handleDelete(event,id)} />
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


    //    <input onChange={(e) => {
    //                                 setToDoLists(toDoLists.filter(obj2 => {
    //                                     if (obj2.id === obj.id) {
    //                                         obj2.status = e.target.value
    //                                     }
    //                                     return obj2
    //                                 }))
    //                             }} value={obj.status} type='checkbox' /> 