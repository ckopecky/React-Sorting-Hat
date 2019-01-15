import "./Header.css"
import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header_container">
            <div className="header-contents">
                <h1 id="welcome">Welcome to Hogwarts!</h1>
                <p id="introduction_to_hogwarts">The start of term banquet will begin shortly...but before you take your seats in the Great Hall, you will be sorted into your houses! </p>
                <Link to="/sortinghat" id="sort_me">Put on the Sorting Hat</Link>
            </div>
        </div>
    );
}
export default Header;