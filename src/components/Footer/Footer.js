'use client'

import styled from "styled-components"

const FooterContainer = styled.footer`
  width: 100vw;
  display: flex;
  padding: 40px; 
`

const FooterText = styled.h1`
  font-weight: 700;
  margin-right: auto;
  margin-bottom: 20px;
`

const FooterInformationGrid = styled.div`
  width: 25vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const FooterGridItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>Alder Whiteford</FooterText>
      <FooterInformationGrid>
        <FooterGridItem>
          <FooterText>Connect</FooterText>
          <a href='https://www.instagram.com/aldersgallery/' target='_blank'>Instagram</a>
          <a href='https://www.linkedin.com/in/alderwhiteford/' target='_blank'>LinkedIn</a>
        </FooterGridItem>
        <FooterGridItem>
          <FooterText>Get In Touch</FooterText>
          <h1>+1 (971) 373-0303</h1>
          <h1>whiteford.a@northeastern.edu</h1>
        </FooterGridItem>
      </FooterInformationGrid>
    </FooterContainer>
  )
}