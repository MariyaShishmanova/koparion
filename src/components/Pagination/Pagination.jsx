import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`btn-pagination ${currentPage === 1 ? 'disabled' : ''}`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {Array.from({ length: totalPages }, (_, index) =>
        <button key={index} onClick={() => handlePageChange(index + 1)} className={`btn-pagination ${currentPage === index + 1 ? 'active' : ''}`}>
          {index + 1}
        </button>
      )}

      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`btn-pagination ${currentPage === totalPages ? 'disabled' : ''}`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
