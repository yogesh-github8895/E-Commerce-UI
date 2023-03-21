import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Products from "../components/Products";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Slider/>
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer/>
        </div>
  )
}

export default Home