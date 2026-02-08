import './globals.css'

export default function RootLayout({
  children,
  notification,
}: {
  children: React.ReactNode
  notification: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-zinc-950 selection:bg-zinc-900 selection:text-white">
        <nav className="fixed top-0 z-40 w-full bg-white/70 backdrop-blur-xl border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <span className="text-xl font-black tracking-tight uppercase">
              Vision.
            </span>
            <div className="flex gap-8 text-[13px] font-medium uppercase tracking-widest text-zinc-500">
              <span className="hover:text-zinc-950 cursor-pointer transition-colors">
                Archive
              </span>
              <span className="hover:text-zinc-950 cursor-pointer transition-colors">
                About
              </span>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">{children}</main>

        <div className="fixed z-100">{notification}</div>
      </body>
    </html>
  )
}
