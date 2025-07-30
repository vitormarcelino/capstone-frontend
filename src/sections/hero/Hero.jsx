import React from 'react'
import food from '../../img/restaurantfood.jpg'
import './Hero.css'

const Hero = ({ setCurrentPage }) => {
  const handleReserveClick = () => {
    setCurrentPage('reservations');
  };

  return (
    <section className='hero-section flex flex-col md:flex-row justify-center p-5'>
      
      <div className='w-80-percent lg:w-40-percent m-3'>
        <h1 className='font-bold text-5xl'>Little Lemon</h1>
        <h2 className='font-medium text-lg'>Chicago</h2>
        <p className='text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.</p>
        <button onClick={handleReserveClick} className='yellow-btn my-3'>Reserve a Table</button>
      </div>

      <div className='hero-img'>
        <img src={food} alt="Restaurant Food" />
      </div>
    </section>
  )
}

export default Hero