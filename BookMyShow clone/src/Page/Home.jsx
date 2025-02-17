import React from 'react'
import Nav from '../component/Nav'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'
import Footer from '../component/Footer'
import MovieCard from '../component/MovieCard'
import Section2 from '../component/Section2'
import Section3 from '../component/Section3'
import Section4 from '../component/Section4'
import Section5 from '../component/Section5'

function Home() {
  return (
    <div>
        <Nav/>
        <Navbar/>
        <Slider/>
        <MovieCard/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </div>
  )
}

export default Home