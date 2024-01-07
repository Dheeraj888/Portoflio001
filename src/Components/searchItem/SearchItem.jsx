import React from 'react'
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="./resturant.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower street Apartment</h1>
            <span className="siDistance">500m</span>
            <span className="siTaxi">Free airport taxi</span>
            <span className="subTitle">
                Studio Apartment With Air contition
            </span>
            <span className="siFeatures"> Entire studio º 1 bathroom  21m 1full bed</span>
            <span className="sicancle">Free Cancellition</span>
            <span className="sicancellationsubtitle">
                you can cancle later, so lock in this great price today!
            </span>
            
        </div>
        <div className="siDetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="sitax">Includes taxes fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem