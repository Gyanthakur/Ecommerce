
import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

import Slider from '../components/Slider'
// import Cart from './Cart'
// import Login from './Login'
// import Product from './Product'
// import Register from './Register'

// const {showAlert} = props;
const Home = () => {
  return (
    <div>
      <Announcement/>
      {/* <Navbar/> */}
      {/* <Navbar/> */}
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
       {/* <Cart/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/>  */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home
