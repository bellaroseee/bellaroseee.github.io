import styled from 'styled-components';

export const Wrapper = styled.div`
    opacity: 1;
    border-style: solid;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    margin-bottom: 1.5rem;
    background: transparent linear-gradient(96deg, #FFFFFFD9 0%, #FFFFFF72 100%) 0% 0% no-repeat padding-box;
    box-shadow: 15px 15px 50px #00000046;
    border: 1px solid #FFFFFF00;
    opacity: 1;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top:0;
    z-index:5;
`

export const NavBar = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
`

export const HomeTitle = styled.h1`
    display: inline-block;  
    color: #551A8B;

    :hover {
        color: #9D62A7;
        // opacity: 0.75;
        text-shadow: 15px 15px 50px #00000046;
    }
`

export const Menu = styled.div`
    widht: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuItem = styled.div`
    margin: 1rem;
    color: #551A8B;
    a {
        text-decoration: none;
    }

    :hover a {
        color: #9D62A7;
        // opacity: 0.75;
        text-shadow: 15px 15px 50px #00000046;
    }
`