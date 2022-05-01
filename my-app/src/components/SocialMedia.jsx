import React from 'react'
import {FaFacebookF, FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://linkedin.com" target="_blank"> <FaFacebookF /></a>
            </div>
            <div>
                <a href="https://linkedin.com" target="_blank"> <BsLinkedin /></a>
            </div>
            <div>
                <a href="https://github.com" target="_blank"> <FaGithub /></a>
            </div>
            
        </div>
    )
}

export default SocialMedia
