
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data.json';
import './Categorypage.css'
import About from "../../components/About/About"
import Category from "../../components/categories/Category"


const HeadphonesPage = () => {
  // Filter products in the "headphones" category
  const headphonesData = data.filter((product) => product.category === 'headphones');

  return (
    <div className='product__container'>
      <h2 className='products__category'>Headphones</h2>
      <div className="product__list">
        {/* Render product cards for each product in the "headphones" category */}
        {headphonesData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
      <Category/>
      <About/>
    </div>
  );
};

export default HeadphonesPage;

