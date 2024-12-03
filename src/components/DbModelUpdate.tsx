import { forwardRef, useEffect, useState } from "react";
import { getData } from "../api/requestApi";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAppContext from "../hooks/useAppContext";
import { productsForm } from "../reactHookForm";

interface DataProps {
  title: string;
  category: string;
  price: number;
  stock: number;
}
interface DbModelUpdateProps {
  onUpdate: any;
  id: number | null;
  name: string;
}

const DbModelUpdate = forwardRef<HTMLDialogElement, DbModelUpdateProps>(
  ({ name, id, onUpdate }, ref) => {
    const [product, setProduct] = useState({
      title: "",
      category: "",
      price: 0,
      stock: 0,
    });

    const methods = useForm({
      resolver: zodResolver(productsForm),
      defaultValues: {
        title: "",
        category: "",
        price: 0,
        stock: 0,
      },
    });

    useEffect(() => {
      (async () => {
        if (id) {
          const data = await getData("products", id);
          setProduct(data);
          methods.reset(data);
        }
      })();
    }, [id]);

    const handleClose = () => {
      if (ref && "current" in ref && ref.current) {
        ref.current.close();
      }
    };

    const handleGetData = (data: DataProps) => {
      const newData = { ...product, ...data };
      onUpdate(newData);
      handleClose();
    };

    return (
      <dialog ref={ref} className="modal text-white">
        <div className="modal-box bg-second">
          <h3 className="font-bold text-2xl">Add {name}</h3>
          <FormProvider {...methods}>
            <form
              method="dialog"
              className="mt-4 flex flex-col gap-4"
              onSubmit={methods.handleSubmit((data) => {
                handleGetData(data);
              })}
            >
              <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                <input
                  type="text"
                  className="text-white grow w-full placeholder:text-white opacity-70"
                  placeholder="Product title"
                  {...methods.register("title")}
                />
              </label>
              <span className="text-red-500 text-sm">
                {methods.formState.errors.title?.message}
              </span>
              <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                <input
                  type="text"
                  className="text-white grow w-full placeholder:text-white opacity-70"
                  placeholder="Category"
                  {...methods.register("category")}
                />
              </label>
              <span className="text-red-500 text-sm">
                {methods.formState.errors.category?.message}
              </span>
              <div className="flex gap-4">
                <div>
                  <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                    <input
                      type="text"
                      className="text-white grow w-full placeholder:text-white opacity-70"
                      placeholder="quantity"
                      {...methods.register("stock", {
                        valueAsNumber: true,
                      })}
                    />
                  </label>
                  <span className="text-red-500 text-sm">
                    {methods.formState.errors.stock?.message}
                  </span>
                </div>
                <div>
                  <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                    <input
                      type="text"
                      className="text-white grow w-full placeholder:text-white opacity-70"
                      placeholder="Price"
                      {...methods.register("price", {
                        valueAsNumber: true,
                      })}
                    />
                  </label>
                  <span className="text-red-500 text-sm">
                    {methods.formState.errors.price?.message}
                  </span>
                </div>
              </div>
              <div className="flex items-center  gap-4">
                <button className="btn btn-primary">Update {name}</button>
                <div className="btn" onClick={() => handleClose()}>
                  close
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </dialog>
    );
  }
);

export default DbModelUpdate;
