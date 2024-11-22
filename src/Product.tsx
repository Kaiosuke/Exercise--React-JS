import { dataList } from "./dataList";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <>
      <ul className="">
        {dataList.map((data, index) => (
          <ProductList key={index} data={data} />
        ))}
      </ul>
    </>
  );
};

export default Product;
