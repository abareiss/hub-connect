import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
    return(
        <h1> 
            <Link to="/">
                Navigation Bar
            </Link>
        </h1>
    )
}

export default NavBar;