import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function LoginModal({ isOpen, onClose, onLoginModalSubmit, onAltAction }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLoginModalSubmit({ email, password });
  };

  useEffect(() => {
  function handleEscape(evt) {
    if ((evt.key === "Escape" || evt.keyCode === 27) && isOpen) {
      onClose();
    }
  }
  if (isOpen) {
    document.addEventListener("keydown", handleEscape);
  }
  return () => {
    document.removeEventListener("keydown", handleEscape);
  };
}, [isOpen, onClose]);

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      formAltActionNote="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onAltAction={onAltAction}
      contentClassName="modal__content_type_login"
    >
      <label className="modal__label">
        Email{" "}
        <input
          className="modal__input"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />
      </label>
      <label className="modal__label">
        Password{" "}
        <input
          className="modal__input"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;