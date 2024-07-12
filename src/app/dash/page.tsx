import Link from 'next/link'

export default function Dash() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href='/home'>Home</Link>
            <Link href='/teste'>Teste</Link>
          </li>
        </ul>
      </header>
      <main className='w-full h-svh bg-destructive flex justify-center items-center'>
        <section>
          <h1>DASH</h1>
        </section>
      </main>
    </>
  )
}
