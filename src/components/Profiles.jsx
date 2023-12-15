import React from 'react'
import "./profile.css"


function Profiles(props) {
  return (
    <>
    <div className='container'>
          <div className='kid1'>  
            <div className='Img'>
               <img src={props.image} alt="leo" height={50} width={50}/>
            </div>
            <div>
               <p>{props.name}</p>
               <span>{props.email}</span>
            </div>
          </div>
          <div className='kid3'>
            <p>{props.title}</p>
            <span>{props.lastSeen}</span>
          </div>
        </div>
        </>
  )
}

export default Profiles