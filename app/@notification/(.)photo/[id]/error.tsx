'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('捕获到详情加载错误:', error)
  }, [error])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/20 backdrop-blur-sm p-4">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center border border-red-100">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-black text-zinc-900 mb-2">图片加载失败</h2>
        <p className="text-zinc-500 mb-8 leading-relaxed">
          抱歉，我们无法获取该作品的详情。可能是网络波动或资源已被移除。
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all active:scale-95"
          >
            尝试重新加载
          </button>
          <button
            onClick={() => window.history.back()}
            className="w-full py-4 text-zinc-500 font-semibold hover:text-zinc-900 transition-colors"
          >
            返回列表
          </button>
        </div>
      </div>
    </div>
  )
}
