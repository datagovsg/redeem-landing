import { redirect } from 'next/navigation'

import { REWARDS_ROOT } from '~constants/links'

// Dummy page that does redirect only
const Page = () => {
  redirect(REWARDS_ROOT)
}

export default Page
