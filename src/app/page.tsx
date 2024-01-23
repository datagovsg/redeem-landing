import { redirect } from 'next/navigation'

import { SPENDING } from '~constants/links'

// Dummy page that does redirect only
const page = () => {
  redirect(SPENDING)
}

export default page
