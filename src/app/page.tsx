import Card from '@/app/Card'
import { GithubIcon } from 'lucide-react'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title: 'Tokenizer',
  description: 'Count the number of tokens used by various OpenAI models.',
  openGraph: {
    images: [
      '/og.png'
    ]
  } 
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="absolute top-0 left-0 w-full h-8 pr-2 pt-2">
          <a href="https://github.com/cameronk/tokenizer" target="_blank" rel="noreferrer">
            <GithubIcon className="inline h-6 w-5 float-right" />
          </a>
        </div>
        <Card />
        <p className="text-center text-gray-500 mt-4">
          Made by <a href="https://cameronk.org" target="_blank" rel="noreferrer" className="text-blue-400 font-bold">cameronk</a>
        </p>
      </main>
    </>
  )
}
