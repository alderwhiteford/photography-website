'use client'

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { LoadingLogo } from "@/components/Loading/LoadingLogo"
import { LoadingLogoContainer } from "@/components/Loading/LoadingLogo"
import CategoryGridItem from "@/components/Grid/CategoryGridItem"
import useGetDocuments from "@/hooks/use-documents";

const WorldContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr;
  gap: 5px;
  padding: 50px; 
`

export default function Home() {

  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBuffered, setIsBuffered] = useState(true);
  useGetDocuments('World', setIsLoading, setIsBuffered, setLocations)

  return (
    <>
      <WorldContainer style={isBuffered ? {display: 'none'} : {display: 'grid'}}>
        {locations.map((loc) => {
          return (
            <CategoryGridItem key={loc.title} text={loc.title} img={loc.image} href={loc.href}/>
          )
        })}
      </WorldContainer> :
      <LoadingLogoContainer style={!isBuffered ? {display: 'none'} : {display: 'flex'}}>
        <LoadingLogo src='https://i.imgur.com/uGZltjy.png'/>
      </LoadingLogoContainer>
    </>
  )
}