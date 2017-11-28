import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <h1>My Work</h1>
            <h3>Checkout the following things I've done.</h3>
            <Link to='portfolio/1'>Item One</Link>
            <Link to='portfolio/2'>Item Two</Link>
        </div>
    )
}

export default Portfolio;