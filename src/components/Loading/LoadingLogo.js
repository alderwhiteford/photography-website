import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingLogo = styled.img`
  width: 15vw;
  height: 15vw;
  margin: auto;
  animation: ${spinAnimation} 20s linear infinite;
`

const LoadingLogoContainer = styled.div`
  width: 100%;
  height: 68vh;
  display: flex; 
  position: relative;
`

export { LoadingLogo, LoadingLogoContainer }