import Image from 'next/image'
import GoogleIcon from 'images/google-icon.png'
import { Suspense } from 'react'
export default function Home() {
  return (
    <main className='flex justify-center items-center'>
      <div className='w-screen h-svh flex flex-col justify-center items-center bg-primary'>
        <Image
          src={GoogleIcon}
          width={32}
          height={32}
          alt='Google icon'
          loading={'lazy'}
        />
        <p className='text-white text-9xl'>Aoba</p>
      </div>
    </main>
  )
}
