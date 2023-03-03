import { Container } from "@mui/material";
import React from "react";
import CustomDivider from "../../helpers/CustomDivider";

export default function Solutions() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: 3,
        }}
      >
        <CustomDivider />
        <div className="section-title text-center mb-35">
          <h2 className="color-blue fw-500 text-capitalize">
            our managed backup solution includes
          </h2>
        </div>

        <div className="container mt-50">
          <div className="row">
            <div className="col-sm-4 col-md-12 col-lg-6 ">
              <div className="justify-content-center display-flex space-around flex-wrap">
                <div
                  className={`feature-item-two lift-on-hover border-radius bg-white-custom padding-auto wow fadeInUp delay-0-2s `}
                >
                  <div className="card-icon bg-blue mb-20">
                    <i className="fa-solid fa-gears"></i>
                  </div>
                  <h4 className="text-capitalize color-black">
                    customized backup plans
                  </h4>
                  <p className="color-black">
                    We'll work with you to develop a backup plan that meets the
                    unique needs of your organization, taking into account
                    factors such as the type of data being backed up, the
                    frequency of backups, and the required recovery time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-12 col-lg-6 justify-content-center display-flex space-around flex-wrap">
              <div
                className={`feature-item-two lift-on-hover border-radius bg-white-custom  padding-auto wow fadeInUp delay-0-2s `}
              >
                <div className="card-icon bg-green mb-20">
                  <i className="fa-solid fa-robot"></i>
                </div>
                <h4 className="text-capitalize color-black">
                  automatic backups
                </h4>
                <p className="color-black">
                  Our service includes automatic backup capabilities, ensuring
                  that your data is regularly backed up without requiring any
                  manual intervention.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 justify-content-center display-flex space-around flex-wrap">
              <div
                className={`feature-item-two lift-on-hover border-radius bg-white-custom padding-auto wow fadeInUp delay-0-2s `}
              >
                <div className="card-icon bg-red mb-20">
                  <i className="fa-solid fa-user-secret"></i>
                </div>
                <h4 className="text-capitalize color-black">secure storage</h4>
                <p className="color-black">
                  Your data will be stored in secure, offsite locations,
                  protected by state-of-the-art security measures.
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-md-12 col-lg-6">
              <div className="justify-content-center display-flex space-around flex-wrap">
                <div
                  className={`feature-item-two lift-on-hover border-radius bg-white-custom padding-auto wow fadeInUp delay-0-2s `}
                >
                  <div className="card-icon bg-yellow mb-20">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h4 className="text-capitalize color-black">
                    24/7 monitoring and support
                  </h4>
                  <p className="color-black">
                    Our team of IT professionals is available around the clock
                    to monitor your backup systems and provide support as
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
