'use client'

import { usePathname } from 'next/navigation'

const LayoutForEntitiesInformation = () => {
  const pathname = usePathname()
  console.log(pathname)
  return <div>LayoutForEntitiesInformation</div>
}

export default LayoutForEntitiesInformation
