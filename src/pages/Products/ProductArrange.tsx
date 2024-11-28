const ProductArrange = ({
  handleSortByPrice,
  handleLimit,
}: {
  handleSortByPrice: (value: string) => void;
  handleLimit: (value: string) => void;
}) => {
  return (
    <div className="flex items-center gap-1">
      <select
        className="select select-info w-full max-w-xs"
        onChange={(e) => handleSortByPrice(e.target.value)}
      >
        <option disabled>Sort by Price</option>
        <option value="all">All</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
      <div>
        <select
          className="select select-info max-w-[300px]"
          onChange={(e) => handleLimit(e.target.value)}
        >
          <option disabled>Limit Product</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
};

export default ProductArrange;
