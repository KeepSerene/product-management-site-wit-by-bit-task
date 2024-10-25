import "./Modal.css";

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <section
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="modal-title">{title}</h2>
        {children}
      </section>
    </div>
  );
}

export default Modal;
