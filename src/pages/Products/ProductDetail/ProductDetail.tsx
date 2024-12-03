import { getProduct } from "@/api/requestApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getProduct("products", Number(id));
      setProduct(data);
    })();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { thumbnail, title, price, description } = product;

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-4">
        <figure>
          {loading && <div className="skeleton h-[300px] w-[300px]"></div>}
          <img
            src={thumbnail}
            alt={title}
            onLoad={handleImageLoad}
            className={`${loading ? "hidden" : "block"}`}
          />
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
