import React from "react";
import customer1 from "../assets/img/customer/team-01.png";
import customer2 from "../assets/img/customer/team-02.png";
import customer3 from "../assets/img/customer/team-03.png";
import customer4 from "../assets/img/customer/team-04.png";
import ga4 from "../assets/img/gallery/IMG_0996.jpg";
import ga5 from "../assets/img/gallery/IMG_0999.jpg";
import ga6 from "../assets/img/gallery/30746A6D-460A-49AB-AAB7-9CE81F0055EE.jpg";
import ga7 from "../assets/img/gallery/20221129_103601.jpg";
import ga9 from "../assets/img/gallery/IMG_0998.jpg";
import ga10 from "../assets/img/gallery/IMG_1001.jpg";

const Testimonials = () => {
  return (
    <React.Fragment>
      <div className='testimonial-container'>
        <span className='sub-heading'>Testimonials</span>
        <h2 className='heading-secondary'>
          Once you try it, you can't go back
        </h2>
        <div className='testimonials'>
          <figure className='testimonial'>
            <img className='testimonial-img' src={customer1} alt='customer' />
            <blockquote className='testimonial-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, eaque! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Recusandae, eaque!
            </blockquote>
            <p className='testimonial-name'>&mdash; Bruce Andrada</p>
          </figure>
          <figure className='testimonial'>
            <img className='testimonial-img' src={customer4} alt='customer' />
            <blockquote className='testimonial-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, eaque! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Recusandae, eaque!
            </blockquote>
            <p className='testimonial-name'>&mdash; Bruce Andrada</p>
          </figure>
          <figure className='testimonial'>
            <img className='testimonial-img' src={customer2} alt='customer' />
            <blockquote className='testimonial-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, eaque! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Recusandae, eaque!
            </blockquote>
            <p className='testimonial-name'>&mdash; Bruce Andrada</p>
          </figure>
          <figure className='testimonial'>
            <img className='testimonial-img' src={customer3} alt='customer' />
            <blockquote className='testimonial-text'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, eaque! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Recusandae, eaque!
            </blockquote>
            <p className='testimonial-name'>&mdash; Bruce Andrada</p>
          </figure>
        </div>
      </div>
      <div className='gallery'>
        <figure className='gallery-item'>
          <img src={ga4} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga5} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga6} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga4} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga5} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga6} alt='' />
        </figure>
        {/* <figure className='gallery-item'>
          <img src={ga7} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga9} alt='' />
        </figure> */}
        {/* <figure className='gallery-item'>
          <img src={ga10} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga5} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga5} alt='' />
        </figure>
        <figure className='gallery-item'>
          <img src={ga4} alt='' />
        </figure>  */}
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
