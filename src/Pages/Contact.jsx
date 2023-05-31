import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_20230529",
        "template_20230529",
        form.current,
        "8MqHyIRSa1VQKQLE8"
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="lg:ml-[175px] my-40">
      <form className="flexV" ref={form} onSubmit={sendEmail}>
        <h1 className="contactTitle">Contactez moi</h1>
        <input
          className="text-primary mb-2 p-1 rounded-sm"
          type="text"
          placeholder="Name"
          name="user_name"
          required
        />
        <input
          className="text-primary mb-2 p-1 rounded-sm"
          type="email"
          placeholder="Email address"
          name="user_email"
          required
        />

        <textarea
          className="text-primary mb-2 p-1 rounded-sm"
          rows="7"
          name="message"
          type="text"
          placeholder="Message"
          required
        ></textarea>

        <input
          className="contactButton"
          type="submit"
          value="Submit"
          id="input-submit"
          required
        />
      </form>
    </div>
  );
}
export default Contact;
