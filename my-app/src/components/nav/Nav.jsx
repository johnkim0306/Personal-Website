import React from 'react'
import './nav.scss'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUserDelete} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" className='active'> <AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUserDelete /></a>
            <a href="#about" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BsBook /></a>
            <a href="#about" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}> <RiServiceFill /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageDetail /></a>
        </nav>
    )
}

export default Nav
