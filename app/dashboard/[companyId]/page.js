'use client'

import React, { use, useEffect, useState } from 'react'
import DashboardClient from './DashboardClient'

export default function DashboardPage({ params }) {
  const { companyId } = use(params)
  const [companyData, setCompanyData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchCompanyData() {
      try {
        const response = await fetch(`/api/company?companyId=${companyId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch company data')
        }
        const data = await response.json()
        setCompanyData(data)
      } catch (err) {
        setError(err.message || 'Failed to fetch company data')
        console.error('Error fetching company:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanyData()
  }, [companyId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
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
