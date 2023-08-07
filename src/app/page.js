
'use client'

import styled, { keyframes } from 'styled-components'
import { useEffect } from 'react'

import HomeGridItem from '@/components/Grid/HomeGridItem'
import ServicesHome from '@/components/Home/Services/Services'
import useParallax from '@/hooks/use-parallax'

const HomeLandingContainer = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
  overflow: hidden;
`

const HomeGridContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
`

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const HomeImage = styled.img`
  position: relative;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: 40%;
`

const HomeLogo = styled.img`
  position: absolute;
  width: 30vw;
  top: 10vh;
  left: 35vw;
  animation: ${spinAnimation} 20s linear infinite;
`


export default function Home() {
  const parallaxValue = useParallax(0.1);

  return (
    <>
      <HomeLandingContainer>
        <HomeImage style={{ transform: `translateY(${parallaxValue}px)` }} src='https://i.imgur.com/PI5VJGC.jpg'/>
        <HomeLogo src='https://i.imgur.com/uGZltjy.png'/>
      </HomeLandingContainer>
      <HomeGridContainer>
        <HomeGridItem img='https://i.imgur.com/eLW3Lxa.jpg' text='WORLD' href='/world' parallax={true}/>
        <HomeGridItem img='https://i.imgur.com/uUbRfBZ.jpg' text='PEOPLE' href='/people' parallax={true}/>
        <HomeGridItem img='https://i.imgur.com/TaHMESU.jpg' text='EVENTS' href='/events' parallax={true}/>
        <HomeGridItem img='https://i.imgur.com/Oyk8vOL.jpg' text='OTHER' href='/other' parallax={true}/>
      </HomeGridContainer>
      <ServicesHome img='https://i.imgur.com/Y7ncDjP.jpg'/>
    </>
  )
}
