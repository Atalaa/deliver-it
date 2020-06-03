import React from 'react';
import '../index.css';


function Restaurant({ town }){
    return(
        <div>

            <div className="card">
                    <ul className = "list-style-name"><li>{ town.name }</li></ul>
                    <ul className = "list-style-address"><li>{ town.address }</li></ul>
                    <ul className = "list-style-price"><li>${ town.price }</li></ul>
            </div>
        </div>

    )
}

export default Restaurant;




