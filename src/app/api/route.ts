import axios from 'axios'
import { pokeApiURL } from '@/utils/consts'

export async function GET() {
  try {
    const request = await axios.get(`${pokeApiURL}`)
    const { results } = request.data
    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
} 