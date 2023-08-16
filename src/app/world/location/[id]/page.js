'use client'

import NavButton from '@/components/Button/NavButton'
import PhotoGridV1 from '@/components/Grid/PhotoGrid/PhotoGridV1'
import PhotoGridV2 from '@/components/Grid/PhotoGrid/PhotoGridV2'
import PhotoGridV3 from '@/components/Grid/PhotoGrid/PhotoGridV3'
import { getDocuments, getLocationImages } from '@/firebase/config'
import useGetDocuments from '@/hooks/use-documents'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const LocationContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  font-size: 3vw;
  font-weight: 500;
  letter-spacing: 2px; 
  margin-top: 20px;
`

const LocationHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  justify-content: space-between;
`

export default function Location() {
  const grid = useSearchParams().get('grid')
  const title = useSearchParams().get('title')
  const [images, setImages] = useState([]);
  const location = useSearchParams().get('collection')
  const locationCollection = usePathname().split('/')[2]
  const [isLoading, setIsLoading] = useState(true)
  const [isBuffered, setIsBuffered] = useState(true)

  useGetDocuments(`World/${location}/${locationCollection}`, setIsLoading, setIsBuffered, setImages)

  return (
    <LocationContainer>
      <LocationHeadingContainer>
        <NavButton href='/' text='BACK'/>
        <h1>{title}</h1>
        <NavButton href='/' text='HIDDEN'/>
      </LocationHeadingContainer>
      {grid === '1' ? <PhotoGridV1 data={images}/> 
      : grid ==='2' ? <PhotoGridV2 data={images}/> 
      : grid ==='3' ? <PhotoGridV3 data={images}/>
      : <></>}
    </LocationContainer>
  )
}
