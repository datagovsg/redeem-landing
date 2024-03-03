import { MetadataRoute } from 'next'

import { getBaseUrl } from '~/helper/getBaseUrl'

const BASE_URL = getBaseUrl()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/accepting`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/disbursing`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/spending`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/faq`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/privacy`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/rewards`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/rewards/organiser`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/rewards/resident`,
      priority: 1,
    },
    {
      url: `${BASE_URL}/rewards/wheretospend`,
      priority: 1,
    },
  ]
}
