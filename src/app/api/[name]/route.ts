import { pokeApiURL } from '@/utils/consts'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { name: string } }) {
  const { name } = params
  try {
    const response = await fetch(`${pokeApiURL}/${name}`)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
} 