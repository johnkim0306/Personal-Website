import React from 'react'
import './header.scss'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/logo.png'


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm </h5>
                <h1>John Kim</h1>
                <h5 className="text-light"> Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={Me} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header
