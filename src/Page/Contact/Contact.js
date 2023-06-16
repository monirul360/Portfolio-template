import React from 'react';
import call from './../../Icon/call.png';
import email from './../../Icon/email.png';
import location from './../../Icon/location.png';
const Contact = () => {
    return (
        <div>
            <div className="contact">
                <h1 className='tittle'>Contact with me</h1>
                <div className="form-group">
                    <form action="">
                        <input type="text" name="" placeholder='Name' id="" />
                        <input type="email" name="" placeholder='E-mail' id="" />
                        <input type="number" name="" placeholder='Phone' id="" />
                        <input type="text" name="" placeholder='Subject' id="" />
                        <textarea name="" id="" placeholder='Product Discription'></textarea>
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
                <div className="info">
                    {/* call now */}
                    <div className="d-flex align-items-center">
                        <div className="icon">
                            <img src={call} alt="" />
                        </div>
                        <div className="text">
                            <p>Call Now</p>
                            <h4>+25 5485 478 5478</h4>
                        </div>
                    </div>
                    {/* E-mail */}
                    <div className="d-flex align-items-center">
                        <div className="icon">
                            <img src={email} alt="" />
                        </div>
                        <div className="text">
                            <p>E-mail</p>
                            <h4>example@gmail.com</h4>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="d-flex align-items-center">
                        <div className="icon">
                            <img src={location} alt="" />
                        </div>
                        <div className="text">
                            <p>Location</p>
                            <h4>Austria BSC</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;