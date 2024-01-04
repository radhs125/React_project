import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About= () => {
  useEffect(() => {
    document.body.classList.add('about-page');
    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);
  return (
    <div className="about-us-container">
      <header>
        <h1>Welcome to LittleJoy</h1>
        <p>Your Wonderland of Joyful Toys</p>
      </header>

      <main>
        <section className="overview">
          <h2>Our Story</h2>
          <p>Embark on a magical journey with LittleJoy, where each toy is a portal to boundless imagination and joy. Since
            our inception in 2010, LittleJoy has been weaving tales of laughter, creativity, and unforgettable
            childhood moments.</p>
          <p>Our curated collection of toys is a celebration of playfulness, designed to spark curiosity and nurture
            the spirit of exploration in every child.</p>
        </section>

        <section className="mission-vision">
          <h2>Our Mission</h2>
          <p>At LittleJoy, our mission is to create a world where play knows no bounds. We are committed to providing a
            diverse array of toys that not only entertain but also inspire learning, innovation, and the pure joy of
            being a child.</p>
        </section>
        <section className="cta">
          <h2>Join the LittleJoy Family</h2>
          <p>
            Ready for a magical journey? Explore our collection and bring home joy
            for your little ones. Start creating memories today!
          </p>
          <button className="explore-btn"><Link to='/Categories'>Explore Now</Link></button>
        </section>

      </main>

      <footer>
        <p>&copy; 2023 LittleJoy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
