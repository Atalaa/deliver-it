# How long did you spend on the coding assignment? 
24 hours.

# What would you add to your solution if you had more time? 
Redux and more test with Enzyme and Chai.

# If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
I would keep learning Readux and add it to the project. I will also take time to add Enzyme to test every React components independently.

# What was the most useful feature that was added to the latest version of your chosen language? 
I would say React Hooks since I learned it few months ago and Redux since I just start learning it.

# Please include a snippet of code that shows how you've used it.
```
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
    
```
# How would you track down a performance issue in production? 
We need to know when the issue exist and have sufficient context to figure out what was going wrong when they were slow. We can also check CPU and memory usage. Finally, clean up the website's code and remove unnecessary elements like white spaces, comments and inline spacing.

# Have you ever had to do this?
Yes, at my current job.

# How would you improve the API that you just used?
Add more result, like rating, customers reviews.

# Please describe yourself using JSON
```
{
  "name": "Rchidi",
  "lastname": "Aata-allah",
  "nationalities": ["Canadian", "French"],
  "livesin": "Toronto",
  "passions": ["Programming", "Video Games", "Movies", "Basket-Ball", "Soccer"],
  "interests": ["Education", "Sports"],
  "dreams": ["To become a Full Stack Javascript developer", "Travelling to Hawaii"],
  "believes": ["Failures are not permanent, soon or later, I will succeed!"]
}

```
