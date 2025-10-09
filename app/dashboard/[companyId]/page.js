import { whopServer } from '@/lib/whop'
import DashboardClient from './DashboardClient'

export default async function DashboardPage({ params }) {
  // IMPORTANT: Always use companyId from URL params, never from env variables
  // This ensures each business owner only sees their own data
  const { companyId } = params

  // Fetch company data server-side using the URL companyId
  let companyData = null
  let error = null

  try {
    // Fetch company information from Whop
    // Note: The API key is tied to the company, so this retrieves the company for the API key
    // The companyId from URL is used for verification and routing
    const response = await whopServer.companies.retrieveCompany({})
    companyData = response

    // Verify the company ID matches the URL parameter
    if (companyData.id !== companyId) {
      throw new Error('Company ID mismatch - URL does not match API key company')
    }
  } catch (err) {
    error = err.message
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
