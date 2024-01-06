'use client'
import React from 'react';
import { LocalThemedBox } from './components/LocalThemedBox';
import { ThemeContext } from './components/ThemeProvider';

const Main = () => {

    return(
        <div className={"container"} id="themed-page">
            <p id="themed-text-container">
                lorem ipsum dolor iterit n stuff
            </p>
            <button className="btn" id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Main }