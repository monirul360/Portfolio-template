import React from 'react';
import imgone from './../../Img/MyFolio/1.png';
import imgtwo from './../../Img/MyFolio/2.png';
import imgthree from './../../Img/MyFolio/3.png';
import imgfore from './../../Img/MyFolio/4.png';

const MyFolio = () => {
    const post = [imgone, imgtwo, imgthree, imgfore];
    return (
        <div>
            <section className='container'>
                <div className="my-folio">
                    <h1>My Folio</h1>
                    <div className="row">
                        {
                            post.map(i =>

                                <div className="col-md-6">
                                    <div>
                                        <img className='img-fluid' src={i} alt="" />
                                    </div>
                                </div>


                            )
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyFolio;