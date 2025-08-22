import "./RegisterConfirmationModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function RegisterConfirmationModal({ isOpen, onClose, onRegisterConfirmation, onAltAction }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      buttonText=""
      formAltActionNote="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onAltAction={onAltAction}
      contentClassName="modal__content_type_register_confirmation"
    >
    </ModalWithForm>
  );
}

export default RegisterConfirmationModal;