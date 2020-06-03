import React from 'react';
import logo from '../images/delivery.jpg'
import RestaurantList from './RestaurantList';
import '../index.css';


function App(){
    return(
        <div>
            <header>
                <h1>Deliver it!</h1>
                <img src={logo} alt="logo-car"/>
            </header>
            <RestaurantList />
        </div>

    )
}

export default App;