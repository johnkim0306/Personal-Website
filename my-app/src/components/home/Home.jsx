import React from 'react'
import './home.scss'
import Me from '../../assets/logo.png'
import Background from '../../assets/logo.png'

import { AppWrap } from '../../wrapper';

const Home = () => {
    return (
            <div className="container home__container">
                <h5>Hello I'm </h5>
                <h1>John Kim</h1>
                <h5 className="text-light"> Frontend Developer</h5>
                <hr/>
                <div className="me">
                    <img src={Me} alt="me" />
                </div>

            </div>
    )
}
export default AppWrap(Home, 'home', 'home');
