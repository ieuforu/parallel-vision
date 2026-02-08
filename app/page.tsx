import Link from 'next/link'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams

  const photoIds = [
    '10',
    '20',
    '28',
    '29',
    '37',
    '42',
    '43',
    '48',
    '54',
    '57',
    '65',
    '76',
  ]

  const allPhotos = photoIds.map((id, i) => ({
    id,
    title: i % 2 === 0 ? 'Landscape' : 'Portrait',
    url: `https://picsum.photos/id/${id}/800/1000`,
  }))

  const filteredPhotos = q
    ? allPhotos.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()))
    : allPhotos

  return (
    <div className="space-y-10">
      <div className="max-w-md mx-auto">
        <form
          action="/"
          method="GET"
          className="group relative max-w-2xl mx-auto"
        >
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          <input
            type="text"
            name="q"
            placeholder="搜索图片标题..."
            defaultValue={q}
            className="w-full pl-14 pr-6 py-4 rounded-2xl border border-zinc-100 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all shadow-sm placeholder:text-zinc-400 text-zinc-900"
          />

          <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-1.5 py-1 rounded border border-zinc-200 bg-white text-[10px] font-bold text-zinc-400 select-none">
            <span className="text-[12px]">⌘</span>K
          </div>
        </form>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredPhotos.map((photo) => (
          <Link
            key={photo.id}
            href={`/photo/${photo.id}`}
            className="group block relative overflow-hidden rounded-2xl bg-zinc-100 break-inside-avoid"
          >
            <img
              src={photo.url}
              alt=""
              className="w-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end text-white font-bold">
              {photo.title} #{photo.id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
