import React from 'react';
import { SideBarContainer, Icon, SideBarMenu, SideBarLink, SideBtnWrap,ClosedIcon,SideBarRoute } from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
       <SideBarContainer isOpen={isOpen} onClick={toggle}>
           <Icon>
               <ClosedIcon/>
           </Icon>
           <SideBarMenu>
               <SideBarLink to="/">Coffee</SideBarLink>
               <SideBarLink to="/">Brunch</SideBarLink>
               <SideBarLink to="/">Full Menu</SideBarLink>
           </SideBarMenu>
           <SideBtnWrap>
               <SideBarRoute to="/">Reserve a table now!</SideBarRoute>
           </SideBtnWrap>
       </SideBarContainer>
    )
}

export default SideBar;
