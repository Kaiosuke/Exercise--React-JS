const ProductPagination = ({
  renderPagination,
  currentPage,
  handlePage,
}: {
  renderPagination: () => (number | string)[];
  currentPage: number | string;
  handlePage: (page: number | string) => void;
}) => {
  return (
    <div className="flex justify-center mt-4">
      <div className="join m-auto">
        {renderPagination().map((page, index) => (
          <button
            key={index}
            className={`join-item btn ${page === currentPage && "btn-active"}`}
            onClick={() => page !== "..." && handlePage(page)}
            disabled={page === "..."}
          >
            {page === "..." ? "..." : Number(page) + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPagination;
