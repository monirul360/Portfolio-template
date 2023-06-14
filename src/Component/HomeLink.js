import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = () => {
    return (
        <div className='home-service'>
            <div style={{ background: "#FF7448" }}>
                <Link to="/aboutme">ABOUT ME</Link>
            </div>
            <div style={{ background: "#0F0264" }}>
                <Link to="/">My Services</Link>
            </div>
            <div style={{ background: "#FFD028" }}>
                <Link style={{ color: "#000000" }} to="/">
                    My Career
                </Link>
            </div>
            <div style={{ background: "#09A8DA" }}>
                <Link to="/">My Folio</Link>
            </div>
            <div style={{ background: "#780EFF" }}>
                <Link to="/">My Clients</Link>
            </div>
            <div style={{ background: "#0F0933" }}>
                <Link to="/">Contact Me</Link>
            </div>
        </div>
    );
};

export default HomeLink;