import { productsForm } from "@/reactHookForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface DbModelAddProps {
  name: string;
  onAdd: (data: any) => void;
}

interface FormDataProps {
  title: string;
  category: string;
  stock: number;
  price: number;
}

const DbModelAdd = forwardRef<HTMLDialogElement, DbModelAddProps>(
  ({ name, onAdd }, ref) => {
    const methods = useForm({
      resolver: zodResolver(productsForm),
      defaultValues: {
        title: "",
        category: "",
        stock: 0,
        price: 0,
      },
    });

    const handleClose = () => {
      if (ref && "current" in ref && ref.current) {
        ref.current.close();
      }
    };

    const handleGetData = (data: FormDataProps) => {
      onAdd(data);
      methods.reset();
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
