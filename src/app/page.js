'use client'

import styled, { keyframes } from 'styled-components'
import { useEffect } from 'react'

import HomeGridItem from '@/components/Home/Grid/HomeGridItem'
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
        <HomeImage style={{ transform: `translateY(${parallaxValue}px)` }} src='https://i.imgur.com/GDczsMj.jpg'/>
        <HomeLogo src='https://i.imgur.com/uGZltjy.png'/>
      </HomeLandingContainer>
      <HomeGridContainer>
        <HomeGridItem img='https://i.imgur.com/wV1YzCH.jpg' text='WORLD' href='/world'/>
        <HomeGridItem img='https://i.imgur.com/LOHMpTi.jpg' text='PEOPLE' href='/people'/>
        <HomeGridItem img='https://i.imgur.com/NKC2FRS.jpg' text='EVENTS' href='/events'/>
        <HomeGridItem img='https://i.imgur.com/Up7OvpG.jpg' text='OTHER' href='/other'/>
      </HomeGridContainer>
      <ServicesHome img='https://i.imgur.com/e1yZW1y.jpg'/>
    </>
  )
}
