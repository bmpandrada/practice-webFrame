import React, { useState } from 'react'

const subcribed = ['family','friends']

const CTA = () => {
    const [data, setData] = useState({email:'', name:''})
    const [person, setPerson] = useState([]);
    const [subcribes, setSubscribes] = useState('')

    const handleSubcribe = (e) => {
        setSubscribes(e.target.value)
        console.log(e.target.value);
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(data.name && data.email){
            const newPerson = {...data, id: new Date().getTime().toString()};
            setPerson([...person, newPerson])
            setData({email:'', name:''})
            console.log(newPerson);
        }else{
            console.log('please fill up the form');
        }
    }
  return (
    <React.Fragment>
        <div className="container">
        <div className="cta">

            <div className="cta-text-box">
               <h2 className="heading-secondary">
                We offer sample meal!
               </h2>
               <p className="cta-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Quae illo at alias quo repellendus modi dolorum doloribus illum culpa distinctio?
               </p>
               <form  className="cta-form" onSubmit={handleSubmit}>
                <div>

                <label htmlFor="full-name">Full Name</label>
                <input type="text" id='full-name'
                 required placeholder='John Doe'
                 name='name' value={data.name}
                 onChange={handleChange}/>
                   </div>
                 <div>
                   <label htmlFor="email">Email Address</label>
                <input type="email" id='email'
                 required placeholder='info@example.com'
                 name='email' value={data.email}
                 onChange={handleChange}/>
                 </div>
                 <div>
                <label htmlFor="full-name">Where did you hear from us?</label>
                <select name="subcribes" id="subcribes" 
                required value={subcribes} onChange={handleSubcribe}>
                    <option disabled  value="">Choose an option:</option>
                    {subcribed.map((details)=>{
                        return <option key={details}>{details}</option>
                    })}
                </select>
                    </div>  

                <button type='submit' className='btn btn--form'>Sign up now</button>
               </form>
            </div>
            <div className="cta-img-box" 
            role='img' 
            aria-label='cacao drink'></div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CTA