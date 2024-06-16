import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import utparlogo from '../../utparlogo.svg'
import twitterlogo from '../../twitter.svg'
import linkedlnlogo from '../../linkedin.svg'
import { Button } from "reactstrap";
import { SocialIcon } from 'react-social-icons'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                {/* <div className="footer-content">
                    <img
                        src={utparlogo}
                        height='80'
                        width='80'
                        alt=''
                        loading='lazy'
                    />
                    <h3 style={{ color: '#4279A0' }}>Utpar Consultancy Services</h3>
                    <Button><h4>Talk To Us</h4></Button>
                </div> */}
                <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginLeft: '-10px', marginRight: '180px' }}>
                    <img
                        src={utparlogo}
                        height='80'
                        width='80'
                        alt=''
                        loading='lazy'
                        style={{ marginTop: '-20px' }}
                    />
                    <div className="logoname-slogan">
                        <h3 style={{ color: '#4279A0', marginLeft: '10px', marginRight: '260px', fontSize: '2rem' }}>Utpar Consultancy Services</h3>
                        <p>Accelerate Innovation</p>
                    </div>
                    <div class="social-media-buttons">
                    </div>
                    <div className="socialmedia-logo">
                        <a href="#"><SocialIcon network="twitter" /></a>
                        <a href="#"><SocialIcon network="linkedin" /></a>
                    </div>
                </div>
                <p class="text-muted mb-0 py-2">© 2024 UTPAR CONSULTANCY SERVICES PVT LTD. ALL RIGHTS RESERVED.</p>
            </div>

        </>
    );
};

export default Footer;