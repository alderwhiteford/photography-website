'use client'

import styled from "styled-components"

const GridItemDarkCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000000;
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
  color: #fbb041;
  transition: 0.3s ease;
`

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`

const GridItemTitle = styled.h1`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.75vw;
  z-index: 6;
  opacity: 0%;
  transition: 0.3s ease;
`

const GridItemLink = styled.a`
  position: relative;
  overflow: hidden;
  &:hover ${GridItemDarkCover} {
    background-color: black;
    opacity: 60%;
  }

  &:hover ${GridItemTitle} {
    opacity: 100%; 
  }
`

export default function CategoryGridItem({ img, text, href }) {

  return (
    <GridItemLink href={href}>
      <GridItemDarkCover />
      <GridItem>
        <GridImage src={img} />
        <GridItemTitle>{text}</GridItemTitle>
      </GridItem>
    </GridItemLink>
  );
}
