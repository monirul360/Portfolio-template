import React from 'react';
import img1 from './../../Img/MyClients/1.png';
import img2 from './../../Img/MyClients/2.png';
import img3 from './../../Img/MyClients/3.png';
import img4 from './../../Img/MyClients/4.png';
import img5 from './../../Img/MyClients/5.png';
import img6 from './../../Img/MyClients/6.png';
import img7 from './../../Img/MyClients/7.png';
import img8 from './../../Img/MyClients/8.png';
import img9 from './../../Img/MyClients/9.png';
import img10 from './../../Img/MyClients/10.png';
import { Link } from 'react-router-dom';








const MyClients = () => {
    return (
        <section className='My-Clients'>
            <div className="container">
                <h1 className='tittle'>My Clients</h1>
                <div className="d-flex justify-content-center align-items-center flex-wrap py-4 ">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center py-4">
                    <div>
                        <img src={img5} alt="" />
                    </div>
                    <div>
                        <img src={img6} alt="" />
                    </div>
                    <div>
                        <img src={img7} alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center py-4">
                    <div>
                        <img src={img8} alt="" />
                    </div>
                    <div>
                        <img src={img9} alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center py-4">
                    <div>
                        <img src={img10} alt="" />
                    </div>
                </div>
                <div className="item text-center py-5">
                    <h1>Do You Have idea? Need to
                        Covert it in Reaility</h1>
                    <Link to='/'>Start Your Project</Link>
                </div>
            </div>
        </section>
    );
};

export default MyClients;