import Button from '../Button/Button';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="title">NEW PRODUCT</h1>
        <h2 className="hero__title">XX99 MARK II Headphones</h2>
        <p className="hero__description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        < Button backgroundColor="#D87D4A" hoverColor="#FBAF85"/>
      </div>
    </section>
  );
};

export default Hero;