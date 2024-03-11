import React, { useState, useEffect } from 'react'
import Navbar from '../components/NavBar'
import Listing from "../components/FilterItem"
import axios from 'axios';


function ListingComponent() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/listhub');
                setListings(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return listings
}

function HomePage() {


    const headings = ['Price', 'Location', 'Duration', 'Property Type', 'Amenities', 'Utilities', 'Lease Term']
    // Add a apply button to apply all these filters at the end.

    const listingObj = ListingComponent()
    console.log(listingObj)
    const display = listingObj.map( listing => {
        return(
            <span>
                <Listing
                    name={listing.name}
                    city={listing.city}
                    state={listing.state}
                    zip={listing.zip}
                    price={listing.price}
                    rating={listing.rating}
                    list_ranking={listing.list_ranking}
                />

            </span>
        )
    })

    return (
        <div>
        <h2>Listings</h2>
        {display}
    </div>

    // <div>
    //     <Navbar />
    //     HomePage - MainPage

    // </div>
    )
}

export default HomePage