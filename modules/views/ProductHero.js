import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon
} from "mdbreact";

import "../css/ProducHero.css"

class MinimalisticIntro extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <>
        <MDBView src={`../../static/images/background.webp`}>
          <MDBMask
            overlay="rgba(0, 0, 0, 0.7) rgba-black-strong"
            className="d-flex justify-content-center align-items-center gradient"
          >
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 className="text-uppercase font-weight-bold mb-0 amber-text title1 title3">
                    BỘT NGŨ CỐC
                  </h1>
                  <h1 className="text-uppercase font-weight-bold mb-0 amber-text title2 title3">
                    CÔ MỘt
                  </h1>
                  <hr className="hr-light my-4" />
                  <h5 className="mb-4 white-text font-italic">
                    <strong>Thơm ngon & Bổ dưỡng</strong>
                  </h5>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default MinimalisticIntro;
