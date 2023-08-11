'use client'

import styled from "styled-components"

const GridItemDarkCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 50%;
  z-index: 5;
  transition: 0.3s;
`

const ServicesItemTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3vw;
  z-index: 6;
  color: white;
  transition: 0.3 ease;
`

const ServicesHomeContainer = styled.div`
  display: flex; 
  position: relative;
  width: 100vw;
  height: 50vh;
  background-size: cover;
  background-position: center 35%;

  &:hover ${ServicesItemTitle} {
    color: #fbb041;
  }

  &:hover ${GridItemDarkCover} {
    background-color: black;
  }
`

export default function ServicesHome({ img }) {
  return (
    <a href='/services'>
      <ServicesHomeContainer style={{backgroundImage: `url(${img})`}}>
        <GridItemDarkCover/>
        <ServicesItemTitle>SERVICES</ServicesItemTitle>
      </ServicesHomeContainer>
    </a>
  )
}