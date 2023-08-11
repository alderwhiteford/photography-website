'use client'

import { getDocuments } from '@/firebase/config';
import { useEffect } from 'react';

export default function useGetDocuments(path, loadingState, bufferredState, documentState) {

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const documentsData = await getDocuments(path);
        documentState(documentsData);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
    loadingState(false)
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      bufferredState(false)
    })
  }, [path, documentState, loadingState, bufferredState]);
}