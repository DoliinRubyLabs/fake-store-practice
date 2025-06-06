import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { IConfigReq, IConfigRes } from '@/app/(client)/shared/rest-api/interface'

// get config
export async function GET(req: NextRequest): Promise<NextResponse<IConfigRes>> {
  const headerStore = req.headers

  const cookieStore = await cookies()

  const settings: IConfigRes['data'] = JSON.parse(
    cookieStore.get('settings')?.value || headerStore.get('settings') || '{}',
  )

  return NextResponse.json({ data: settings })
}

// post config
export async function POST(req: NextRequest): Promise<NextResponse<IConfigRes>> {
  const body: IConfigReq = await req.json()

  const cookieStore = await cookies()

  cookieStore.set('settings', JSON.stringify(body))

  const settings: IConfigRes['data'] = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return NextResponse.json({ data: settings })
}
