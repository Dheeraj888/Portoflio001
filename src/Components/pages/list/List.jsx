import React, { useState } from 'react'
import "./list.css"
import Navbar from '../Navbar'
import Header from '../../header/Header'
import { useLocation } from 'react-router-dom'

import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import SearchItem from '../../searchItem/SearchItem'


const List = () => {
  const location =useLocation()

  const[destination,setDestination]=useState(location.state.destination);
  const [date,setDate]=useState(location.state.date)
  const [opendate,setOpenDate]=useState(false)
  const [openPeople,setOpenPeople]=useState(location.state.openPeople)

  return (
    <div>
      <Navbar/>
      <Header type ="list"/>
      <div className="container">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='lsTitle'>Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in-Date</label>
              <span onClick={()=>setOpenDate(!opendate)}>
                {`${format(date[0].startDate,"mm/dd/yyyy")} to ${format(date[0].endDate,"mm/dd/yyyy")}`}
              </span>
             {opendate && <DateRange
              onChange={item=>setDate(([item.selection]))}
              minDate={new Date}
              ranges ={date}/>}

            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOption">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>per night</small>
                </span>
                <input type="number" className='lsOptionInput' name="" id="" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>per night</small>
                </span>
                <input type="number" className='lsOptionInput' name="" id="" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult
                </span>
                <input type="number" min={1}className='lsOptionInput' placeholder={openPeople.adults} name="" id="" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" min={0} className='lsOptionInput' placeholder={openPeople.childrens} name="" id="" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                 Room
                </span>
                <input type="number" min={1} className='lsOptionInput'  placeholder={openPeople.room} name="" id="" />
              </div>
              </div>

            </div>
            <button className='lsButton'>Search</button>
            
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List