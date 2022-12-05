import React from 'react'
import './contact.scss'
import { AppWrap } from '../../wrapper/';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
            <section id='contact'>
                <h2 data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-once="false" data-aos-mirror="true">Contact Me</h2>
                <h3 data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-once="false" data-aos-mirror="true">Let's Keep in Touch</h3>
                <div className="container contact__container">
                    <div className="contact__options" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-once="false" data-aos-mirror="true">
                        <article className="contact__option">
                            <MdOutlineEmail className='contact__option-icon' />
                            <h4>Email</h4>
                            <h5>john.kim0306@gmail.com</h5>
                            <a href="mailto:jkim39039@gmail.com">Send a message</a>
                        </article>
                        <article className="contact__option">
                            <RiMessengerLine className='contact__option-icon' />
                            <h4>Messenger</h4>
                            <h5>john kim</h5>
                            <a href="https://m.me/100000925471875">Send a message</a>
                        </article>
                        <article className="contact__option">
                            <BsWhatsapp className='contact__option-icon' />
                            <h4>WhatsApp</h4>
                            <h5>john.kim0306@gmail.com</h5>
                            <a href="https://api.whatsapp.com/send?phone+15877773519">Send a message</a>
                        </article>
                    </div>
                    <form action="" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-once="false" data-aos-mirror="true">
                        <input type="text" name='name' placeholder="Your Full Name" required />
                        <input type="email" name='email' placeholder="Your Email" required />
                        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                        <button type='submit' className='btn btn-primary'> Send Message</button>
                    </form>
                </div>
            </section>
    )
}

export default AppWrap(Contact, 'contact', 'contact');
