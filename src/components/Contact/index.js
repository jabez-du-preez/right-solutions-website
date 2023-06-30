import { Box, Button, Chip } from "@mui/material";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import background from "../../assets/images/banners/contact.jpg";

const emailAddress = process.env.REACT_APP_EMAIL_ADDRESS;
const siteKey = process.env.REACT_APP_SITE_KEY;

export default function Contact() {
  const [email, setEmail] = useState({});
  const [emailSent, setEmailSent] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const form = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const emailConfig = {
      SecureToken: "136931ce-bff1-476a-b1d0-d60075438b9a",
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
            setCaptcha(false);
            setEmail({});
          }, 3000);
        }
      });
    }
  };

  const onChange = (value) => {
    if (value !== null) {
      setCaptcha(true);
    }
  };

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
                <p>We're here to help. Contact us now!</p>
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
                          sx={{
                            display: "flex",
                            flexDirection: {
                              xs: "column",
                              sm: "column",
                              md: "row",
                              lg: "row",
                              xl: "row",
                            },
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
                          <Box>
                            {emailSent && (
                              <Chip
                                sx={{ mr: 1 }}
                                label="Email sent!"
                                color="success"
                              />
                            )}
                            <Button
                              variant="contained"
                              size="large"
                              sx={{
                                ml: 2,
                                fontFamily: "Montserrat",
                                fontSize: {
                                  xs: "1rem",
                                  sm: "1rem",
                                  md: "1.3rem",
                                  lg: "1.3rem",
                                  xl: "1.3rem",
                                },
                                marginTop: {
                                  xs: "1rem",
                                  sm: "1rem",
                                  md: "0",
                                  lg: "0",
                                  xl: "0",
                                },
                                borderRadius: "10px",
                                textTransform: "none",
                                backgroundColor: "#3bb3eb",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                  color: "#3bb3eb",
                                  backgroundColor: "black",
                                },
                              }}
                              disabled={!captcha}
                              type="submit"
                            >
                              Send Message
                            </Button>
                          </Box>
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
