

const ProductDetails = () => {
  return (
    <div>
      ProductDetails

    </div>
  )
}

export default ProductDetails


// // src/components/ProductDetailPage.js

// import { useParams } from 'react-router-dom';
// import data from '../path/to/data.json';

// const ProductDetailPage = () => {
//   const { slug } = useParams();

//   // Find the product with the matching slug
//   const product = data.find((p) => p.slug === slug);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.image.desktop} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default ProductDetailPage;
