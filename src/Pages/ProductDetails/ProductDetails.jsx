
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

  let imageUrl;
  if (window.innerWidth >= 1023) {
    imageUrl = product.image.desktop;
  } else if (window.innerWidth >= 768){
    imageUrl = product.image.tablet;
  }else {
    imageUrl = product.image.mobile;
  }

  return (
    <div className='product_details'>
      <Link to="/" className="go-back-link">
        <p>Go Back</p>
      </Link>
      <div className='basicInfo'>
        <img src={imageUrl} alt={product.name} />
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
            {product.includes.map((include, index) => (
                <li key={index}>
                  <span>{include.quantity}x  </span>  {include.item}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="images">
        <div className="first__second__img">
          <div>
            <img src={product.gallery.first.mobile} alt="product.name" />
          </div>
          <div>
            <img src={product.gallery.second.mobile} alt="product.name" />
          </div>
        </div>
        <img className="third__img" src={product.gallery.third.mobile} alt="product.name" />
      </div>
      <div className='other_products'>
        <h3>You May Also Like</h3>
        <div className="others">
          <ul className='other_products_list'>
          {product.others.map((otherProduct) => (
            <li key={otherProduct.slug} className='other_product'>
              <img src={otherProduct.image.mobile} alt={otherProduct.name} />
              <h3>{otherProduct.name}</h3>
              <Link to={`/product/${otherProduct.slug}`}>
                <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="See Products" />
              </Link>
            </li>
          ))}
          </ul>
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
