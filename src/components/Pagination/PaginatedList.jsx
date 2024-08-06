import Pagination from './Pagination';
import usePagination from '../../utils/usePagination';

const PaginatedList = ({ items, renderItems, itemsPerPage }) => {
  const { currentPage, totalPages, currentItems, handlePageChange } = usePagination(items, itemsPerPage);

  return (
    <>{renderItems(currentItems)}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}</>
      
  );
};

export default PaginatedList;
