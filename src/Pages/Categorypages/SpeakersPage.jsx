
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../data.json'
import './Categorypage.css'
import About from "../../components/About/About"
import Category from "../../components/categories/Category"


const SpeakersPage = () => {
  // Filter products in the "speakers" category
  const speakersData = data.filter((product) => product.category === 'speakers');

  return (
    <div className='product__container'>
      <h2 className='products__category'>Speakers</h2>
      <div className="product__list">
        {/* Render product cards for each product in the "speakers" category */}
        {speakersData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
      <Category/>
      <About/>
    </div>
  );
};

export default SpeakersPage;