import React from 'react'
import ProductCard from '../components/ProductCard'

const Product: React.FC = () => {
  
  const products = [
    {
      image: 'image/slide1.jpg',
      productname: 'Single Phase Meter',
      availability: 'Available',
      price: 1000,
      description: 'This is a meter.',
      
    },

    {
      image: 'image/slide2.jpg',
      productname: 'Three Phase Meter',
      availability: 'Currently out of stock',
      price: 1000,
      description: 'This is a meter.',
    }
  ]

  return (
    <div style = {{display:'flex', flexWrap:'wrap', gap:'16px'}}>
      {products.map((product, index) => (
        <ProductCard 
        key={index}
        image={product.image}
        productname={product.productname}
        availability={product.availability}
        price={product.price}
        description={product.description} 
        />
        ))}
    </div>
  );
}

export default Product;