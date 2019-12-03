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
        <h2 className="h1-responsive font-weight-bold">Câu chuyện sản phẩm</h2>
        <MDBCardImage
              alt="Giới thiệu bột ngũ cốc Cô Một"
              className="img-fluid center"
              src="../../static/images/story.webp"
              height={350}
              width={700}
            />
             <p className="black-text w-responsive mx-auto text-justify description">
             Trong cuộc sống hiện tại, có quá nhiều sự cạnh tranh giữa các công ty, cửa hàng. Họ dường như đang chạy đua theo lợi nhuận mà dần bỏ quên đi chất lượng của sản phẩm. Và các sản phẩm thuộc lĩnh vực thực phẩm cũng không phải ngoại lệ. Các mặt hàng thực phẩm ngày càng phát sinh ra nhiều điều nguy hại. Thịt heo có nhiều chất tạo nạc, thịt bò bị làm giả, rau củ dư thừa lượng hóa chất bảo vệ thực vật,…
             </p>
             <p className="black-text w-responsive mx-auto text-justify description">
             Nhận ra được những bất cập đó, ngày càng có nhiều người tìm đến các sản phẩm có nguồn gốc tự nhiên như ngũ cốc cho gia đình. Cô Một đã mạnh dạn sản xuất ra loại ngũ cốc mang thương hiệu Ngũ cốc Cô Một mà lâu nay gia đình vẫn tự làm để dùng, Các loại hạt Cô Một làm bột ngũ cốc thường gồm: gạo lứt, đậu xanh, đậu đen, đậu tương... Đậu xanh phải chọn hạt nguyên, màu sáng, hạt đậu bóng bẩy. Đậu tương phải có màu vàng đều, hạt tròn. Gạo lứt chọn loại gạo ngon, đậu đỏ, đậu trắng cũng vậy, hạt đều, không được mốc.
             <span>
              <Link
                prefetch
                as={`/gioithieu/cau-chuyen-san-pham-bot-ngu-coc-co-mot`}
                href="/gioithieu/[slug]"><a href="#!" className="font-weight-bold link">Xem thêm</a>
              </Link>
              </span>
             </p>
       
      </MDBCardBody>
    </section>
  );
};

export default TeamPage;
