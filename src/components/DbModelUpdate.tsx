import { forwardRef, useEffect, useState } from "react";
import { getData } from "../requestApi";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

const contactForm = z.object({
  info: z.object({
    title: z.string().trim().min(1, "Please fill in title"),
    category: z.string().trim().min(1, "Please fill in category"),
    stock: z.number().min(1, "Please enter quantity"),
    price: z.number().min(1, "Please enter price"),
  }),
});

const DbModelUpdate = forwardRef<HTMLDialogElement, DbModelUpdateProps>(
  ({ name, id, onUpdate }, ref) => {
    const [product, setProduct] = useState({
      title: "",
      category: "",
      price: 0,
      stock: 0,
    });

    useEffect(() => {
      (async () => {
        if (id) {
          const data = await getData("products", id);
          setProduct(data);
        }
      })();
    }, [id]);

    const methods = useForm({
      resolver: zodResolver(contactForm),
      defaultValues: {
        info: product,
      },
    });
    useEffect(() => {
      if (product) {
        methods.reset({
          info: product,
        });
      }
    }, [product, methods]);

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
                handleGetData(data.info);
              })}
            >
              <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                <input
                  type="text"
                  className="text-white grow w-full placeholder:text-white opacity-70"
                  {...methods.register("info.title")}
                />
              </label>
              <span className="text-red-500 text-sm">
                {methods.formState.errors.info?.title?.message}
              </span>
              <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                <input
                  type="text"
                  className="text-white grow w-full placeholder:text-white opacity-70"
                  {...methods.register("info.category")}
                />
              </label>
              <span className="text-red-500 text-sm">
                {methods.formState.errors.info?.category?.message}
              </span>
              <div className="flex items-center gap-4">
                <div>
                  <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                    <input
                      type="text"
                      className="text-white grow w-full placeholder:text-white opacity-70"
                      {...methods.register("info.stock", {
                        valueAsNumber: true,
                      })}
                    />
                  </label>
                  <span className="text-red-500 text-sm">
                    {methods.formState.errors.info?.stock?.message}
                  </span>
                </div>
                <div>
                  <label className="input input-bordered flex items-center gap-2 h-10  bg-second input-info">
                    <input
                      type="text"
                      className="text-white grow w-full placeholder:text-white opacity-70"
                      {...methods.register("info.price", {
                        valueAsNumber: true,
                      })}
                    />
                  </label>
                  <span className="text-red-500 text-sm">
                    {methods.formState.errors.info?.stock?.message}
                  </span>
                </div>
              </div>
              <div className="flex items-center  gap-4">
                <button className="btn btn-primary">Update Product</button>
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
