import { Box, Chip } from "@mui/material";
import React, { useRef, useState } from "react";
import background from "../../assets/images/banners/contact.jpg";
// import background from "../../assets/images/banners/contact/jpg";

const emailAddress = process.env.REACT_APP_EMAIL_ADDRESS;

export default function Contact() {
  const [email, setEmail] = useState({});
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  // process.env.REACT_APP_EMAIL_ADDRESS = "info@woulfdigitalstudio.co.za";

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const emailConfig = {
    //   SecureToken: "ba30f2b1-34f4-4aad-9a4b-55a6fa4886c8",
    //   To: "info@woulfdigitalstudio.co.za",
    //   From: `${email.email}`,
    //   Subject: `${email.name} - Potential Client`,
    //   Body: `${email.message}`,
    // };

    // const emailConfig = {
    //   Host: "smtp.elasticemail.com",
    //   Username: "web.mail@woulfdigitalstudio.co.za",
    //   Password: "C8FD4B1F34C4829BCD0CBBE4462FC8DCF5F6",
    //   To: "info@woulfdigitalstudio.co.za",
    //   From: "info@woulfdigitalstudio.co.za",
    //   Subject: `${email.user_email} - Potential Client`,
    //   Body: `${email.message}`,
    // };

    const emailConfig = {
      SecureToken: "b986fcbf-f0dc-407c-ae7a-cdb930020ec4",
      To: emailAddress,
      From: emailAddress,
      Subject: `${email.user_email} - Potential Client`,
      Body: `${email.message}`,
    };

    if (window.Email) {
      window.Email.send(emailConfig).then((response) => {
        if (response === "OK") {
          setEmailSent(true);
          setTimeout(() => {
            setEmailSent(false);
            setEmail({});
          }, 2000);
        }
      });
    }
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_skyjkmw",
  //       "template_rdxpppd",
  //       form.current,
  //       "suMeD8d1WxMp63-OH"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setEmailSent(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         setEmailSent(false);
  //       }
  //     );
  // };

  return (
    <>
      <section
        style={{ backgroundColor: "white" }}
        className="contact-page pt-60 py-10 rpy-100 pb-75"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="contact-form-left bgs-cover h-100 wow fadeInLeft delay-0-2s"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                <h2>Leave A Message</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form ml-40 rml-0 rmt-55 wow fadeInRight delay-0-2s">
                <h3 className="comment-title mb-35">Contact Us Today</h3>
                <p>We're here to help, always. Contact us now!</p>
                <form
                  ref={form}
                  id="email-form"
                  className="comment-form mt-35"
                  name="email-form"
                  // action="#"
                  method="post"
                  onSubmit={onSubmitHandler}
                >
                  <div className="row clearfix justify-content-center">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="full-name">
                          <i className="far fa-user"></i>
                        </label>
                        <input
                          type="text"
                          id="full-name"
                          name="user_name"
                          onChange={onChangeHandler}
                          className="form-control"
                          value={email.user_name || ""}
                          placeholder="Your Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope"></i>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          onChange={onChangeHandler}
                          className="form-control"
                          value={email.user_email || ""}
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="fas fa-pencil-alt"></i>
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows="4"
                          value={email.message || ""}
                          onChange={onChangeHandler}
                          placeholder="Write Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <Box
                          component="div"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <button type="submit" className="theme-btn">
                            Send Message
                          </button>
                          {emailSent && (
                            <Chip
                              sx={{ ml: 3 }}
                              label="Email sent!"
                              color="success"
                            />
                            // <Typography
                            //   variant="h6"
                            //   sx={{
                            //     ml: 3,
                            //     fontFamily: "Montserrat",
                            //     fontWeight: 500,
                            //     color: "#3bb3eb",
                            //   }}
                            // >
                            //   Email sent!
                            // </Typography>
                          )}
                        </Box>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
