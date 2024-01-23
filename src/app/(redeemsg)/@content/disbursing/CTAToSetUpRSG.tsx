import CTAToSetUpCampaign from '~components/CTAToSetUpCampaign'
import { RSG_CDC_CAMPAIGN_ORGANISER_FORM } from '~constants/links'

const CTAToSetUpRSG = () => {
  return (
    <CTAToSetUpCampaign
      title="Ready to launch with us?"
      description="If you are interested in issuing vouchers with RedeemSG, share your use case with us!"
      buttonURL={RSG_CDC_CAMPAIGN_ORGANISER_FORM}
      buttonText="Talk to us"
    />
  )
}

export default CTAToSetUpRSG
