'use client'
import { useRouter } from 'next/navigation'

export default function ModalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm p-4 md:p-12"
      onClick={() => router.back()}
    >
      <div
        className="relative bg-white w-full max-w-7xl h-full overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
