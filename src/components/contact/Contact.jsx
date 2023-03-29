import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputText = useRef();

  const onSend = () => {
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputText.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9ibtap",
        "template_asbrub7",
        form.current,
        "OeQvuWjJmE21Mn45M"
      )
      .then(
        (result) => {
          alert(result.text + "- Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section id="contact">
        <h1 className="contact_title">Contact</h1>
        <form ref={form} onSubmit={sendEmail} className="form">
          <label>
            Name
            <input
              ref={inputName}
              className="form_input"
              type="text"
              name="user_name"
            />
          </label>
          <label>
            Email
            <input
              ref={inputEmail}
              className="form_input"
              type="email"
              name="user_email"
            />
          </label>
          <label>
            Message
            <textarea ref={inputText} className="form_input" name="message" />
          </label>
          <div className="send_button">
            <input
              type="submit"
              value="Send"
              onClick={() => {
                onSend();
              }}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
