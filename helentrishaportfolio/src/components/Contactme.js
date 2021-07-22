import "./Contactme.css";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "helenndiaye.hn",
        e.target,
        "user_tiJzqT1DSJDfcaGluuKTG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function Clicked() {
    function confirmEmail(e) {
      e.preventDefault();
    }
    alert(
      "Yay! Your email was sent! i'll will get back to you as soon as possible!"
    );
  }

  return (
    <div>
      <div className="contact-container">
        <div className="form-page">
          <h1 className="contact-us">Say Hello </h1>
          <h2 className="contact-text">
            you are also a web developer that would love to collaborate in some
            side projects , you're passionate as i am in web developing and you
            want to connect with me. Please do not esitate, fill up the form !
            ill be glad to know you !
          </h2>
          <br></br>
          <form onSubmit={Contact} onSubmit={Clicked}>
            <div className="row pt-5 mx-auto">
              <div className="input-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="fill your fullname"
                  name="name"
                />
              </div>
              <div className="input-form">
                <input
                  type="phonenumber"
                  className="form-control"
                  placeholder="your phone number"
                  name="phonenumber"
                />
              </div>
              <div className="input-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="What's your email ?"
                  name="email"
                />
              </div>
              <div className="input-form">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Tell me everything..."
                  name="message"
                />
              </div>
              <div className="input-form">
                <button className="button-contact">
                  <span>Send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
