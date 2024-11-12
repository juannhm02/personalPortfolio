// src/components/Contact.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;

    // Validación personalizada: verificar que todos los campos estén completos
    if (
      !form.from_name.value ||
      !form.reply_to.value ||
      !form.subject.value ||
      !form.message.value
    ) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    } else {
      setErrorMessage(""); // Limpiar mensaje de error si todos los campos están completos
    }

    // Usar EmailJS para enviar el correo
    emailjs
      .sendForm(
        "service_qv0u4r2", // Reemplaza con tu Service ID
        "template_tx6z67o", // Reemplaza con tu Template ID
        form,
        "H5ED4DZHm-qg4PfmS" // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          setShowSuccessModal(true); // Muestra el modal de éxito
          setShowForm(false); // Oculta el formulario
          form.reset(); // Reinicia el formulario
        },
        (error) => {
          console.log("Error al enviar correo:", error.text);
          setErrorMessage(
            "Hubo un error al enviar el mensaje. Intenta de nuevo."
          );
        }
      );
  };

  return (
    <section id="contact" className="contact-section fade-in">
      <h2>Contacto</h2>
      <div className="contact-card">
        <button className="mail" onClick={handleButtonClick}>
          {/* Botón para abrir el formulario */}
          <a href="mailto:juanhmohedano123@gmail.com" rel="noopener noreferrer">
            <svg
              className="lucide lucide-mail"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect rx="2" y="4" x="2" height="16" width="20"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </button>
        <div className="profile-pic"></div>
        <div className="bottom">
          <div className="content">
            <span className="name">Juan Higuera</span>
          </div>
          <div className="bottom-bottom">
            {/* Redes sociales */}
            <div className="social-links-container">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/juan-higuera-mohedano-189934232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height="24"
                  width="24"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.14-341C24.18 107 0 82.8 0 52.8 0 22.32 24.58 0 54.84 0c30.24 0 54.86 22.32 54.86 52.8 0 30-24.62 54.2-54.86 54.2zM447.8 448h-92.68V302.4c0-34.7-12.43-58.4-43.46-58.4-23.64 0-37.74 15.9-43.96 31.2-2.26 5.6-2.84 13.4-2.84 21.2V448H172.4V148.9h92.88v40.8c12.3-18.9 34.3-45.6 83.5-45.6 61.04 0 106.1 39.7 106.1 125.1V448z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/juannhm02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 496 512"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/juaaanhm_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height="24"
                  width="24"
                >
                  <path d="M224.1 141c-63.6 0-114.8 51.2-114.8 114.8s51.2 114.8 114.8 114.8 114.8-51.2 114.8-114.8S287.6 141 224.1 141zm0 186.4c-39.5 0-71.6-32.1-71.6-71.6s32.1-71.6 71.6-71.6 71.6 32.1 71.6 71.6-32.1 71.6-71.6 71.6zm146.4-194.7c0 14.9-12 27-27 27s-27-12-27-27 12-27 27-27 27 12.1 27 27zm76.1 27.2c-.6-30.2-5.4-56.8-30.2-81.6s-51.4-29.6-81.6-30.2C284.6 48 263.5 48 224 48s-60.6 0-86.8.6c-30.2.6-56.8 5.4-81.6 30.2s-29.6 51.4-30.2 81.6C24 195.4 24 216.5 24 256s0 60.6.6 86.8c.6 30.2 5.4 56.8 30.2 81.6s51.4 29.6 81.6 30.2C163.4 464 184.5 464 224 464s60.6 0 86.8-.6c30.2-.6 56.8-5.4 81.6-30.2s29.6-51.4 30.2-81.6c.6-26.2.6-47.3.6-86.8s0-60.6-.6-86.8zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.1 68.6 190.9 71.2 224 71.2s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/juaaanhhm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  height="16"
                  width="16"
                >
                  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504s248-111.033,248-248S384.967,8,248,8ZM373.26,176.26,335.5,367.13c-4.67,21.68-18.4,27-37.33,16.92l-74.5-55.14-35.9,34.53c-4,4-7.41,7.41-15,7.41l5.48-77.78,141.85-128c6.16-5.47-.9-8.55-9.49-3.08L158.1,275.43l-77.17-24.22c-21.13-6.6-21.5-21.13,4.7-31.29L355.53,144.2C370.3,138.1,380.47,149.6,373.26,176.26Z" />
                </svg>
              </a>
            </div>
            <button className="button" onClick={handleButtonClick}>
              Contáctame
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="form-card1 slide-in-right">
          <div className="form-card2">
            <form className="form" onSubmit={handleSendMessage}>
              <p className="form-heading">¿Puedo ayudarte?</p>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="form-field">
                <input
                  required
                  placeholder="Nombre completo"
                  className="input-field"
                  type="text"
                  name="from_name"
                />
              </div>
              <div className="form-field">
                <input
                  required
                  placeholder="Email"
                  className="input-field"
                  type="email"
                  name="reply_to"
                />
              </div>
              <div className="form-field">
                <input
                  required
                  placeholder="Motivo"
                  className="input-field"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="form-field">
                <textarea
                  required
                  placeholder="Mensaje"
                  cols="30"
                  rows="3"
                  className="input-field"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="sendMessage-btn">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <div className="success-modal">
          <div className="modal-content">
            <h3>¡Mensaje enviado con éxito!</h3>
            <p>Gracias por ponerte en contacto. Te respondo muy pronto.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="close-modal-btn"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
