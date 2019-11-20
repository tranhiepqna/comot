import React, { useState } from "react";
import Layout from "../modules/views/Layout";
import matter from "gray-matter";
import {
    MDBCardBody,
    MDBCardImage,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

function About(props) {
  return (
    <Layout isBack={true}>
       <MDBCardBody>
        <MDBCardImage
              className="img-fluid center"
              src="../../static/images/aboutus.jpg"
              height={350}
              width={700}
            />
        <p className="black-text w-responsive mx-auto text-justify description">
        Bột ngũ cốc Cô Một hình thành trên cơ sở cách chế biến ngũ cốc truyền thống trong dân gian. Ngày xưa ông cha ta thường chế biến các loại bột như bột đậu xanh, bột gạo lứt, bột gạo tẻ, bột gạo nếp bằng cách rang vàng thơm giòn rồi giả nhỏ rồi xay thành bột mịn dùng để bồi bổ sức khỏe. Cô Một bước đầu nắm được cách chế biến bột ngũ cốc trong dân gian, tự làm bột sử dụng trong gia đình. Một thời gian sau, bà con hàng xóm nhận thấy bột ngũ cốc Cô Một làm ra thơm ngon, bỗ dưỡng nên hỏi mua về sử dụng. Tiếng lành đồn xa, dần dà nhiều người hỏi mua về dùng. Trên nền tảng đó tôi dần dần hình thành "Cơ sở chế biến bột ngũ cốc Cô Một". Bước đầu tôi hoàn toàn sản xuất bằng phương pháp bán thủ công, mỗi tháng chỉ sản xuất được khoảng từ 90 đến 150 kg, khách hàng chủ yếu là người địa phương và bạn bè thân quen. Tôi đã duy trì cách sản xuất như trên trong suốt nhiều năm liền. Thời gian gần đây tôi nhận thấy sản phẩm mình làm ra tuy được khá nhiều khách hàng tin dùng, nhưng trên cơ sở pháp lý chưa được cơ quan nhà nước có thẩm quyền kiểm định chất lượng sản phẩm và cấp phép sản xuất. Được sự khuyến khích của chính quyền địa phương xã Bình Định Bắc, Phòng Nông nghiệp và phát triển Nông thôn, Phòng Tài chính - Kế hoạch huyện Thăng Bình. Cơ sở sản xuất Bột ngũ cốc Cô Một ra đời, được Phòng Tài chính- Kế hoạch huyện Thăng Bình cấp Giấy chứng nhận đăng ký kinh doanh số: 33H8004944 ngày 26 tháng 6 năm 2017. Sản phẩm đạt đầy đủ điều kiện vệ sinh an toàn thực phẩm theo số: 05/2019/QNa-NNPTNT-TB được phòng nông nghiệp và phát triển nông thôn huyện Thăng Bình chứng nhận (có hiệu lực hết ngày 16/05/2022). Sản phẩm đã đăng ký bảo hộ bản quyền thương hiệu.
        </p>
        <p className="black-text w-responsive mx-auto text-justify description">
        Cảm ơn quý khách hàng gần xa đã tin dùng, ủng hộ sản phẩm của cơ sở chúng tôi suốt thời gian qua. Chúng tôi sẽ nghiên cứu nâng cao chất lượng sản phẩm để phục vụ quý khách hàng tốt nhất. 
        </p>
      </MDBCardBody>
    </Layout>
  );
}

export default About;