'use client'

import styled from "styled-components"
import useParallax from "@/hooks/use-parallax"

import GridItemDarkCover from "@/components/Miscellaneous/DarkCover"

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
  transition: 0.3s ease
`

const GridImage = styled.img`
  width: 125%;
  height: 125%;
  object-fit: cover;
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
`

const GridItemTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3vw;
  z-index: 6;
`

export default function HomeGridItem({ img, text, href }) {
  const parallaxValue = useParallax(.1); 

  return (
    <GridItemLink href={href}>
      <GridItemDarkCover />
      <GridItem>
        <GridImage src={img} style={{transform: `translateY(calc(-15% + ${parallaxValue}px))`}}/>
        <GridItemTitle>{text}</GridItemTitle>
      </GridItem>
    </GridItemLink>
  )
}