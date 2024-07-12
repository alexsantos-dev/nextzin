import Link from 'next/link'

export default function Home() {
  return (
    <>
    <header>
        <ul>
          <li>
            <Link href='/teste'>Teste</Link>
            <Link href='/dash'>Dash</Link>
          </li>
        </ul>
      </header>
      <main className='w-full h-svh bg-destructive flex justify-center items-center'>
        <section>
          <h1>HOME</h1>
        </section>
      </main>
    </>
  )
}
