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
              alt="Giới thiệu bột ngũ cốc Cô Một"
              className="img-fluid center"
              src="../../static/images/aboutus.webp"
              height={350}
              width={700}
            />
             <p className="black-text w-responsive mx-auto text-justify description">
             Bột ngũ cốc Cô Một hình thành trên cơ sở cách chế biến ngũ cốc truyền thống trong dân gian Quảng Nam. Ngày xưa ông cha ta thường chế biến các loại bột như bột đậu xanh, bột gạo lứt, bột gạo tẻ, bột gạo nếp bằng cách rang vàng thơm giòn rồi giả nhỏ bằng cối đá, rây thành bột mịn dùng để bồi bổ sức khỏe.
             </p>
             <p className="black-text w-responsive mx-auto text-justify description">
             Bột ngũ cốc Cô Một bước đầu nắm được cách chế biến bột ngũ cốc trong dân gian, tự làm bột sử dụng trong gia đình. Một thời gian sau, bà con hàng xóm nhận thấy chất lượng Bột ngũ cốc Cô Một làm ra thơm ngon, bổ dưỡng nên hỏi mua về sử dụng. Tiếng lành đồn xa, dần dà nhiều người hỏi mua và cứ thế lan truyền ra nhiều người nữa biết đến sản phẩm . Trên nền tảng đó tôi dần dần hình thành Cơ sở chế biến Bột ngũ cốc Cô Một. Bước đầu tôi hoàn toàn sản xuất bằng phương pháp bán thủ công, mỗi tháng chỉ sản xuất được khoảng từ 90 đến 150 kg, khách hàng chủ yếu là người địa phương và bạn bè thân quen . Tôi đã duy trì cách sản xuất như trên trong suốt nhiều năm liền . Thời gian gần đây tôi nhận thấy sản phẩm mình làm ra  được khá nhiều khách hàng tin dùng, nên đã quyết định mở rộng quy mô theo phương thức sản xuất hàng hóa.
             <span>
              <Link   
                as={`/gioithieu`}
                href="/gioithieu"><a>Xem thêm</a>
              </Link>
              </span>
             </p>
       
      </MDBCardBody>
    </section>
  );
};

export default TeamPage;
