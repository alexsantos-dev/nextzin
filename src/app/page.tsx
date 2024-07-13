import { localApiURL } from '@/utils/consts'
import axios from 'axios'

async function GetAllPokemons() {
  const request = await axios.get(`${localApiURL}`)
  return request.data
}

export default async function Home() {
  const pokemons = await GetAllPokemons()

  return (
    <>
      <main className='w-full h-svh bg-secondary flex justify-center items-center'>
        <section>
          {pokemons.map((pokemon: any) => (
            <div>
              <p>{pokemon.name}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
