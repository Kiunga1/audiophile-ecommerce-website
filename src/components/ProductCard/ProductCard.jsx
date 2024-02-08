/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import './ProductCard.css'
import Button from '../Button/Button'

const ProductCard = ({ product }) => {

  let imageUrl;
  if (window.innerWidth >= 768) {
    imageUrl = product.image.desktop;
  // } else if (window.innerWidth >= 76){
  //   imageUrl = product.image.tablet;
  }else {
    imageUrl = product.image.mobile;
  }


  return (
    <div className="product__card">
      <img src={imageUrl} alt={product.name} />
      <div className='product__detail'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link to={`/product/${product.slug}`}>
          <Button backgroundColor="#D87D4A" hoverColor="#FBAF85"/>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
