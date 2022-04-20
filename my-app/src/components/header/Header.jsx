import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <div>
            Header
            <div className="container header__container">
                <h5>Hello I'm </h5>
                <h1>John Kim</h1>
                <h5 className="text-light"> Fullstack Developer</h5>
            </div>
        </div>
    )
}

export default Header
