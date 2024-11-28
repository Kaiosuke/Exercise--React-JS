import { forwardRef } from "react";

interface DbModelDeleteProps {
  name: string;
  onDelete: () => void;
}

const DbModelDelete = forwardRef<HTMLDialogElement, DbModelDeleteProps>(
  ({ name, onDelete }, ref) => {
    return (
      <dialog ref={ref} className="modal text-white">
        <div className="modal-box max-w-2xl bg-second">
          <h3 className="font-bold text-2xl">Delete {name}</h3>
          <p className="py-4">Are you sure you want to delete?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error text-white" onClick={onDelete}>
                Delete
              </button>
              <button className="btn ml-2">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }
);

export default DbModelDelete;
