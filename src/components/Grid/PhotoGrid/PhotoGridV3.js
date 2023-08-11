import styled from "styled-components";
import { GridItemCinematic, GridItemLandscape, GridItemLandscapeLarge, GridItemPortrait, GridItemPortraitLarge } from "./PhotoGrid";

const PhotoGridContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 32.5vw 32.5vw 32.5vw 37.5vw 35vw 32.5vw 32.5vw;
  gap: 10px;
  padding: 50px; 
`

export default function PhotoGridV1({ data }) {
  
  return (
    <PhotoGridContainer>
      {data.map((image, index) => (
        [7].includes(index) ? (
          <GridItemCinematic key={index} src={image.href} />

        ) : [8].includes(index) ? (
          <GridItemLandscapeLarge key={index} src={image.href} />

        ) : [4,6,9,13,14].includes(index) ? (
          <GridItemPortrait key={index} src={image.href} />

        ) : (
          <GridItemLandscape key={index} src={image.href} />
        )
      ))}
    </PhotoGridContainer>
  );
}