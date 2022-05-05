import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

function Start() {
    return (
        <div className='start'>
            <h2 className='start__title'>Get Started From Here</h2>
            <div className='start_para_img'>
                <div className='start_para_container'>
                    <p className='start__para1'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.
                        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                        React can also render on the server using Node and power mobile apps using React Native.React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
                        <img src='happycoding1.jpg' alt='' className='happycoding1__img'/>
                </div>
                <div className='vl1'></div>
                <div className='start__img'>
                    <img src='/happycoding.jpg' alt='' className='happycoding__img' />
                    <img src='happycoding2.jpg' alt='' className='happycoding2__img'/>
                </div>
            </div> 
            <div className='start_para_img'>
                <div className='start__img'>
                    <img src='/happycoding3.jpg' alt='' className='happycoding3__img' />
                </div>
                <div className='vl2'></div>
                <div className='start_para_container'>
                    <p className='start__para2'>In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the value in real time.</p>
                </div>
            </div>
            <p className='start_next_tutorials'>Now you are little bit aware of React library.Next it's time to acquire skills on React.<br/>We are providing world class tutorials that are taken by great tutors.<br/>Next we can go to tutorials.</p>
            <Link to='intro#reacthubId' className='start_tutorials_link'><div className='start__tutorials'>
                <p className='start_tutorials_tag'>Tutorials</p>
            </div></Link>
        </div>
    )
}

export default Start