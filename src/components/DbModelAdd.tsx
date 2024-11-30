import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { z } from "zod";

interface DbModelAddProps {
  name: string;
  onAdd: (arg0: any) => void;
}

interface FormDataProps {
  title: string;
  category: string;
  stock: number;
  price: number;
}

const contactForm = z.object({
  info: z.object({
    title: z.string().trim().min(1, "Please fill in title"),
    category: z.string().trim().min(1, "Please fill in category"),
    stock: z.number().min(1, "Please enter quantity"),
    price: z.number().min(1, "Please enter price"),
  }),
});

const DbModelAdd = forwardRef<HTMLDialogElement, DbModelAddProps>(
  ({ name, onAdd }, ref) => {
    const methods = useForm({
      resolver: zodResolver(contactForm),
      defaultValues: {
        info: {
          title: "",
          category: "",
          stock: 0,
          price: 0,
        },
      },
    });

    const handleClose = () => {
      if (ref && "current" in ref && ref.current) {
        ref.current.close();
      }
    };

    const handleGetData = (data: FormDataProps) => {
      onAdd(data);
      methods.reset({
        info: {
          title: "",
          category: "",
          stock: 0,
          price: 0,
        },
      });
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
                  placeholder="Product title"
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
                  placeholder="Category"
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
                      placeholder="quantity"
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
                      placeholder="Price"
                      {...methods.register("info.price", {
                        valueAsNumber: true,
                      })}
                    />
                  </label>
                  <span className="text-red-500 text-sm">
                    {methods.formState.errors.info?.price?.message}
                  </span>
                </div>
              </div>
              <div className="flex items-center  gap-4">
                <button className="btn btn-primary">Add {name}</button>
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

export default DbModelAdd;
