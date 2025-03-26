import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offer from '../components/Offer'
import NewCollections from '../components/NewCollections'
import NewsLetter from '../components/NewsLetter'
import './css/Home.css'
import OfferMarquee from '../components/OfferMor'
import OfferMor from '../components/OfferMor'


const Home = () => {
  return (
    <div  className='home-div'>
      <OfferMor/>
        <Hero />
        <Popular />
        <Offer />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Home

