import React from 'react';
import { Link } from 'react-router-dom';
import Illustrator from './../../Img/Tools/Adobe-Illustrator icon.png';
import Adobe_XD from './../../Img/Tools/Adobe_XD_CC_icon.png';
import figma from './../../Img/Tools/figma-1-logo.png';
import ps from './../../Img/Tools/ps.png';
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
                <div className="design-tools">
                    <h3>My Design Tools</h3>
                    <div className="item">
                        <div>
                            <img src={figma} alt="" />
                        </div>
                        <div>
                            <img src={ps} alt="" />
                        </div>
                        <div>
                            <img src={Adobe_XD} alt="" />
                        </div>
                        <div>
                            <img src={Illustrator} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;