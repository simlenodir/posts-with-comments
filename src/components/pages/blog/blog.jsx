import { useState } from "react";
import { Minmodal } from "../../modal";

export const Blog = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <h2>Blog Page</h2>
      <button
        onClick={setOpen.bind(null, true)}
        className="btn btn-outline-success"
      >
        open modal
      </button>
      {open && <Minmodal setModal={setOpen} modal={open} />}
    </div>
  );
};
