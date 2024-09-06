import React from "react";
import { useNavigate } from "react-router-dom";


interface ProductProps{
    image: string;
    productname: string;
    availability: string;
    price: number;
    description: string;
}

const ProductCard = ({ image, productname, availability, price, description }: ProductProps) => {
  const navigate = useNavigate();
    return (
      <div style={styles.card}>
        <img src={image} alt={productname} style={styles.image} />
        <h2 style={styles.name}>{productname}</h2>
        <p style={styles.availability}>{availability}</p>
        <p style={styles.price}>${price}</p>
        <p style={styles.description}>{description}</p>
        <button style={styles.button} onClick={() => navigate('/login')}>Buy Now</button>
      </div>
    );
  };
  

  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      textAlign: 'center' as 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px 8px 0 0',
    },
    name: {
      fontSize: '1.5em',
      margin: '16px 0 8px 0',
    },
    availability: {
      fontSize: '1em',
      color: 'green',
    },
    price: {
        fontSize: '1.2em',
        color: '#666',
    },
    description: {
      fontSize: '1em',
      color: '#555',
    },
    button: {
        marginTop: '16px',
        padding: '10px 20px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',   
    },
  };
  

export default ProductCard;