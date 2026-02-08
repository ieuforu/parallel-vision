import PhotoCardDetail from '@/components/photo-card-detail'
import Link from 'next/link'

export default async function FullPhotoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-zinc-50 pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-bold mb-10 transition-transform hover:-translate-x-1"
        >
          ← Back to Explorer
        </Link>
        <PhotoCardDetail id={id} />
      </div>
    </div>
  )
}
