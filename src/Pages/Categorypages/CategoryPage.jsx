// import React from 'react';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import data from '../../../resources/data.json';
// import './CategoryPage.css';
// import About from "../../components/About/About";
// import Category from "../../components/categories/Category";

// const CategoryPage = ({ match }) => {
//     console.log("Props received by CategoryPage:", match); 
//   const { categoryName } = match.params;

//   // Filter products based on the provided category name
//   const categoryData = data.filter((product) => product.category === categoryName);

//   // Separate new products from the rest
//   const newProducts = categoryData.filter(product => product.new);
//   const otherProducts = categoryData.filter(product => !product.new);

//   return (
//     <div className='product__container'>
//       <h2 className='products__category'>{categoryName}</h2>
//       <div className="product__list">
//         {/* Render new products first */}
//         {newProducts.map((product, index) => (
//           <ProductCard key={product.id} product={product} isReverse={index % 2 !== 0} />
//         ))}
//         {/* Render other products */}
//         {otherProducts.map((product, index) => (
//           <ProductCard key={product.id} product={product} isReverse={index % 2 !== 0} />
//         ))}
//       </div>
//       <Category />
//       <About />
//     </div>
//   );
// };

// export default CategoryPage;
