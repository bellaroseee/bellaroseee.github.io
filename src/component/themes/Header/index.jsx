import React from 'react'
import { Link } from "gatsby"
import { Wrapper, HomeTitle, NavBar, Menu, MenuItem } from './styles'

// export const Footer = () => (
export const Header = () => {
    return (
        <Wrapper>
            <NavBar>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, marginLeft: `1rem`}}>
                    <HomeTitle>Bella Rose</HomeTitle>
                </Link>
                <Menu>
                    <MenuItem>
                        <a href='#projects'>Projects</a>
                    </MenuItem>
                    <MenuItem>
                        <a href='#about'>About</a>
                    </MenuItem>
                </Menu>
            </NavBar>
        </Wrapper>
    );
};