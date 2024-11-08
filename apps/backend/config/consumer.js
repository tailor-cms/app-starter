const { env } = process;

export const clientId = env.CONSUMER_CLIENT_ID;

export const clientSecret = env.CONSUMER_CLIENT_SECRET;

export const tokenHost = env.CONSUMER_CLIENT_TOKEN_HOST;

export const tokenPath = env.CONSUMER_CLIENT_TOKEN_PATH;

export const isAuthConfigured =
  clientId && clientSecret && tokenHost && tokenPath;

export default {
  isAuthConfigured,
  clientId,
  clientSecret,
  tokenHost,
  tokenPath,
};
