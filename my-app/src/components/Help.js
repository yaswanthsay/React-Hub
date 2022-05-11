import React from 'react'

function Help() {
 
    return (
        <div className='help'>
            <h3 className='help__title'>Common queries</h3>
            <ol>
                <li>Is React Hub is providing online classes?</li>
                <p className='help__ans1'>Yes, React Hub is also providing offline classes.</p>
                <li>Is online classes are just video tutorials or do you provide classes through video call.?</li>
                <p className='help__ans1'>You can use our premium tutorials any time.Along with with that we are conducting classes through video calls in specific intervals.</p>
                <li>How React Hub tutorials are different from other plenty of tutorials?</li>
                <p className='help__ans1' >React Hub are providing 24/7 support for post class queries of students.</p>
                <li>Are you providing placements as a developer in a company?</li>
                <p className='help__ans1'>We are not providing placements, but we are providing instructions for placements along with the tutorial package available with us.</p>
                <li>Is there any interview procedure before joining the React Hub classes</li>    
                <p className='help__ans1'>Yes, there is two step interview procedures before joining the tutorial.First is a written test and second is a face to face interview.</p>
            </ol>
            <p className='help_further_queries'>If there is any further queries : </p>
            <input placeholder='Enter your queries...' type='text' className='further__queries'  name='queries'/>
        </div>
    )
}

export default Help