import styled from "styled-components";
import { GridItemCinematic, GridItemLandscape, GridItemLandscapeLarge, GridItemPortrait, GridItemPortraitLarge } from "./PhotoGrid";

const PhotoGridContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 32.5vw 40vw 32.5vw 35vw;
  gap: 10px;
  padding: 50px; 
`

export default function PhotoGridV1({ data }) {
  
  return (
    <PhotoGridContainer>
      {data.map((image, index) => (
        [3].includes(index) ? (
          <GridItemCinematic key={index} src={image.href} />

        ) : [6].includes(index) ? (
          <GridItemLandscapeLarge key={index} src={image.href} />

        ) : [2,4,5].includes(index) ? (
          <GridItemLandscape key={index} src={image.href} />

        ) : (
          <GridItemPortrait key={index} src={image.href} />
        )
      ))}
    </PhotoGridContainer>
  );
}