import { Box } from '@chakra-ui/react'
import Lottie from 'lottie-react'

import RedeemSGRewardsHeroAnimation from '~animations/RedeemSGRewardsHeroAnimation.json'

const HeroAnimation = () => {
  return (
    <Box maxWidth={{ base: '280px', md: '232px', lg: '302px', xl: '440px' }}>
      <Lottie animationData={RedeemSGRewardsHeroAnimation} loop={true} />
    </Box>
  )
}

export default HeroAnimation
