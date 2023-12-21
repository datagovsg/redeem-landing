import { TEnv } from './types'

export function getEnv() {
  return (process.env.NEXT_PUBLIC_APP_ENV || 'development') as TEnv
}
