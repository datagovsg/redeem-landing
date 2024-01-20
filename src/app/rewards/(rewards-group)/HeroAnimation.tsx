import { Box } from '@chakra-ui/react'
import Lottie from 'lottie-react'

import RedeemSGRewardsHeroAnimation from '~animations/RedeemSGRewardsHeroAnimation.json'

const HeroAnimation = () => {
  return (
    <Box>
      <Lottie animationData={RedeemSGRewardsHeroAnimation} loop={true} />
    </Box>
  )
}

export default HeroAnimation
