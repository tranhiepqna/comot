import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip
} from "mdbreact";
import Link from "next/link";
import "../css/Categories.css";

const EcommercePage = () => {
  return (
    <section className="text-center my-5 main">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Sản phẩm
      </h2>
      <MDBRow center>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              className="image"
              cascade
              src="../../static/images/loainuaky.webp"
              top
              alt="Bột ngũ cốc Cô Một 12 loại hạt 1 ký"
            />
            <MDBCardBody cascade className="text-center">
            <MDBCardTitle>
                <strong>
                  <a href="#!">Bột ngũ cốc 12 loại hạt</a>
                </strong>
              </MDBCardTitle>
              <a href="#!" className="text-muted">
                <h5>Loại 1 kg</h5>
              </a>
              <MDBCardText>
              Bột ngũ cốc dinh dưỡng 12 loại hạt Cô Một được làm từ các nguyên liệu sạch, không chứa chất bảo quản. Quá trình rang say tự nhiên không làm mất đi đặc tính hoá học của sản phẩm. Sản phẩm giúp bổ sung chất xơ, các loại vitamin như B1, B3, B5, E, sắt, canxi,…
              </MDBCardText>
              <MDBCardFooter className="px-1" transparent>
                <span className="float-left font-weight-bold"></span>
                <span className="float-right">
                  <MDBTooltip
                    placement="top"
                    tag="a"
                    component="i"
                    componentClass="fa fa-eye grey-text ml-3"
                    tooltipContent="Quick look"
                  >
                    <Link
                      prefetch
                      as={`/sanpham/bot-ngu-coc-12-loai-dau`}
                      href="/sanpham?bot-ngu-coc-12-loai-dau"
                    >
                      <a href="#!" className="font-weight-bold link">Chi tiết </a>
                    </Link>
                    <div>Tooltip on top</div>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              className="image"
              cascade
              src="../../static/images/loainuaky.webp"
              top
              alt="Bột ngũ cốc Cô Một 12 loại hạt 500 gram"
            />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle>
                <strong>
                  <a href="#!">Bột ngũ cốc 12 loại hạt</a>
                </strong>
              </MDBCardTitle>
              <a href="#!" className="text-muted">
                <h5>Loại 500 gram</h5>
              </a>
              <MDBCardText>
              Bột ngũ cốc dinh dưỡng 12 loại hạt Cô Một được làm từ các nguyên liệu sạch, không chứa chất bảo quản. Quá trình rang say tự nhiên không làm mất đi đặc tính hoá học của sản phẩm. Sản phẩm giúp bổ sung chất xơ, các loại vitamin như B1, B3, B5, E, sắt, canxi,…
              </MDBCardText>
              <MDBCardFooter className="px-1" transparent>
                <span className="float-left font-weight-bold"></span>
                <span className="float-right">
                  <MDBTooltip
                    placement="top"
                    tag="a"
                    component="i"
                    componentClass="fa fa-eye grey-text ml-3"
                    tooltipContent="Quick look"
                  >
                    <Link
                      prefetch
                      as={`/sanpham/bot-ngu-coc-12-loai-dau`}
                      href="/sanpham?bot-ngu-coc-12-loai-dau"
                    >
                      <a href="#!" className="font-weight-bold link">Chi tiết </a>
                    </Link>
                    <div>Tooltip on top</div>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default EcommercePage;
