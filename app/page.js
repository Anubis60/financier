import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Whop Churnkey</h1>
        <p className="text-gray-600 mb-8">Reduce churn with smart cancellation flows</p>
        <Link
          href="/dashboard/demo"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}
