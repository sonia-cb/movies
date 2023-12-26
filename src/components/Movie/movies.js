// MovieCard.js

import React from 'react';
import { MovieCardImg } from '../../assets/images';

const MovieCard = ({ item }) => {
  const { title, subtitle} = item;

  return (
    <div style={styles.card}>
      <img src={MovieCardImg} alt={title} style={styles.image} />
      <div style={styles.cardContent}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.releaseDate}>{subtitle}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '200px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    marginBottom: '20px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '10px',
  },
  title: {
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  releaseDate: {
    margin: '5px 0',
    fontSize: '14px',
    color: '#555',
  },
  genre: {
    margin: '5px 0',
    fontSize: '14px',
    color: '#555',
  },
};

export default MovieCard;
