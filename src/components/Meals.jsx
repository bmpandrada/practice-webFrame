import React from 'react'
import img1 from '../assets/img/unsorted-img/20221108_223733.jpg'
import img2 from '../assets/img/unsorted-img/20221108_225258.jpg'
import img3 from '../assets/img/unsorted-img/20221108_225342.jpg'
import img4 from '../assets/img/unsorted-img/20221129_103601.jpg'

const Meals = () => {
  return (
    <React.Fragment>
        <div className="container center-text">
        <span className="sub-heading">Dark Chocolate Bar</span>
        <h2 className="heading-secondary">
          Cacao De lilio chooses from 3 recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
            <div className="meal">
                <img className='meal-img' src={img1} alt="" />
                <div className="meal-content">
                    
                <div className="meal-tags">
                <span className="tag tag--veg">Vegetarian</span>
                </div>
                <p className='meal-title'>Philippine Dark Choco</p>
                <ul className='meal-attributes'>
                    <li className='meal-attribute one'>
                    <ion-icon className='loco' name="flame-outline"></ion-icon>
                    <span><strong>220</strong>  calories</span></li>
                    <li className='meal-attribute'>
                    <ion-icon name="restaurant-outline"></ion-icon>
                        <span>NutriScore &reg;  <strong>74</strong> </span></li>
                    <li className='meal-attribute'><ion-icon name="star-outline"></ion-icon>
                     <span><strong>4.9</strong>  rating (537)</span></li>
                </ul>
                </div>
            </div>
            <div className="meal">
            <img className='meal-img' src={img3} alt="" />
                <div className="meal-content">
                    
                <div className="meal-tags">
                <span className="tag tag--veg">vegan</span>
                <span className="tag tag--pal">Paleo</span>
                </div>
                <p className='meal-title'>Coffee Dark choco</p>
                <ul className='meal-attributes'>
                    <li className='meal-attribute one'>
                    <ion-icon className='loco' name="flame-outline"></ion-icon>
                    <span><strong>400</strong>  calories</span></li>
                    <li className='meal-attribute'>
                    <ion-icon name="restaurant-outline"></ion-icon>
                        <span>NutriScore &reg;  <strong>92</strong> </span></li>
                    <li className='meal-attribute'><ion-icon name="star-outline"></ion-icon>
                     <span><strong>4.9</strong>  rating (441)</span></li>
                </ul>
                </div>
            </div>
            <div className="diets">
              <h3 className="heading-tertiary">Works with any diet:</h3>
              <ul className="list">
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span>Vegetarian</span>
                  </li>
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span>Vegan</span>
                  </li>
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span>Pescatarian</span>
                  </li>
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span> Gluten-free</span>
                  </li>
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span>Lactose-free</span>
                  </li>
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span> Keto</span>
                  </li>
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span>Paleo</span>
                  </li>
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span>Low FODMAP</span>
                  </li>
                  <li className='list-item'>
                  <ion-icon name="checkmark-outline"></ion-icon><span>Kid-friendly</span>
                  </li>
              </ul>
            </div>
      </div>
      <div className="container all-recipes">
          <a href="#" className="link">See all Recipes &rarr;</a>
      </div>
    </React.Fragment>
  )
}

export default Meals