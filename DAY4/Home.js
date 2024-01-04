import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const ToyStoreLanding = () => {
  useEffect(() => {
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Welcome to LittleJoy</h1>
        <h3>Your magical world of imagination and play!</h3>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Let the Adventures Begin!</h2>
            <h3>Discover a world of joy and creativity with our amazing toys.</h3>
            <button className="shop-now-btn"><Link to='/Categories'>Shop Now</Link></button>
          </div>
        </section>
       </main>
    </div>
  );
};

export default ToyStoreLanding;
