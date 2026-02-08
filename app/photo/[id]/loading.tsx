import PhotoSkeleton from '@/components/photo-skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <PhotoSkeleton isModal={false} />
    </div>
  )
}
