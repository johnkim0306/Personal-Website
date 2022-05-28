import React from 'react'
import './App.scss'

import {About, Contact, Experience, Header, Project, Footer, Nav } from './components';

const App = () => {
    return (
        
        <div className="app">
            <Header />
            <Nav />
            <About />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
