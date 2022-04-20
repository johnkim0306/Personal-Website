import React from 'react'

import {About, Contact, Experience, Header, Footer, Nav } from './components';

const App = () => {
    return (
        <div>
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
