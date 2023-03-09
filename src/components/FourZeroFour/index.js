import React from "react";
import errorImg from "../../assets/images/404.png";

export default function FourZeroFour() {
  // const navigate = useNavigate();
  return (
    <section className="error-page text-center py-120 rpy-100">
      <div className="container">
        <div className="error-content">
          <img src={errorImg} alt="404 Error" />
          <h2>Oops! We couldn't find that page.</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <a
            href="/"
            // onClick={(e) => {
            //   e.preventDefault();
            //   navigate(-1);
            // }}
            className="theme-btn mt-30"
          >
            Go Back
          </a>
        </div>
      </div>
    </section>
  );
}
