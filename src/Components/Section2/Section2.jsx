import React from 'react'
import img from '../.././assets/pexels-proxyclick-2451646.jpg'
import '../Section2/Section2.css'

export default function Section2() {
  return (
    <div className='body'>
        <img src={img} alt="img" className='imgOfSection1' />
        <div className="Container"><h1>Let's grow together</h1>
        <h3>WeDoTech is a full-service media agency that helps businesses <br></br>
            drive sustainable growth in the new world of marketing. With <br></br>
            a rich heritage in performance, we apply that mindset to<br></br>
             everything we do; brand planning, strategy, integrated<br></br>
              media, social, creative, and data.</h3>
        </div>
        <div className="container1">
            <div className="firstOne">
            <h1>2K</h1><span className='span'>Global Happy Clients</span>
            <h1 className='S1'>4K</h1><span className='span'>Projects Completed</span>
            </div>
            <div className="secondtOne">
            <h1>21 </h1><span className='span'>Team members</span>
            <h1 className='S2'>5</h1><span className='span'>Glorious Years</span>
            </div>
        </div>
      
    </div>
  )
}
