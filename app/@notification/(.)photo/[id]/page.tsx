'use client'
import { useRouter } from 'next/navigation'
import { use } from 'react'
import PhotoCardDetail from '@/components/photo-card-detail'

export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm p-4 md:p-12"
      onClick={() => router.back()}
    >
      <button
        className="absolute top-4 right-4 z-60 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white md:hidden"
        onClick={(e) => {
          e.stopPropagation()
          router.back()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <div
        className="relative bg-white w-full max-w-7xl h-full overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-60 p-2 text-zinc-400 hover:text-zinc-900 hidden md:block"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <PhotoCardDetail id={id} isModal={true} />
      </div>
    </div>
  )
}
