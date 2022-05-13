import React from 'react'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce'

function Todo() {


    const [toDos, setToDos] = useState()
    const [toDoLists, setToDoLists] = useState([])


    const handleDelete = (event, noteId) => {
        event.stopPropagation();
        setToDoLists(prevState => prevState.filter((obj, unknownid) => unknownid !== noteId))
    }
    const handleEdit = (event, noteId) => {
        event.stopPropagation();
        setToDos(prevState => prevState.filter)
    }
    return (
        <div className='todo__container'>
          <Bounce top>
              <img src='/timeplant.png' alt='' className='todo__timeplant'/>
              </Bounce>
                <ul className='todo__unlist'>
                    <li className='todo__list'>YOU CAN USE LIKE AN ONLINE DIARY.</li>
                    <li className='todo__list'>NEVER WASTE THE TIME, ITS PRECIOUS.</li>
                    <li className='todo__list'>IT'S THE TIME TO WRITE IT DOWN.</li>
                </ul>
                <div className='todo_pen_container'>
                    <img src='/pen.png' alt='' className='todo_pen_img' />
                </div>
                <div className='todo_book_container'>
                <img src='/openbook.png' alt='' className='todo_openbook_img' />
            </div>
            <div className='todo_clock_container'>
                <img src='/clock.png' alt='' className='todo_clock_img' />
            </div>
            <Fade duration={3500}>
            <div className='todo'>
                <h3 className='todo__title'>React Hub Todo</h3>
                <input type='text' name='text' placeholder='Type new todos...' className='todo__input' value={toDos} onChange={(e) => setToDos(e.target.value)} />
                <Fade bottom>
                    <button className='todo_add_btn' type='submit' onClick={() => setToDoLists([...toDoLists, { id: Date.now(), text: toDos, status: false }])}>Add</button>
                </Fade>
                <div className='todo__space'>
                    {toDoLists.map((note, id) => {
                        return (
                            <div key={note.id} className='todo__items'>
                                <div className='todo_title_close'>
                                    <img src='/rightarrow.png' alt='' className='todo__arrow'/>
                                    <p className='todo_items_title'>{note.text}</p>
                                    <img src='/pencil.png' alt='' className='todo__pencil' onClick={(event) => handleEdit(event, id)} />
                                    <img src='/delete.png' alt='' className='todo__delete' onClick={(event) => handleDelete(event, id)} />
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            </Fade>
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