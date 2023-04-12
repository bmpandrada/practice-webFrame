import React from 'react'

const Pricing = () => {
  return (
    <React.Fragment>
    <div className="container">
    <span className="sub-heading">Pricing</span>
    <h2 className="heading-secondary">
      Drink well without breaking the bank
    </h2>
  </div>

  <div className="container grid grid--2-cols margin-bottom-md">
  <div className="pricing-plan pricing-plan--starter">
        <header className="plan-header">
        <p className="plan-name">Starter</p>
        <p className="plan-prince"><span>pesos</span>400 </p>
        <p className="plan-text">per month. good to go</p>
        </header>
        <ul className="list">
            <li className='list-item'>
            <ion-icon name="checkmark-outline"></ion-icon><span><strong>1 meal</strong> per day</span>
            </li>
            <li className='list-item'>
            <ion-icon name="checkmark-outline"></ion-icon><span>Delivery is <strong>free</strong></span>
            </li>
            <li className='list-item'>
            <ion-icon name="close-outline"></ion-icon>
            </li>
        </ul>
        <div className="plan-sign-up">
        <a className="btn btn--full" href="">Start eating well</a>
        </div>
    </div>
    
    <div className="pricing-plan pricing-plan-complete">
        <header className="plan-header">
        <p className="plan-name">Complete</p>
        <p className="plan-prince"><span>pesos</span>800</p>
        <p className="plan-text"><strong>per month</strong>. good to go</p>
        </header>
        <ul className="list">
            <li className='list-item'>
            <ion-icon name="checkmark-outline"></ion-icon><span><strong>2 meal</strong> per day</span>
            </li>
            <li className='list-item'>
            <ion-icon name="checkmark-outline"></ion-icon><span>Delivery is <strong>free</strong></span>
            </li>
            <li className='list-item'>
            <ion-icon name="checkmark-outline"></ion-icon><span>Order time are between 11am to 9pm</span>
            </li>
        </ul>
        <div className="plan-sign-up">
        <a className="btn btn--full" href="">Start eating well</a>
        </div>
    </div>
  </div>
  <div className="container grid">
    <aside className="plan-details ">
        Prices include all applicable taxes. User can cancel at any time. Both plans include the following:
    </aside>
  </div>
  <div className="container grid grid--4-cols">
    <div className="feature">
    <ion-icon name="pause-outline"></ion-icon>
        <p className="feature-title">Never cook again!</p>
        <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major holidays.
        </p>
    </div>
    
    <div className="feature">
    <ion-icon name="infinite-outline"></ion-icon>
        <p className="feature-title">Never cook again!</p>
        <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major holidays.
        </p>
    </div>

    <div className="feature">
    <ion-icon name="leaf-outline"></ion-icon>
        <p className="feature-title">Never cook again!</p>
        <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major holidays.
        </p>
    </div>

    <div className="feature">
    <ion-icon name="nutrition-outline"></ion-icon>
        <p className="feature-title">Never cook again!</p>
        <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major holidays.
        </p>
    </div>
  </div>
  </React.Fragment>
  )
}

export default Pricing