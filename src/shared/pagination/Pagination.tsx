import type { IPaginationProps } from "./IPaginationProps";
import "./Pagination.css";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: IPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${
            page === currentPage ? "active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </button>
    </div>
  );
}

export default Pagination;
