import React, { useState } from 'react'
import { FaBed,FaCalendarAlt } from "react-icons/fa";
import { MdFlight,MdCarRental,MdAttractions } from "react-icons/md";
import { BiSolidTaxi } from "react-icons/bi";
import { GiPerson } from "react-icons/gi";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css"
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';






const Header = ({type}) => {
  const[openoption,setopenoption]=useState(false)
const[destination,setDestination]=useState("")
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const[openDate,setOpenDate]=useState(false)
      const[openPeople,setOpenPeople]=useState({
        adults:1,
        childrens:0,
        room:1
      })
  const navigate =useNavigate()

    const handelOption=(name,opreation)=>{
      setOpenPeople((prev)=>{
        return{...prev,
          [name]:opreation==="in" ? openPeople[name] + 1 : openPeople[name]-1,}
      })

    }

    const hnandleSearch = () => {
      navigate("/hotels", { state: { destination, date, openPeople } });
    }
    

  return (
    <div className='header'>
     <div className={type==="list" ?"headerContainer listMode" : "headerContainer"}>
           <div className="headerList">
            <div className="headerListItem active">
<FaBed className='headIcon'/>
<span>Stays</span>
            </div>
            <div className="headerListItem">
<MdFlight className='headIcon'/>
<span>Flights</span>
            </div>
            <div className="headerListItem">
<MdCarRental className='headIcon'/>
<span>Car rentals</span>
            </div>
            <div className="headerListItem">
<MdAttractions className='headIcon'/>
<span>Attractions</span>
            </div>
            <div className="headerListItem">
<BiSolidTaxi className='headIcon'/>
<span>Airport Taxi</span>
            </div>
        </div>
        {type !=="list" && 
<>
<h1 className="headerTitle">A lifetime of discounts ? It's Genius</h1>
        <p className="headerDesc">Lorem ipsum dolor
         sit amet consectetur, adipisicing elit. Qu
         idem nihil cum eius velit?</p>
         <button className="headerBtn">Sign in / Register</button>
         <div className="headerSearch">
            <div className="headerSearchItem">
                <FaBed className='headerSearchIcon'/>
                <input onChange={e=>setDestination(e.target.value)} className='headerSearchInput' type="text"
                 placeholder='Where are you going' name="" id="" />
            </div>
            <div className="headerSearchItem">
                <FaCalendarAlt className='headerSearchIcon'/>
                <span onClick={()=>setOpenDate(!openDate)} 
                className='headerSearchText' >{`${format(date[0].startDate,"mm/dd/yyyy")} to ${format(date[0].endDate,"mm/dd/yyyy")}`}</span>
    {            openDate&&<DateRange className='justDate'
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  minDate={new Date}
/>}

                 
            </div> 
            <div className="headerSearchItem">
                <GiPerson className='headerSearchIcon'/>
                <span onClick={()=>setopenoption (!openoption)} className='headerSearchText' >{`${openPeople.adults}adults . ${openPeople.childrens}childrens . ${openPeople.room}room`}</span>
              {openoption && <div className="people">
               <div className="peopleItem">
                <span className="openpeopleItem">Adult</span>
               <div className="peopleCounter">
               <button className="peopleCounterbtn"
                 disabled={openPeople.adults <=1}
                 onClick={()=>handelOption("adults","de")}>-</button>
                <span className="peopleCounterNumber">{openPeople.adults}</span>
                <button className="peopleCounterbtn" onClick={()=>handelOption("adults","in")}>+</button>
               </div>
                </div>
                <div className="peopleItem">
                <span className="openpeopleItem">Children</span>
                <div className="peopleCounter">
                <button className="peopleCounterbtn"
                 disabled={openPeople.childrens <=0}
                
                onClick={()=>handelOption("childrens","de")}>-</button>
                <span className="peopleCounterNumber">{openPeople.childrens}</span>
                <button className="peopleCounterbtn" onClick={()=>handelOption("childrens","in")}>+</button>
                </div>
               
                </div>
                <div className="peopleItem">
                <span className="openpeopleItem">Room</span>
               <div className="peopleCounter">
               <button className="peopleCounterbtn" 
                 disabled={openPeople.room <=1}
               
               onClick={()=>handelOption("room","de")}>-</button>
                <span className="peopleCounterNumber">{openPeople.room}</span>
                <button className="peopleCounterbtn" onClick={()=>handelOption("room","in")}>+</button>
               </div>
                </div>
               </div>}
                 
            </div>
            <div className="headerSearchItem">
        <button className='headerBtn' onClick={hnandleSearch}>Search</button>
                 
            </div>
           
         </div>
</>}
 
     </div>
    </div>
  )
}

export default Header