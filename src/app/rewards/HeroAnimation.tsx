'use client'
import Lottie from 'lottie-react'
import { Box } from '~components/chakra'
import RedeemSGRewardsHeroAnimation from '~animations/RedeemSGRewardsHeroAnimation.json'

const HeroAnimation = () => {
  return (
    <Box>
      <Lottie animationData={RedeemSGRewardsHeroAnimation} loop={true} />
    </Box>
  )
}

export default HeroAnimation
