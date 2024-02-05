import { redirect } from 'next/navigation'

import { DISBURSING } from '~constants/links'

// Dummy page that does redirect only
const page = () => {
  redirect(DISBURSING)
}

export default page
