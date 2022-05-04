import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Start() {
    return (
        <div className='start'>
            <div>
                <h2 className='get_started_heading'>GET STARTED FROM HERE!</h2>
            </div>
            <div>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state, then compose them to make complex UIs.Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native.A Simple Component
                    React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
            </div>
            <div className='start_pic_para'>
                <img src='/reactpic.jpg' alt='' className='start_react_img' />
                <div>
                    <p className='start__para'>A Stateful Component
                        In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().An Application
                        Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.A Component Using External Plugins
                        React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the  value in real time.React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!
                    </p>
                </div>

            </div>
            <div>
                <p>  As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem.  If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>
            </div>
            <div className='jump'>
                <h2>LET'S JUMP IN TO THE TUTORIALS</h2>
                <img src='arrow.png' alt='' className='arrow__img'/>
                <Link to='/intro#reacthubId'><button className='letsgo__btn'>Let's Goooo!!!</button></Link>
            </div>

        </div>
    )
}

export default Start