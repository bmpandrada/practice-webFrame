import React from 'react'
import img1 from '../assets/img/CACAO-DE-LILIO-logo-gold.png'
import img2 from '../assets/img/CACAO-DE-LILIO-logo.png'

const Featured = () => {
  return (
    <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
    </div>
  )
}

export default Featured