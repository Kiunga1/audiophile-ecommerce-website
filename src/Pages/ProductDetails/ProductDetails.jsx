
import { Link, useParams } from 'react-router-dom'
import data from '../../../resources/data.json';
import Button from '../../components/Button/Button'
import './ProductDetails.css'

const ProductDetailPage = () => {
  const { slug } = useParams();

  // Find the product with the matching slug
  const product = data.find((p) => p.slug === slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className='product_details'>
      <Link to="/" className="go-back-link">
        <p>Go Back</p>
      </Link>
      <div className='basicInfo'>
        <img src={product.image.tablet} alt={product.name} />
        <div>
        {product.new && <h1 className='title'>New Product</h1>}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className='price'> $ {product.price}</p>
          <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="Add to cart"/>
          
        </div>
      </div>

      <div className="features_includes">
        <div className="features">
          <h3>FEATURES</h3>
          <p>{product.features}</p>
        </div>
        <div className="includes">
          <h3>in the box</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <div className="images">
        <div className="first__second__img">
          <img src="prodect.gallery.first.mobile" alt="product.name" />
          <img src="prodect.gallery.second.mobile" alt="product.name" />
        </div>
        <img className="third__img" src="prodect.gallery.third.mobile" alt="product.name" />
      </div>
      <div className="other_products">
        <div className="other_products_list">
        </div>
      </div>

      {/* <div className="other_products"> */}
        {/* map through others and display */}
        {/* <div className="other__product">
          <img src={product.others.image.mobile} alt={product.others.name} />
          <h4>{product.others.name}</h4>
          
        </div>
      </div> */}
      
    </div>
  );
};

export default ProductDetailPage;
