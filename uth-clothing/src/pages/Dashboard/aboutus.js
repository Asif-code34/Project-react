import React from 'react';
import aboutImage from './images/aboutus.jpg';
import about2 from './images/images.jpg';
import office1 from './images/office1.jpg';
import office2 from './images/office2.jpg';
import office3 from './images/office 3.jpg';

const Aboutus = () => {
    return (
        <div className='container'>
            <h2 className='heading text-center'>About us</h2>
            <div className='row'>

                <div className='col-6' style={{ marginTop: "30px" }}>
                    <p className='para'>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                </div>
                <div className='col-6'>
                    <img src={aboutImage} alt=''></img>
                    <img src={about2} alt=''></img>
                </div>
            </div>
            <h2 className='heading text-center' style={{ marginTop: "30px" }}>our Offices</h2>
            <div className='row' style={{ background: "white" }}>
                <div className='col-4'>
                    <img src={office1} alt=''></img>
                    <h5>Mumbai Andheri shop</h5>
                </div>
                <div className='col-4'>
                    <img src={office2} alt='' style={{ border:"none"}}></img>
                    <h5>Ahemdabadshop</h5>
                </div>
                <div className='col-4'>
                    <img src={office3} alt=''></img>
                    <h5>Pune shop</h5>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;