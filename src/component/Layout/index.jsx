import React from "react"
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import { Footer } from "../themes/Footer/index"
import { Header } from "../themes/Header/index"
import img from './img.jpg'

// creating global style
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
    
    body {
        width:100vw;
        font-family: 'Comfortaa', cursive;
        margin: 0;
        padding: 0;
        background: url(${img});
        background-size: 100vw;
    }

    h1, h2, h3, h4, h5, h6, a {
        font-family: 'Comfortaa', cursive;
    }

    p, div {
        font-family: 'Open Sans', sans-serif;
    }
`
export const Wrapper = styled.div `
    width: 100vw;
`;

export default function Layout({ children }) {
    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}