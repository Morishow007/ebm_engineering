import { CardProduct } from './CardProduct'

export const ProductsSection = () => {
  return (
    <div className="mainContainer darkerBackground">
      <div className="section-container-content">
        <div className="container grid grid-rows-3 grid-flow-col gap-4">
          <CardProduct />
        </div>
      </div>
    </div>
  )
}
