import { forwardRef, useEffect, useState } from "react";
import { getData } from "../requestApi";

// interface ProductProps {
//   id: number;
//   title: string;
//   category: string;
//   price: number | string;
//   stock: number | string;
// }

interface DbModelUpdateProps {
  onUpdate: any;
  id: number | null;
  name: string;
}

const DbModelUpdate = forwardRef<HTMLDialogElement, DbModelUpdateProps>(
  ({ name, id, onUpdate }, ref) => {
    const [product, setProduct] = useState({
      id: 0,
      title: "",
      category: "",
      price: "",
      stock: "",
    });

    useEffect(() => {
      (async () => {
        if (id) {
          const data = await getData("products", id);
          setProduct(data);
        }
      })();
    }, [id]);

    const handleClose = () => {
      if (ref && "current" in ref && ref.current) {
        ref.current.close();
      }
    };

    const handleUpdate = () => {
      onUpdate(product);
      handleClose();
    };

    return (
      <dialog ref={ref} className="modal text-white">
        <div className="modal-box bg-second">
          <h3 className="font-bold text-2xl">Add {name}</h3>
          <form method="dialog" className="mt-4 flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
              <input
                type="text"
                className="text-white grow w-full placeholder:text-white opacity-70"
                value={product.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
              <input
                type="text"
                className="text-white grow w-full placeholder:text-white opacity-70"
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              />
            </label>
            <div className="flex items-center gap-4">
              <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                <input
                  type="text"
                  className="text-white grow w-full placeholder:text-white opacity-70"
                  value={product.stock}
                  onChange={(e) =>
                    setProduct({ ...product, stock: e.target.value })
                  }
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                <input
                  type="text"
                  className="text-white grow w-full placeholder:text-white opacity-70"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="flex items-center  gap-4">
              <div className="btn btn-primary" onClick={() => handleUpdate()}>
                Update Product
              </div>
              <div className="btn" onClick={() => handleClose()}>
                close
              </div>
            </div>
          </form>
        </div>
      </dialog>
    );
  }
);

export default DbModelUpdate;
