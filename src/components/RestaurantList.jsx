import React, { useState, useRef, useEffect } from 'react';
import Restaurant from './Restaurant';

function RestaurantList(){
    
    const inputRef = useRef(null);
    const [city, setCity] = useState("");
    const [result, setResult] = useState([]);  

    //initial load only
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleChange(event){
        setCity(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        fetchData(); 
    }

    function fetchData(){
        fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
        .then(response => response.json())
        .then(data => {
        setResult(data.restaurants);
        })
        .catch(err => console.log('error is ', err))   
    }

  return (
    <section className="App">
     
      <form onSubmit={handleSubmit}>       
        <div className = "search-city">
          <input ref={inputRef} type="search" onChange={handleChange} id="name" placeholder="Find a city..." size="20"/>
          <button type="submit" id="search">Search</button>
        </div>
        
      </form>

      <div className="container">
        {result.map( (city, index) => (
          <Restaurant key={index} town={city} />
        ))}
      </div> 

    </section>
  )
    
}

export default RestaurantList;


