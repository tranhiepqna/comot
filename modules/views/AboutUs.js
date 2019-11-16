import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBIcon,
  MDBBtn
} from "mdbreact";

import "../css/Categories.css";

const TeamPage = () => {
  return (
    <section className="text-center my-5 main">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">Về chúng tôi</h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">Maria Kate</h4>
            <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
            <h6 className="text-uppercase grey-text mb-3">
              Front-end Developer
            </h6>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              Sarah Melyah
            </h4>
            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </section>
  );
};

export default TeamPage;
