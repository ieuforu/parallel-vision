export default function PhotoSkeleton({ isModal = false }: { isModal?: boolean }) {
  return (
    <div
      className={`flex flex-col animate-pulse ${
        isModal ? 'lg:flex-row h-full overflow-hidden' : 'w-full gap-12 min-h-screen'
      }`}
    >
      <div
        className={`${
          isModal
            ? 'h-[40vh] lg:h-full lg:flex-[1.4] bg-zinc-100 shrink-0'
            : 'w-full aspect-16/10 bg-zinc-100 rounded-sm'
        }`}
      />

      <div className={`flex-1 flex flex-col min-h-0 ${isModal ? 'p-6 lg:p-12' : 'py-4'}`}>
        <div className="space-y-6 lg:my-auto">
          <div className="space-y-2">
            <div className="h-3 w-24 bg-zinc-200" />
            <div className="h-10 lg:h-12 w-3/4 bg-zinc-200" />
          </div>

          <div className="space-y-3">
            <div className="h-4 w-full bg-zinc-100" />
            <div className="h-4 w-5/6 bg-zinc-100" />
            <div className="h-4 w-4/6 bg-zinc-100" />
          </div>

          <div className="pt-4 lg:pt-8 space-y-3 lg:space-y-4">
            <div className="h-12 lg:h-14 w-full bg-zinc-200" />
            <div className="h-12 lg:h-14 w-full border border-zinc-100" />
          </div>
        </div>
      </div>
    </div>
  )
}
