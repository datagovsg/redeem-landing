import CTAToSetUpCampaign from '~components/CTAToSetUpCampaign'
import { RSG_CDC_CAMPAIGN_ORGANISER_FORM } from '~constants/links'

const CTAToSetUpRSGRewards = () => {
  return (
    <CTAToSetUpCampaign
      title="Ready to set up your own RedeemSG Rewards?"
      description="Have a campaign? If you are interested in issuing your own RedeemSG
  Rewards, share your use case with us."
      buttonURL={RSG_CDC_CAMPAIGN_ORGANISER_FORM}
      buttonText="Talk to us"
    />
  )
}

export default CTAToSetUpRSGRewards
