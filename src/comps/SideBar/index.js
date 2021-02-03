import React from 'react';
import { SideBarContainer, Icon, SideBarMenu, SideBarLink, SideBtnWrap } from './SideBarElements'

const SideBar = () => {
    return (
       <SideBarContainer>
           <Icon>
               <CloseIcon/>
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

export default SideBar
