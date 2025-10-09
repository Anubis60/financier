import { whopServer } from './whop'

/**
 * Fetch company memberships
 * @param {string} companyId - The company ID from the URL parameter
 * @returns {Promise} Memberships data
 */
export async function getCompanyMemberships(companyId) {
  // ALWAYS use the companyId parameter passed in, never from env
  return await whopServer.memberships.list({
    company_id: companyId
  })
}

/**
 * Fetch company details
 * @param {string} companyId - The company ID from the URL parameter
 * @returns {Promise} Company data
 */
export async function getCompanyDetails(companyId) {
  // ALWAYS use the companyId parameter passed in, never from env
  return await whopServer.companies.retrieve(companyId)
}

/**
 * Fetch company plans/products
 * @param {string} companyId - The company ID from the URL parameter
 * @returns {Promise} Plans data
 */
export async function getCompanyPlans(companyId) {
  // ALWAYS use the companyId parameter passed in, never from env
  return await whopServer.plans.list({
    company_id: companyId
  })
}

/**
 * Example: Fetch membership by ID
 * @param {string} membershipId - The membership ID
 * @param {string} companyId - The company ID from URL (for verification)
 * @returns {Promise} Membership data
 */
export async function getMembership(membershipId, companyId) {
  const membership = await whopServer.memberships.retrieve(membershipId)

  // Verify the membership belongs to the company from the URL
  if (membership.company_id !== companyId) {
    throw new Error('Membership does not belong to this company')
  }

  return membership
}
