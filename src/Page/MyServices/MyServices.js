import React from 'react';

const MyServices = () => {
    return (
        <div>
            <div className="my-services ms-4">
                <h2 className='tittle'>My Services</h2>
                {/* item number 1 */}
                <div className="d-flex align-items-center">
                    <div className="number-one">
                        <p>01</p>
                    </div>
                    <div className="item">
                        <p>Landing Page Design</p>
                    </div>
                </div>
                {/* item number 2 */}
                <div className="d-flex align-items-center">
                    <div style={{ background: "#FF7448" }} className="number-one">
                        <p>02</p>
                    </div>
                    <div className="item">
                        <p>App Interface Design</p>
                    </div>
                </div>
                {/* item number 3 */}
                <div className="d-flex align-items-center">
                    <div style={{ background: "#FFD028" }} className="number-one">
                        <p>03</p>
                    </div>
                    <div className="item">
                        <p>Dashboard Interface Design</p>
                    </div>
                </div>
                {/* item number 4 */}
                <div className="d-flex align-items-center">
                    <div style={{ background: "#780EFF" }} className="number-one">
                        <p>04</p>
                    </div>
                    <div className="item">
                        <p>Wireframe of Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;