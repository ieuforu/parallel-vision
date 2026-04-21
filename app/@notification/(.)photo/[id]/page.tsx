'use client'
import { use } from 'react'
import PhotoCardDetail from '@/components/photo-card-detail'

export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return <PhotoCardDetail id={id} isModal={true} />
}
