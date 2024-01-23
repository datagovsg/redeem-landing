import FAQ from '~components/FAQ'
import { FAQ as FAQLink } from '~constants/links'

const ResidentFAQ = () => {
  return (
    <FAQ
      headerText="Frequently Asked Questions"
      bodyText="If you have more questions, please read our full FAQ, or contact the agency that issued your vouchers."
      buttonText="Explore FAQ"
      buttonURL={FAQLink}
    />
  )
}

export default ResidentFAQ
