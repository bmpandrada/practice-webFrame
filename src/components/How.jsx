import React from 'react'
import imgH1 from '../assets/img/IMG_1148.jpg'
import { howData } from '../components/data'

const How = () => {
  return (
    <React.Fragment>
          <div className="container">
        <span className="sub-heading">Cacao de lilio</span>
        <h2 className="heading-secondary">
          Your chocolate drinks delicious and fresh from farm
        </h2>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        {howData.map((data, index) => {
          if (index % 2 === 0) {
            return (
              <React.Fragment key={index}>
                <div className="step-text-box">
                  <p className="step-number">0{data.id}</p>
                  <h3 className="heading-tertiary">{data.secondT}</h3>
                  <p className="step-description">{data.stepDescription}</p>
                </div>
                <div className="step-img-box">
                  <img className="step-img" src={data.img} alt="img" />
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <div className="step-img-box">
                  <img className="step-img" src={data.img} alt="img" />
                </div>
                <div className="step-text-box">
                  <p className="step-number">0{data.id}</p>
                  <h3 className="heading-tertiary">{data.secondT}</h3>
                  <p className="step-description">{data.stepDescription}</p>
                </div>
              </React.Fragment>
            );
          }
        })}
      </div>
    </React.Fragment>

  )
}

export default How