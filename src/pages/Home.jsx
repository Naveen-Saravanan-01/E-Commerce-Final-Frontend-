import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offer from '../components/Offer'
import NewCollections from '../components/NewCollections'
import NewsLetter from '../components/NewsLetter'
import './css/Home.css'


const Home = () => {
  return (
    <div  className='home-div'>
        <Hero />
        <Popular />
        <Offer />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Home

