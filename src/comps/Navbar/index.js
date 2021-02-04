import React from 'react'
import { Nav,NavLink, NavIcon, Bars } from './navBarElements'

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to ='/'> CAFE</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
               
            </Nav>
        </div>
    )
}

export default Navbar
