import React from 'react' 
import "./features.css"

const Features = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img  className='featuredImg' src="./lawn.jpg" alt="" />
            <div className="featuresTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="./hotel2.jpg" alt="" />
            <div className="featuresTitles">
                <h1>Austin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="./hotel1.jpg" alt="" />
            <div className="featuresTitles">
                <h1>Las-vegas</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Features