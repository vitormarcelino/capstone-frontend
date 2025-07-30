import React from 'react'
import Hero from '../sections/hero/Hero'
import About from '../sections/about/About'
import Specials from '../sections/specials/Specials'
import Testimonials from '../sections/testimonials/Testimonials'

const Home = ({ setCurrentPage }) => {
  return (
    <main>
      <Hero setCurrentPage={setCurrentPage} />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}

export default Home
