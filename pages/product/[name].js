import React, { useState } from "react";
import Layout from "../../modules/views/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import "../../modules/css/Product.css";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const [productType, setProductType] = useState("500 gram");
  const { content } = props;
  const doDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const doIncrement = () => {
    setQuantity(quantity + 1);
  };
  const onChange = event => {
    if (isNaN(event.target.value)) {
      setQuantity(1);
    } else if (event.target.value < 1) {
      // setQuantity(event.target.value);
    } else {
      setQuantity(event.target.value);
    }
  };
  return (
    <Layout isBack={true}>
      <div className="container">
        <h1 className="my-4">
          Page Heading
          <small>Secondary Text</small>
        </h1>
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="http://placehold.it/750x500"
              alt=""
            />
          </div>

          <div className="col-md-6">
            <h3 className="my-3">Project Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae. Sed
              dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris
              ultricies, justo eu convallis placerat, felis enim.
            </p>
            <h3 className="my-3">Project Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
            <div className="row">
              <div className="input-group">
                <button onClick={doDecrement} className="button-minus">
                  -
                </button>
                <input
                  type="text"
                  className="quantity-field"
                  name="quantity"
                  value={quantity}
                  onChange={onChange}
                ></input>
                <button onClick={doIncrement} className="button-plus">
                  +
                </button>
              </div>
              <MDBDropdown>
                <MDBDropdownToggle caret color="#1de9b6 teal accent-3">
                  {`Loại ${productType}`}
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem onClick={() => setProductType("500 gram")}>
                    Loại 500 gram
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => setProductType("1 kg")}>
                    Loại 1 kg
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
        </div>
        <h3 className="my-4">Related Projects</h3>

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href="#">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Product.getInitialProps = async ({ query }) => {
  const { name } = query;
  const content = await import(`../../services/${name}.md`);
  const document = matter(content.default);
  return { ...document };
};
export default Product;
