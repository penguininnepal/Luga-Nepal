import Soldby from "../Soldby"
import DeliveryOptions from "../DeliveryOptions"
import ReturnandWarranty from "../ReturnandWarranty"

const AboutProdinfo = () => {
  return (
    <div className="h-auto w-full bg-[#fafafa]">
        <div>
        <section className="mt-4 grid grid-cols-3">
        <Soldby />
        <DeliveryOptions />
        <ReturnandWarranty />
      </section>
        </div>
      
    </div>
  )
}

export default AboutProdinfo
