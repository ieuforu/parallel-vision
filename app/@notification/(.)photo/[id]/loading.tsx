import PhotoSkeleton from '@/components/photo-skeleton'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm p-4 md:p-12">
      <PhotoSkeleton isModal={true} />
    </div>
  )
}
