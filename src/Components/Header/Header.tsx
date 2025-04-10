import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css'
import { useState,useEffect } from 'react';

const Header = () => {

  {/*Adj a theme ikonhoz egy olyan funkciót amivel váltogatni lehet a light és dark mode között*/}
  const[Darkmode,setDarkmode] = useState(false);

  useEffect(() => {
    if (Darkmode) {
        document.body.classList.add("dark-theme")
    }
    else{
        document.body.classList.remove("dark-theme")
    }
  
  }, [Darkmode])

  const toggleTheme= ()=>{
    setDarkmode(previous=>!previous)
  }
  

  
  {/*Adj egy funkciót a toggle ikonhoz amivel mobilnézetben le lehet
     nyitni a navigációs menüt a close ikonnal meg bezárni*/}

  const[menuOpen,setMenuOpen]=useState(false)

  const openMenu=()=>setMenuOpen(true)
  const closeMenu=()=>setMenuOpen(false)

  {/*
    Adj egy funkciót a cart-shop ikonhoz amivel le lehet nyitni a vásárlási listát
    A vásárlási lista egy külön komponens.
    */}
  const[cartOpen,setCartOpen]= useState(false)
  const toggleCart= ()=>{
    setCartOpen(previous=>!previous)
  }

  {/* Állítsd be az App.css-ben az ul osztályszelektornak, hogy a listaelemek pontok nélkül jelenjenek meg */}

  

  return (
    <>
    <header className="header" id="header">
    <nav >
        <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
        </a>
        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`}  id="nav-menu">      
            <ul className="nav__list">
                {/*
                Készítsd el a Header-eket: Home, Featured, Products, New
                Mindegyik egy listaelem, és azon belül egy hivatkozás
                a listaelem ostrálya nav__item, a hivatkozás osztálya nav__link
                */}

                <li><a className='nav__link' href="Home">Home</a></li>
                <li><a className='nav__link' href="Featured">Featured</a></li>
                <li><a className='nav__link' href="Products">Products</a></li>
                <li><a className='nav__link' href="New">New</a></li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={closeMenu}>
                <i className='bx bx-x' ></i>
            </div>
        </div>
        <div className="nav__btns">           
            <i className='bx bx-moon change-theme' id="theme-button" onClick={toggleTheme}></i>
            <div className="nav__shop" id="cart-shop" onClick={toggleCart}>
                <i className='bx bx-shopping-bag'></i>
            </div>
            <div className="nav__toggle" id="nav-toggle" onClick={openMenu}>
                <i className='bx bx-grid-alt' ></i>
            </div>
        </div>
    </nav>
</header>
{/*Itt jelenjen meg a Cart ha az ikonra kattintottunk */}
   {cartOpen && <Cart onClose={()=> setCartOpen(false)}/>}
 </>
  )
}

export default Header