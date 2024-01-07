import React from 'react'
import "./home.css"
import Navbar from '../Navbar'
import Header from '../../header/Header'
import Features from '../../header/features/Features'
import Properties from '../../properties/Properties'
import FeaturedProperties from '../../featuredPropertie/FeaturedProperties'
import MailList from '../../mailList/MailList'
import Footer from '../../footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Features/>
        <h1 className='homeTitle'>Browse by properties type</h1>
        <Properties/>
        <h1 className='homeTitle'>Home guests loves </h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>

        
      </div>
    </div>
  )
}

export default Home