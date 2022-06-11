import React from 'react'
import './App.scss'
import { useState } from "react";
import {Nav, About, Contact, Work, Menu, Header, Project, Footer} from './components';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Header />
            <About />
            <Work />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
