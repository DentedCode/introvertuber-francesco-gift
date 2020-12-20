import ReactPaginate from 'react-paginate'

const PaginationComp = ({ totalPages = 0, handleNextClick, currentPage }) => {
  return (
    <ReactPaginate
      previousLabel={'<<'}
      nextLabel={'>>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handleNextClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  )
}

export default PaginationComp
