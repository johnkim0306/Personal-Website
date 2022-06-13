import React from 'react'
import './footer.scss'
import {FaFacebookF, FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
            <div className="footer__container">
                <div className="footer__icons">
                    <div className="footer__icons--wrapper">
                        <div className="footer__icon">
                            <a href="https://linkedin.com"> <FaFacebookF /></a>
                        </div>
                        <div className="footer__icon">
                            <a href="https://linkedin.com" target="_blank"> <BsLinkedin /></a>
                        </div>
                        <div className="footer__icon">
                            <a href="https://github.com" target="_blank"> <FaGithub /></a>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p className="p-text">@2022 John Kim</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
    )
}

export default Footer
//export default AppWrap(Footer, 'footer', 'footer');
