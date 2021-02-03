import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <SideBar/>
      <HeroContent>
        <HeroItems>
          <HeroH1>The Morning Treat</HeroH1>
          <HeroP>And Mid Day Escape</HeroP>
          <HeroBtn>Click for Deals</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
