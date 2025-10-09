'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DashboardClient({ companyId, companyData, error }) {
  const [activeTab, setActiveTab] = useState('overview')

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Company ID: {companyId}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                Whop Churnkey
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {companyData?.name || companyId}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === 'overview'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('flows')}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === 'flows'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Cancellation Flows
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === 'analytics'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === 'settings'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                  title="Active Members"
                  value="0"
                  change="+0%"
                  trend="up"
                />
                <StatCard
                  title="Churn Rate"
                  value="0%"
                  change="-0%"
                  trend="down"
                />
                <StatCard
                  title="Saved Cancellations"
                  value="0"
                  change="+0%"
                  trend="up"
                />
              </div>

              {companyData && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Company Info</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm overflow-auto">
                      {JSON.stringify(companyData, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'flows' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Cancellation Flows</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                  Create Flow
                </button>
              </div>
              <p className="text-gray-600">
                Design custom cancellation flows to reduce churn and understand why customers leave.
              </p>
              <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <p className="text-gray-500">No cancellation flows yet. Create your first one!</p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Analytics</h2>
              <p className="text-gray-600 mb-6">
                Track cancellation reasons, retention offers performance, and more.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Top Cancellation Reasons</h3>
                  <p className="text-sm text-gray-500">No data yet</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Retention Offers</h3>
                  <p className="text-sm text-gray-500">No data yet</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company ID
                  </label>
                  <input
                    type="text"
                    value={companyId}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Enable Cancellation Flow
                  </label>
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-purple-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Show cancellation flow to users attempting to cancel
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

function StatCard({ title, value, change, trend }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold">{value}</p>
        <span
          className={`text-sm font-medium ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  )
}
