
import './featured.css'

import FeatureCard from './featuredCard/FeatureCard'

{/* Fetcheld be az adatokat a featured jsonból és jelenítsd meg a featured_container elemből*/}

{/* Állítsd be a featured.css-ben, hogy az órák 992px szélesség alatt egymás alá kerüljenek a fölött pedig egymás mellé */}


const Featured = () => {



  return (
    <section className="featured" id="featured">
    <h2 className="feature__title">Featured</h2>
    <div className="featured__container">
            {/* feauterd watches */}
    </div>
</section>
  )
}

export default Featured