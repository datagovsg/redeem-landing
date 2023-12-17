import { redirect } from 'next/navigation'
import { REWARDS_RESIDENT } from '~constants/links'

// Dummy page that does redirect only
const page = () => {
  redirect(REWARDS_RESIDENT)
}

export default page
