import Link from 'next/link'

export default function Teste() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href='/home'>Home</Link>
            <Link href='/dash'>Dash</Link>
          </li>
        </ul>
      </header>
      <main className='w-full h-svh bg-destructive flex justify-center items-center'>
        <section>
          <h1>TESTE</h1>
        </section>
      </main>
    </>
  )
}
