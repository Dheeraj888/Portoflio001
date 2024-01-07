import React from 'react'
import "./mailList.css"

const MailList = () => {
  return (
    <div className='mailList'>
        <h1 className="mailTitle">Save time, save money</h1>
        <div className="mailDesc">Sign up and we'll send the best deals to you</div>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Suscribe</button>
        </div>
    </div>
  )
}

export default MailList