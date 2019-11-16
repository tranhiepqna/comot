import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../css/AppFooter.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 elegant-color">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h6 className="title">Bột ngũ cốc Cô Một</h6>
            <p>
              Tổ 7, thôn Đồng Dương, xã Bình Định Bắc, huyện Thăng Bình, tỉnh
              Quảng Nam
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Liên Hệ</h5>
            <ul className="list-unstyled ">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="fb-ic fb"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:toid@example.com?Subject=subject here&Body=bodytext"
                  className="gplus-ic"
                >
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
              </li>
              <li>
                <a className="ins-ic">
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com">comot.vn</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
