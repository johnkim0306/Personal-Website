import React from 'react'
import './header.scss'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/logo.png'
import Background from '../../assets/logo.png'

import { AppWrap } from '../../wrapper/';

const Header = () => {
    return (
            <div className="container header__container">
                <h5>Hello I'm </h5>
                <h1>John Kim</h1>
                <h5 className="text-light"> Fullstack Developer</h5>
                <hr/>
                {/* 
                <CTA />
                <HeaderSocials />
                */}

                <div className="me">
                    <img src={Me} alt="me" />
                </div>

            </div>
    )
}
//export default Header;
export default AppWrap(Header, 'header', 'header');
