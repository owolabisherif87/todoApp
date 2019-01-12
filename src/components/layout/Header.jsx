import React from 'react';
import {Link} from "react-router-dom"


function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={linkStyle} className="link">Home</Link> | <Link to="/about" style={linkStyle} className="link">About</Link> | <Link to="/contact" className="link">Contact</Link>
        </header>
    )
}

const linkStyle = {
    
}
const headerStyle = {
    background: "#333",
    textAlign: "center",
    color: "#fff"
}
export default Header