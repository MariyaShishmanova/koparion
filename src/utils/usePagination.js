import { useState, useEffect } from 'react';

const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [currentPage]
  );

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange
  };
};

export default usePagination;
