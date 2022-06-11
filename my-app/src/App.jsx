import React from 'react'
import './App.scss'
import { useState } from "react";
import {About, Contact, Experience, Work, Menu, Header, Project, Footer, Topbar } from './components';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
