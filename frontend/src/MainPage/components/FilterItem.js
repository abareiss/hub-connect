import React, { useState } from 'react'
import house from "./house.jpg"

const Listing = props => {

    const [likes, setLikes] = useState(props.likes);
    const [liked, setLiked] = useState(false);


    return(
        
            <div className="listing">
                <div className="image">
                    <img src={house}></img>
                </div>
                <div className="listing-info">
                    <p> Title: {props.name}</p>
                    <p> Location: {props.city}, {props.state}, {props.zip}</p>
                    <p> Price per month: {props.price}</p>
                    <p> Rating: {props.rating} </p>
                    <p> ranking: {props.list_ranking}</p>
                </div>
            </div>
    )
}

export default Listing

