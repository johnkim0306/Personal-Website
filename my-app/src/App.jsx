import React from 'react'
import './App.scss'

import {About, Contact, Experience, Header, Footer, Nav } from './components';

const App = () => {
    return (
        
        <div className="app">
            <Header />
            <Nav />
            <About />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
