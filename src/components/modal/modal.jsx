import "./modal.css";
import { useTheme } from "../../hooks/theme";
export const Minmodal = ({
  title = "Title",
  body = "content",
  children,
  modal,
  setModal,
}) => {
  console.log(children);
  const [theme] = useTheme();
  const handleCloseModal = (evt) => {
    if (evt.target === evt.currentTarget || evt.keyCode === 27) {
      setModal(false);
    }
  };


  return (
    <div className={theme}>
      <div
        className={`modal_wrap ${theme}`}
        style={{ display: modal ? "flex" : "none" }}
        onClick={handleCloseModal}
      >
        <div className="modal__content">
          <div className="modal__header">
            <h3>{title}</h3>
            <button onClick={setModal.bind(null, false)} className="close">
              &times;
            </button>
          </div>
          <div className="modal__body">{children}</div>
          <div className="modal__footer">
            <p>Nimadir</p>
            <button className="close">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
