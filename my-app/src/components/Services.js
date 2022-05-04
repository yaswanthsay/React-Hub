import React from 'react'

 
function Services() {

 
  return (
    <div className='services'>
       
        <div className='services_heading_container'>
        <h1 className='services__heading'>SERVICES</h1>
        </div>  
        <div className='services__list'>    
        <div className='web_service_container'>
            <img src='/web.png' alt='' className='web_service_img'/>
            <p>Web Development</p>
        </div>
        <div className='app_service_container'>
        <img src='/app.png' alt='' className='app_service_img'/>
            <p>App Development</p>
        </div>
        <div className='seo_service_container'>
        <img src='/seo.png' alt='' className='seo_service_img'/>
            <p>Search Engine Optimisation</p>
        </div>
        </div>  
    </div>
  )
}

export default Services