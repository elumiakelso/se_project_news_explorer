import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function RegisterModal({
  isOpen,
  onClose,
  onRegisterModalSubmit,
  onAltAction,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, [isOpen]);

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegisterModalSubmit({ email, password, name });
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      formAltActionNote="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onAltAction={onAltAction}
      contentClassName="modal__content_type_register"
    >
      <label className="modal__label">
        Email{" "}
        <input
          className="modal__input"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
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
          placeholder="Enter password"
          required
        />
      </label>
      <label className="modal__label">
        Username{" "}
        <input
          className="modal__input"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your username"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
