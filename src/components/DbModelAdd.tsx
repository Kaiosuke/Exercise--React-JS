import { forwardRef, useState } from "react";

interface DbModelAddProps {
  name: string;
  onAdd: (arg0: any) => void;
}

const DbModelAdd = forwardRef<HTMLDialogElement, DbModelAddProps>(
  ({ name, onAdd }, ref) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const handleClose = () => {
      if (ref && "current" in ref && ref.current) {
        ref.current.close();
      }
    };

    const handleAdd = () => {
      const product = { title, category, stock, price };
      onAdd(product);
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
              <input
                type="text"
                className="text-white grow w-full placeholder:text-white opacity-70"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
              />
            </label>
            <div className="flex items-center gap-4">
              <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                <input
                  type="text"
                  className="text-white grow w-full placeholder:text-white opacity-70"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="quantity"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                <input
                  type="text"
                  className="text-white grow w-full placeholder:text-white opacity-70"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                />
              </label>
            </div>
            <div className="flex items-center  gap-4">
              <div className="btn btn-primary" onClick={() => handleAdd()}>
                Add Product
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

export default DbModelAdd;
