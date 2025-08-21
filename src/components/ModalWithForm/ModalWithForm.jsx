import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  formAltActionNote,
  onAltAction,
  isOpen,
  onClose,
  onSubmit,
  contentClassName,
  submitButtonClassName,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={(evt) => {
        if (evt.target === evt.currentTarget) onClose();
      }}
    >
      <div
        className={`modal__content ${contentClassName ? contentClassName : ""}`}
      >
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button"
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__button-container">
            <div>
              <button
                type="submit"
                className={`modal__submit ${
                  submitButtonClassName ? submitButtonClassName : ""
                }`}
              >
                {buttonText}
              </button>
            </div>
            <div className="modal__alt-action-row">
              <span className="modal__alt-action-text">or </span>
              <button
                type="button"
                className="modal__alt-action-button"
                onClick={onAltAction}
              >
                {formAltActionNote}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
