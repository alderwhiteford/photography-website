import styled from "styled-components";

const PhotoGridContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 32.5vw 40vw 32.5vw 35vw 32.5vw;
  gap: 10px;
  padding: 50px; 
`

const GridItemPortrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GridItemLandscape = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: span 2;
`

const GridItemLandscapeLarge = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: span 3;
`

const GridItemPortraitLarge = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: span 2;
  grid-row: span 2;
`

const GridItemCinematic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: span 4;
`

export { PhotoGridContainer, GridItemPortrait, GridItemLandscape, GridItemPortraitLarge, GridItemCinematic, GridItemLandscapeLarge }