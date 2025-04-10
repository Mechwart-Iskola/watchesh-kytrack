import './productscard.css'



{/*Hozz létre egy típust ami alklmas a products.json adatainak tárolására */}

{/*Egészítsd ki a komponenst a megfelelő propsok használatával */}

const ProductsCard = () => {
  return (
    <article className="products__card">
            <img src="" alt="" className="products__img"/>

            <h3 className="products__title"></h3>
            <span className="products__price">$</span>

            <button className="products__button">
                <i className='bx bx-shopping-bag'></i>
            </button>
        </article>
        )
}

export default ProductsCard