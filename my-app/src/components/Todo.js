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
           
           <Fade>
            <div className='todo__left'>
                <h5>NOTE IT, DO IT</h5>
                <p className='todo_left_para'>We are including the TO DO page in React Hub.<br/>We are strongly recommending to use To do page daily.<br/>It will help you to complete your task accurately.<br/>We are providing a complete guide for your future.</p>
                
            </div>
            </Fade>
       
            
            <Fade >
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
            <div className='todo_img_list'>
            <ul>
                <li><img src='/pen.png' alt='' className='todo_pen_img' /></li>
                <li><img src='/openbook.png' alt='' className='todo_openbook_img' /></li>
                <li><img src='/clock.png' alt='' className='todo_clock_img' /></li>
            </ul>
            </div>
            <div className='todo_para_list'>
            <Bounce top>
                <img src='/timeplant.png' alt='' className='todo__timeplant' />
            </Bounce>
            <ul>
                <li><p className='todo__list'>YOU CAN USE LIKE AN ONLINE DIARY. </p></li>
                <li><p className='todo__list'>NEVER WASTE THE TIME, ITS PRECIOUS.</p></li>
                <li><p className='todo__list'>IT'S THE TIME TO WRITE IT DOWN.</p></li>
            </ul>
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