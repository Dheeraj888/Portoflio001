import React, { useState } from 'react'
import "./hotel.css"
import Navbar from '../Navbar'
import { FaLocationArrow } from "react-icons/fa";
import Header from '../../header/Header'
import MailList from '../../mailList/MailList';
import Footer from '../../footer/Footer';
import { setDayWithOptions } from 'date-fns/fp';
import { AiOutlineArrowRight,AiOutlineArrowLeft,AiFillCloseCircle, AiOutlineAim} from "react-icons/ai";


const Hotel = () => {
  const[slight,setSlight]=useState(0)
  const[open,setOpen]=useState(false)
  const photo =[
    {
      src:"../room1.jpg"
    },
    {
      src:"../room2.jpg"
    },
    {
      src:"../room3.jpg"
    },
    {
      src: "../room4.jpg"
    },
    {
      src:"../room5.jpg"
    },
    {
      src:"../room6.jpg"
    },
  ]
  const openHandler =(index)=>{
setSlight(index)
setOpen(true)
  }

  const handelMove=(direction)=>{
   let newSlider;
   if(direction==="l"){
newSlider =slight===0? 5 :slight-1
   }
  else{
    newSlider =slight ===5 ?0: slight +1
  } 
setSlight(newSlider) }
  return (
    <div >
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
 { open&&     
   (<div className="slider">
  <AiFillCloseCircle onClick={()=>setOpen(false)} className='close'/>
    <AiOutlineArrowLeft onClick={()=>handelMove("l")} className='arrow'/>
  <div className="sliderWrapper">
    <img className='sliderImg' src={photo[slight].src} alt="" />

  </div>
    <AiOutlineArrowRight onClick={()=>handelMove("r")} className='arrow'/>
   </div>)
}        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
            <FaLocationArrow className="location"/>
            <span>Elton st 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a story over $114 at this property and get a free airport Taxi
          </span>
          <div className="hotelImg">
{photo.map((photo,index)=>(
  <div className="hotelimgWrapper" key={index}>
    <img onClick={()=>openHandler(index)} className='images' src={photo.src} alt="" />
  </div>
))}
          </div>
<div className="hotelDetails">
  <div className="hotelDetailsTexts">
    <h1>Stay in the heart of new York</h1>
   <p className='hotelDesc'> 
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, numquam? 
    Animi doloribus non ab hic quae rerum quo iste, et,
     ratione deleniti ullam odio perferendis architecto minima? Iusto, quidem quo!
     Lorem ipsum, dolor sit amet consectetur adipisicing 
     elit. Illo, pariatur. Laudantium,  nesciunt.
      Possimus expedita deserunt accusantium autem veritatis reprehenderit inventore.
   </p>
   
  </div>
  <div className="hotelDetailsPrice">
    <h1>Perfect for a 9-night stay!</h1>
    <span>
      Located in the real heart of new york, this property has an excellent location score 
      of 9.8!
    </span>
    <h2>
      <b>$945</b>(9 nights)
    </h2>
    <button>Reserve or book Now</button>
  </div>
</div>
        </div>
        <MailList/>
      <Footer/>

      </div>
    
    </div>
  )
}

export default Hotel