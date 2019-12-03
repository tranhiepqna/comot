import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView,
  MDBCardBody
} from "mdbreact";
import '../css/AboutUs.css';

class CarouselPage extends Component {
  render() {
    return (
        <section className="text-center my-5 main">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold">Hoạt động</h2>
      <MDBContainer className="container1">
        <MDBRow>
          <MDBCol lg="6">
            <MDBView waves>
              <img src="../../static/images/hoi_cho_hoi_an.webp" className="img-fluid" alt="" />
            </MDBView>
            <p className="black-text w-responsive mx-auto center description">Bột ngũ cốc Cô Một tại Hội chợ thương mại Festival di sản Quảng Nam 2019</p>
          </MDBCol>
          <MDBCol lg="6">
            <MDBView waves>
            <img src="../../static/images/hoi_cho_hoi_an_1.webp" className="img-fluid" alt="" />
            </MDBView>
            <p className="black-text w-responsive mx-auto center description">Bột ngũ cốc Cô Một tại Hội chợ thương mại Festival di sản Quảng Nam</p>
          </MDBCol>
          <MDBCol lg="6">
            <MDBView waves>
            <img src="../../static/images/tra_vinh.webp" className="img-fluid" alt="" />
            </MDBView>
            <p className="black-text w-responsive mx-auto center description">Bột ngũ cốc Cô Một tại Hội chợ xúc tiến thương mại định hướng xuất khẩu nông - thuỷ sản Đồng bằng sông Cửu Long 2019</p>
          </MDBCol>
          <MDBCol lg="6">
            <MDBView waves>
            <img src="../../static/images/tra_vinh_1.webp" className="img-fluid" alt="" />
            </MDBView>
            <p className="black-text w-responsive mx-auto center description">Bột ngũ cốc Cô Một tại Hội chợ xúc tiến thương mại định hướng xuất khẩu nông - thuỷ sản Đồng bằng sông Cửu Long 2019</p>
          </MDBCol>
          <MDBCol lg="6">
            <MDBView waves>
            <img src="../../static/images/nongdanquangnam.webp" className="img-fluid" alt="" />
            </MDBView>
            <p className="black-text w-responsive mx-auto center description">Bột ngũ cốc Cô Một tại Hội chợ giới thiệu sản phẩm nông nghiệp và tuyên dương điển hình nông dân sản xuất, kinh doanh trong giai đoạn 2014-2019 của Hội nông dân Quảng Nam</p>
          </MDBCol>
          <MDBCol lg="6">
            <MDBView waves>
            <img src="../../static/images/nongdanquangnam_2.webp" className="img-fluid" alt="" />
            </MDBView>
            <p className="black-text w-responsive mx-auto center description">Bột ngũ cốc Cô Một tại Hội chợ giới thiệu sản phẩm nông nghiệp và tuyên dương điển hình nông dân sản xuất, kinh doanh trong giai đoạn 2014-2019 của Hội nông dân Quảng Nam</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBCardBody>
      </section>
    );
  }
}

export default CarouselPage;