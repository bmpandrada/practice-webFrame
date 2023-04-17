import img1 from '../assets/img/IMG_1151.jpg'
import React from 'react'
import { useRef, useEffect } from 'react';


const Hero = () => {

  const sectionHeroRef = useRef(null);

  useEffect(() => {
    const sectionHero = sectionHeroRef.current;

    if (!sectionHero) return;

    const obs = new IntersectionObserver(function(entries) {
      const ent = entries[0];
      console.log(ent);
      if(ent.isIntersecting === false){
        document.body.classList.add('sticky')
      }
      if(ent.isIntersecting === true){
        document.body.classList.remove('sticky')
      }
    }, {
      root: null,
      threshold: 0,
      rootMargin:'-80px'
    });

    obs.observe(sectionHero);

    return () => {
      obs.unobserve(sectionHero);
    };
  }, [sectionHeroRef]);
  return (
    <div className="hero"  ref={sectionHeroRef}>
      <div className="hero-text-box">
        <h1 className="heading-primary">A healty darkchocolate bar, made by farm with fresh air and soil.</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Rerum molestias aliquam quos sunt quam debitis laborum 
           tempora amet animi ipsum sequi pariatur quas culpa doloribus,
           eius accusantium perferendis reiciendis officiis.
        </p>
        <a className="btn btn--full margin-right-sm" href="#how">Start eating well</a>
        <a className="btn btn--outline" href="#meals">Learn more &darr;</a>
      </div>
      <div className="hero-image-box">
        <img className="hero-img" src={img1} alt="background" />
      </div>
      </div>
  )
}

export default Hero