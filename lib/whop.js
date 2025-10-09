import { WhopServerSdk } from '@whop/api';

export const whopSdk = WhopServerSdk({
  appId: process.env.NEXT_PUBLIC_WHOP_APP_ID ?? "",
  appApiKey: process.env.WHOP_API_KEY ?? "",
  // DO NOT add companyId or onBehalfOfUserId for dashboard apps
  // These will be set dynamically per request
});
