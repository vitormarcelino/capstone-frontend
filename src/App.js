import './App.css';
import React, { useState } from 'react';
import Header from './sections/header/Header.jsx';
import Footer from './sections/footer/Footer.jsx';
import Home from './pages/Home.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <div>
          <h1>About Us</h1>
          <p>Learn more about Little Lemon restaurant.</p>
        </div>;
      case 'menu':
        return <div>
          <h1>Our Menu</h1>
          <p>Discover our delicious dishes.</p>
        </div>;
      case 'reservations':
        return <div>
          <h1>Reservations</h1>
          <p>Book your table here.</p>
        </div>;
      case 'order':
        return <div>
          <h1>Order Online</h1>
          <p>Place your order for delivery or pickup.</p>
        </div>;
      case 'login':
        return <div>
          <h1>Login</h1>
          <p>Login to your account.</p>
        </div>;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className='App'>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;