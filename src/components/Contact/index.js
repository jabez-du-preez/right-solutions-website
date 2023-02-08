import React from "react";
import background from "../../assets/images/banners/contact.jpg";

// import background from "../../assets/images/banners/contact/jpg";

export default function Contact() {
  return (
    <>
      <section className="contact-page py-50 rpy-100">
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
                <p>
                  Avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter.
                </p>
                <form
                  id="comment-form"
                  className="comment-form mt-35"
                  name="comment-form"
                  action="#"
                  method="post"
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
                          name="full-name"
                          className="form-control"
                          value=""
                          placeholder="Your Full Name"
                          required=""
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
                          name="email"
                          className="form-control"
                          value=""
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="comments">
                          <i className="fas fa-pencil-alt"></i>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-control"
                          rows="4"
                          placeholder="Write Message"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Message
                        </button>
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
