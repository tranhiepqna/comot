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
            <h6 className="title">Cơ sở sản xuất Bột ngũ cốc Cô Một</h6>
            <p className="h5-responsive">Địa chỉ: <span>
            Tổ 7, Thôn Đồng Dương, Xã Bình Định Bắc, Huyện Thăng Bình, Tỉnh
              Quảng Nam
            </span>
            </p>
            <p className="h5-responsive">
             Điện thoại: 0362007304
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Liên Hệ</h5>
            <ul className="list-unstyled ">
              <li>
                <a
                  href="https://www.facebook.com/comot.vn"
                  target="_blank"
                  rel="Truy cập vào trang của bột ngũ cốc Cô Một trên Facebook"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kd@comot.vn?Subject=subject here&Body=bodytext"
                  rel="Gửi email tới bột ngũ cốc Cô Một"
                >
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
              </li>
              <li>
                <a className="ins-ic"  rel="Truy cập vào Instagram của bột ngũ cốc Cô Một">
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
