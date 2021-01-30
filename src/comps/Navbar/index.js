import React from 'react'

import { Nav,NavLink, NavIcon, Bars } from './navBarElements'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to ='/'> CAFE</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
               
            </Nav>
        </div>
    )
}

export default Navbar
