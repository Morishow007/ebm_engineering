import '../../Styles/Global.css'
import { HeadSection } from './HeadSection'
import { PresentationSection } from './PresentationSection'
import { ProductsSection } from './ProductsSection'
import './style.css'

export const LandingPage = () => {
  return (
    <>
      <HeadSection />
      <PresentationSection />
      <ProductsSection />
    </>
  )
}
