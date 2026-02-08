'use client'

import { useEffect, useState } from 'react'
import PhotoSkeleton from './photo-skeleton'

export default function PhotoCardDetail({
  id,
  isModal = false,
}: {
  id: string
  isModal?: boolean
}) {
  if (!id) return null

  const [isLoading, setIsLoading] = useState(true)
  const [isImgLoading, setIsImgLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <PhotoSkeleton isModal={isModal} />
  }

  const imageUrl = `https://picsum.photos/id/${id}/1200/1200`

  if (id === 'danger') {
    throw new Error('Triggered Error Boundary')
  }

  return (
    <div
      className={`flex flex-col ${
        isModal ? 'lg:flex-row h-full overflow-hidden' : 'w-full gap-12'
      }`}
    >
      <div
        className={`${
          isModal
            ? 'h-[40vh] lg:h-full lg:flex-[1.4] relative bg-zinc-50 shrink-0'
            : 'w-full aspect-16/10 overflow-hidden rounded-sm'
        }`}
      >
        <img
          onLoad={() => setIsImgLoading(false)}
          src={imageUrl}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isImgLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      <div
        className={`flex-1 flex flex-col min-h-0 ${
          isModal ? 'p-6 lg:p-12 overflow-y-auto' : 'py-4'
        }`}
      >
        <div className="space-y-6 lg:my-auto">
          <div className="space-y-2">
            <p className="text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Series 001
            </p>
            <h2 className="text-3xl lg:text-5xl font-light leading-none tracking-tighter text-zinc-900">
              Fragment {id.padStart(3, '0')}
            </h2>
          </div>

          <p className="text-zinc-500 leading-relaxed text-sm lg:text-lg max-w-md">
            Capturing the intersection of architectural geometry and natural
            light. An exploration of temporary spaces within the digital realm.
          </p>

          <div className="pt-4 lg:pt-8 flex flex-col gap-3 lg:gap-4">
            <button className="h-12 lg:h-14 bg-zinc-950 text-white text-[12px] lg:text-[13px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              Acquire License
            </button>
            <button className="h-12 lg:h-14 border border-zinc-200 text-zinc-950 text-[12px] lg:text-[13px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors">
              Technical Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
