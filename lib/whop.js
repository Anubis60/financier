import { WhopSDK } from "@whop-sdk/core";

// Server-side Whop client with API key
export const whopServer = new WhopSDK({
  apiKey: process.env.WHOP_API_KEY,
});

// Client-side config (public values only)
// NOTE: companyId should ALWAYS come from the URL parameter, not from env
export const whopConfig = {
  appId: process.env.NEXT_PUBLIC_WHOP_APP_ID,
  agentUserId: process.env.NEXT_PUBLIC_WHOP_AGENT_USER_ID,
};
