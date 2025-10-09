import { whop } from '@/lib/whop'
import DashboardClient from './DashboardClient'

export default async function DashboardPage({ params }) {
  // IMPORTANT: Always use companyId from URL params, never from env variables
  // This ensures each business owner only sees their own data
  const { companyId } = params

  // Fetch company data server-side using Whop SDK
  let companyData = null
  let error = null

  try {
    // Use SDK scoped to the company from URL
    const companyWhop = whop.withCompany(companyId)

    // Fetch company information
    const response = await companyWhop.getCompany()
    companyData = response
  } catch (err) {
    error = err.message || 'Failed to fetch company data'
    console.error('Error fetching company:', err)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardClient
        companyId={companyId}
        companyData={companyData}
        error={error}
      />
    </div>
  )
}
