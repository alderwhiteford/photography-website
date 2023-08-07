'use client'

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getLocations } from "@/firebase/config"
import styled from "styled-components"
import { LoadingLogo } from "@/components/Loading/LoadingLogo"
import { LoadingLogoContainer } from "@/components/Loading/LoadingLogo"
import CategoryGridItem from "@/components/Grid/CategoryGridItem"

const WorldContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 50px; 
`

export default function Home() {

  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsData = await getLocations();
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
    setIsLoading(false)
  }, []);

  return (
     <WorldContainer>
      {!isLoading ? 
        locations.map((loc) => {
          return (
            <CategoryGridItem key={loc.title} text={loc.title} img={loc.image} href={loc.href}/>
          )
        }) :
        <>
          <div className='placeholder'></div>
          <LoadingLogoContainer>
            <LoadingLogo src='https://i.imgur.com/uGZltjy.png'/>
          </LoadingLogoContainer>
        </>
      }
     </WorldContainer>
  )
}