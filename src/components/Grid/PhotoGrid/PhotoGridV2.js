import styled from "styled-components";
import { GridItemCinematic, GridItemLandscape, GridItemLandscapeLarge, GridItemPortrait, GridItemPortraitLarge } from "./PhotoGrid";

export default function PhotoGridV2({ data }) {
  
  const PhotoGridContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 40vw 32.5vw 32.5vw 35vw 32.5vw;
    gap: 10px;
    padding: 50px; 
`

  return (
    <PhotoGridContainer>
      {data.map((image, index) => (
        [0].includes(index) ? (
          <GridItemLandscapeLarge key={index} src={image.href} />

        ) : [4,5,6,8].includes(index) ? (
          <GridItemLandscape key={index} src={image.href} />

        ) : (
          <GridItemPortrait key={index} src={image.href} />
        )
      ))}
    </PhotoGridContainer>
  )

}