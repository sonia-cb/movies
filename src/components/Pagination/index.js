// Pagination.js

import React from 'react';
import './styles.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='pagination'>
        <button
            className='button'
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
        >
            Prev
        </button>
        {pageNumbers.map((number) => (
            <button
                key={number}
                className={`${currentPage === number ? 'activeButton' : 'button'}`}
                onClick={() => onPageChange(number)}
            >
            {number}
            </button>
        ))}
        <button
            className='button'
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
        >
        Next
      </button>
    </div>
  );
};



export default Pagination;
