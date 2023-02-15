import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

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
          console.log(result.text);
          console.log("success");
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
          <label>Name</label>
          <input className="form_input" type="text" name="user_name" />
          <label>Email</label>
          <input className="form_input" type="email" name="user_email" />
          <label>Message</label>
          <textarea className="form_input" name="message" />
          <div className="send_button">
            <input   type="submit" value="Send" />
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
