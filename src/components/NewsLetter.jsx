import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='subs-post'>

        <h1>Get Exclusive Offers On Your Email</h1>

        <p>Subscribe to our newsletter and stay updated</p>

        <div className='news-div'>
            <input type="text" placeholder='Your Email id'/>

            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter