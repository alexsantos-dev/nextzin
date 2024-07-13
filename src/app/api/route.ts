import { pokeApiURL } from '@/utils/consts'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const request = await fetch(`${pokeApiURL}`)
    const data = await request.json()
    return NextResponse.json(data.results)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
} 