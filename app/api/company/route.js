import { NextResponse } from 'next/server'
import { whopSdk } from '@/lib/whop'

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams
    const companyId = searchParams.get('companyId')

    if (!companyId) {
      return NextResponse.json(
        { error: 'Company ID is required' },
        { status: 400 }
      )
    }

    // Fetch company data using Whop SDK
    const response = await whopSdk.withCompany(companyId).companies.getCompany({ companyId })

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching company:', error)
    return NextResponse.json(
      { error: 'Failed to fetch company data' },
      { status: 500 }
    )
  }
}
