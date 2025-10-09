import './globals.css'

export const metadata = {
  title: 'Whop Churnkey',
  description: 'Churn reduction and cancellation flow management for Whop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
