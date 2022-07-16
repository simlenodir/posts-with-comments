import { useState } from "react";
import { Minmodal } from "../../modal";

export const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <h2>About Page</h2>
      <button
        onClick={setOpen.bind(null, true)}
        className="btn btn-outline-primary"
      >
        open modal
      </button>
      {open && (
        <Minmodal title="About" modal={open} setModal={setOpen}>
          <h3>Modal of about</h3>
        </Minmodal>
      )}
    </div>
  );
};
