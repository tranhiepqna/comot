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
import Link from "next/link";

import "../css/Categories.css";
import '../css/AboutUs.css';

const TeamPage = () => {
  return (
    <section className="text-center my-5 main">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold">Giới thiệu</h2>
        <MDBCardImage
              className="img-fluid center"
              src="../../static/images/aboutus.jpg"
              height={350}
              width={700}
            />
        <p className="black-text w-responsive mx-auto text-justify description">
        Bột ngũ cốc Cô Một hình thành trên cơ sở cách chế biến ngũ cốc truyền thống trong dân gian. Ngày xưa ông cha ta thường chế biến các loại bột như bột đậu xanh, bột gạo lứt, bột gạo tẻ, bột gạo nếp bằng cách rang vàng thơm giòn rồi giả nhỏ rồi xay thành bột mịn dùng để bồi bổ sức khỏe. Cô Một bước đầu nắm được cách chế biến bột ngũ cốc trong dân gian, tự làm bột sử dụng trong gia đình. Một thời gian sau, bà con hàng xóm nhận thấy bột ngũ cốc Cô Một làm ra thơm ngon, bỗ dưỡng nên hỏi mua về sử dụng. Tiếng lành đồn xa, dần dần nhiều người hỏi mua về dùng. Trên nền tảng đó tôi dần dần hình thành "Cơ sở chế biến bột ngũ cốc Cô Một".
         <span>
            <Link   
              as={`/gioithieu`}
              href="/gioithieu"><a>Xem thêm</a>
            </Link>
          </span>
        </p>
        {
          /*
             <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">
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
          */
        }
       
      </MDBCardBody>
    </section>
  );
};

export default TeamPage;
