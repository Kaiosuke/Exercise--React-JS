import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../api/requestApi";

interface Product {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await getProduct("products", Number(id));
      console.log(data);
      setProduct(data);
    })();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { thumbnail, title, price, description } = product;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <span className="font-bold">{price}</span>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
