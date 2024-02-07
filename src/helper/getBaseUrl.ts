import { getEnv } from './getEnv'
import { TEnv } from './types'

export const baseUrl: Record<TEnv, string> = {
  development: 'http://localhost:3000',
  staging: 'https://staging.redeem.gov.sg',
  production: 'https://redeem.gov.sg',
}

export function getBaseUrl() {
  const env = getEnv()
  return baseUrl[env]
}
