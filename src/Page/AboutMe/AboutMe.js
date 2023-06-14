import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className="ps-5">
                <h2 className='tittle'>About Me</h2>
                <p className='description'>Redbeard Labs is a small design and development team based in BarrieON with a passion to help businesses grow. With our web development and marketing expertise, your business will begin to see more conversions, sales, and brand recognition</p>
                <div className="personal-info">
                    <p>Name : Muhammed Faisal</p>
                    <p>Profession : Senior Product Designer</p>
                    <p>Phone : +01254-25485 254</p>
                    <p>E-mail : muhammedfaisal@gmail.com</p>
                    <p>Address : Senpara Len, Banglabazar 145, India</p>
                </div>
                <div className="link my-5">
                    <Link to='/'>Download CV</Link>
                    <Link to='/'>My Services</Link>
                </div>
                <div className="design-tools"><h3>My Design Tools</h3></div>
            </div>
        </div>
    );
};

export default AboutMe;