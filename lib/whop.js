import { WhopServerSdk } from '@whop/api';

// Server-side Whop SDK client
export const whop = WhopServerSdk({
  appId: process.env.NEXT_PUBLIC_WHOP_APP_ID ?? "",
  appApiKey: process.env.WHOP_API_KEY ?? "",
});

// Client-side config (public values only)
// NOTE: companyId should ALWAYS come from the URL parameter, not from env
export const whopConfig = {
  appId: process.env.NEXT_PUBLIC_WHOP_APP_ID,
  agentUserId: process.env.NEXT_PUBLIC_WHOP_AGENT_USER_ID,
};
