import { whop } from './whop'

/**
 * Fetch company details
 * @returns {Promise} Company data
 */
export async function getCompanyDetails() {
  const response = await whop.GET('/company')
  return response.data
}

/**
 * Fetch company memberships
 * @returns {Promise} Memberships data
 */
export async function getCompanyMemberships() {
  const response = await whop.GET('/memberships')
  return response.data
}

/**
 * Fetch company plans
 * @returns {Promise} Plans data
 */
export async function getCompanyPlans() {
  const response = await whop.GET('/plans')
  return response.data
}
