import Header from './Components/Header/Header'
import './App.css'
import Home from './Components/Home/Home'
import Featured from './Components/Featured/Featured'
import Story from './Components/Story/Story'
import Footer from './Components/Footer/Footer'
import NewSletter from './Components/NewsLetter/NewSletter'
import Products from './Components/Products/Products'
import Testimonial from './Components/Testimonial/Testimonial'
import New from './Components/New/New'

function App() {


  return (
    <>
      <Header></Header>
       <main className='main'>
          <Home></Home>
          <Featured></Featured>
          <Story></Story>
          <Products></Products>
          <NewSletter></NewSletter>
          <Testimonial></Testimonial>
          <New></New>
       </main>
          <Footer></Footer>
    </>
  )
}

export default App
