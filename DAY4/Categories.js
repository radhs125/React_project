import {React,useEffect} from 'react';
import { Link, } from 'react-router-dom';
import './Categories.css'; // Make sure to import your CSS file

const Categories = () => {
    useEffect(() => {
        document.body.classList.add('categories-page');
        return () => {
          document.body.classList.remove('categories-page');
        };
      }, []);
  return (
    <div className="cards">
      <div className="card card1">
        <div className="container">
          <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014123391694428473.webp" alt="Cat 1" style={{ filter: 'grayscale(50%)' }}
/>
        </div>
        <div className="details">
          <h3>"Embark on endless fun with our captivating Toys and Games collection! Explore a world of excitement, laughter, and imagination. Let the play begin! 🎮🧸 #PlayOn #ToysAndGames"</h3>
          <div className="btn">Shop Now</div>
        </div>
      </div>
      <div className="card card2">
        <div className="container">
          <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014146701694428480.webp" alt="Cat 2" style={{ filter: 'grayscale(50%)' }}
/>
        </div>
        <div className="details">
          <h3>"Pedal into adventure with our Ride-Ons and Cycles collection! From speedy cycles to cool ride-ons, every journey is a ride to remember. Let the outdoor fun roll on! 🚴‍♂️🚗 #RideOnAdventure #CycleExploration"</h3>
          <div className="btn"><Link to ='/cart' >Shop Now</Link></div>
        </div>
      </div>
      <div className="card card3">
        <div className="container">
          <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014118541694428481.webp" alt="Cat 3" style={{ filter: 'grayscale(50%)' }}
/>
        </div>
        <div className="details">
          <h3>"Discover comfort and convenience in our Baby Gear and Utility collection. Elevate parenthood with essentials designed for your little one's joy and your peace of mind. Welcome to a world of ease and blissful moments! "</h3>
          <div className="btn">Shop Now</div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
