import React from "react"
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
import { Footer } from "../themes/Footer/index"
import { Header } from "../themes/Header/index"
import img from './img.jpg'
import img2 from './img2.jpg'

// creating global style
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    
    body {
        width:100vw;
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
        background: url(${img});
        background-size: 100vw;
    }

    h1, h2, h3, h4, h5, h6, a, p, div {
        font-family: 'Raleway', sans-serif;
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