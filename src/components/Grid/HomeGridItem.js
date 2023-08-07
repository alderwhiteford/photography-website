'use client'

import styled from "styled-components"
import useParallax from "@/hooks/use-parallax"

const GridItemDarkCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 30%;
  z-index: 5;
  transition: 0.3s;
`

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
  transition: 0.3s ease;
`

const GridImage = styled.img`
  width: 125%;
  height: 125%;
  object-fit: cover;
`

const GridItemTitle = styled.h1`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3vw;
  z-index: 6;
`

const GridItemLink = styled.a`
  position: relative;
  overflow: hidden;
  &:hover ${GridItemDarkCover} {
    background-color: black;
    opacity: 30%;
  }

  &:hover ${GridItem} {
    color: #fbb041;
  }

  &:hover ${GridItemTitle} {
    opacity: 100%; 
  }
`

export default function HomeGridItem({ img, text, href, parallax }) {
  const parallaxValue = useParallax(.1); 

  return (
    <GridItemLink href={href}>
      <GridItemDarkCover />
      <GridItem>
        <GridImage src={img} style={{transform: `translateY(calc(-15% + ${parallaxValue}px))`}}/> :
        <GridItemTitle>{text}</GridItemTitle>
      </GridItem>
    </GridItemLink>
  )
}