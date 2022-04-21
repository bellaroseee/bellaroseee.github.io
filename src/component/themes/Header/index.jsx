import React from 'react'
import { Link } from "gatsby"
import { Wrapper, HomeTitle, NavBar, Menu, MenuItem } from './styles'

export const Header = () => {
    return (
        <Wrapper>
            <NavBar>
                <Link to="/">
                    <HomeTitle>Home</HomeTitle>
                </Link>
                <Menu>
                    <MenuItem>
                        <a href='#about'>About</a>
                    </MenuItem>
                    <MenuItem>
                        <a href='#projects'>Projects</a>
                    </MenuItem>
                    <MenuItem>
                        <a href='#contact'>Contact</a>
                    </MenuItem>
                </Menu>
            </NavBar>
        </Wrapper>
    );
};