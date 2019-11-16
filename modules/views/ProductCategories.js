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
        Danh mục sản phẩm
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow center>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src="../../static/images/special_product.jpg"
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Bột ngũ cốc</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Đặc biệt</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
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
                      as={`/product/special_product`}
                      href="/product?special_product"
                    >
                      <a>Chi tiết </a>
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
              cascade
              src="../../static/images/special_product.jpg"
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="text-muted">
                <h5>Bột ngũ cốc</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href="#!">Loại thường</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing minima
                veniam elit.
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
                      as={`/product/normal_product`}
                      href="/product?normal_product"
                    >
                      <a>Chi tiết </a>
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
