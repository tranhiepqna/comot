import React from "react";
import Layout from "../../modules/views/Layout";
import "../../modules/css/Product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Product(props) {
  return (
    <Layout isBack={true} >
      <div className="container">
        <h1 className="my-4">
          Bột ngũ cốc 12 loại hạt
        </h1>
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="../../static/images/loainuaky.webp"
              alt="Bột ngũ cốc Cô Một 12 loại hạt"
            />
          </div>

          <div className="col-md-6">
            <h3 className="my-3">Mô tả</h3>
            <p>
              Bột ngũ cốc dinh dưỡng 12 loại hạt Cô Một
               được làm từ các nguyên liệu sạch, không chứa chất bảo quản. 
               Quá trình rang say tự nhiên không làm mất đi đặc tính hoá học của sản phẩm. 
               Sản phẩm giúp bổ sung chất xơ, các loại vitamin như B1, B3, B5, E, sắt, canxi,… tốt cho trẻ em, người lớn, 
               người đang ăn kiêng, người muốn tăng cân, người cần bổ sung dinh dưỡng.
            </p>
            <h3 className="my-3">Thành phần</h3>
              <p>Đậu nành 15%, đậu đen xanh lòng 10%, đậu xanh 10%, đậu trắng 5%, hạt óc chó 5%, hạt mắc ca 10%, hạt chia 5%, yến mạch 10%, hạnh nhân 10%.</p>
              <h3 className="my-3">Chỉ tiêu chất lượng</h3>
              <p>Độ ẩm 	&lt; 25%</p>
              <p>Protein &gt; 20%</p>
              <h3 className="my-3">Cách dùng</h3>
              <p>Hoà 2-3 muỗi bột ngũ cốc với 100ml nước ấm thêm đường hoặc sữa tuỳ vào khẩu vị.</p>
              <h3 className="my-3">Liên hệ</h3>
              <p>Miền Trung: 0858.755.154</p>
              <p>Miền Nam: 0905.618.816</p>
          </div>
        </div>
       
      </div>
    </Layout>
  );
}
export default Product;
