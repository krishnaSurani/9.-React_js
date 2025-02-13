import React from 'react'
import Nav from '../component/Nav'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'
import Footer from '../component/Footer'
import MovieCard from '../component/MovieCard'

function Home() {
  return (
    <div>
        <Nav/>
        <Navbar/>
        <Slider/>
        <MovieCard/>
        <Footer/>
    </div>
  )
}

export default Home