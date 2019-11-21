import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBMask,
  MDBCarouselCaption,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

import Link from 'next/link'

import "../css/Categories.css";

const TeamPage = () => {
  return (
    <section className="my-5 px-1 pb-5 text-center main">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">Tin tức</h2>
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="../../static/images/whyuseit.webp"
                    alt="Tại sao nên dùng bột ngũ cốc Cô Một"
                  />
                   <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption >
                <Link  
                  prefetch
                  as={`/tintuc/Vì-sao-bạn-nên-ăn-bột-ngũ-cốc`}
                  href="/tintuc/[slug]"
                >
                <a className="white-text">
                  <h3 className="h2-responsive font-weight-bold text-center">Vì sao bạn nên ăn bột ngũ cốc?</h3>
                  <p className="h4-responsive">Ngũ cốc rất đa dạng với gần 300 loại khác nhau, không khó để bạn có thể chọn cho mình 1 vài loại ưa thích để sử dụng. Tuy vậy, hẳn bạn đã biết những lợi ích có được khi ăn ngũ cốc và bột ngũ cốc? Xem thử vì sao nên ăn bột ngũ cốc nhé!</p>
                </a>
                
                </Link>
                
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
              <MDBView>
                  <img
                    className="d-block w-100 h-100"
                    src="../../static/images/thanhphan.webp"
                    alt="Tại sao nên dùng bột ngũ cốc Cô Một"
                  />
                   <MDBMask overlay="black-strong"/>
                </MDBView>
                <MDBCarouselCaption>
                <Link
                  prefetch
                  as={`/tintuc/ngu-coc-thanh-phan-va-gia-tri-dinh-du-ng`}
                  href="/tintuc/[slug]"
                >
                <a className="white-text">
                  <h3 className="h2-responsive font-weight-bold text-center">Ngũ cốc: Thành phần và giá trị dinh dưỡng</h3>
                  <p className="h4-responsive">Trong thời kỳ cổ đại, “ngũ cốc” là tên gọi chung để chỉ 05 loại thực vật với hạt có thể ăn được: Thóc gạo, ngô, lúa mỳ, lúa mạch và kê. Sau này, “ngũ cốc” là từ hay được dùng để gọi chung cho các loại cây lương thực hay sản phẩm chính thu được từ chúng.</p>
                  </a>
                
                </Link>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </MDBCardBody>
    </section>
  );
};

export default TeamPage;
