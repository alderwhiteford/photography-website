'use client'

import { usePathname } from 'next/navigation'

export default function Location() {
  const pathname = usePathname().split('/')[2]

  return (
    <h1>{pathname}</h1>
  )
}