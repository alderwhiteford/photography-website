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
  animation: ${spinAnimation} 20s linear infinite;
  align-self: center;
`

const LoadingLogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { LoadingLogo, LoadingLogoContainer }