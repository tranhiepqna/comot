import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Scroll from "react-scroll";
import Router from "next/router";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn
} from "mdbreact";
import "../css/AppAppBar.css";

const Link = Scroll.Link;
const Events = Scroll.Events;

function AppAppBar(props) {
  const { isBack } = props;
  const [isOpen, setOpen] = useState(false);
  const toggleCollapse = () => setOpen(!isOpen);

  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", to, element);
    });
    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", to, element);
    });
  }, []);

  return (
    <MDBNavbar
      color="#fafafa grey lighten-5"
      light
      expand="md"
      scrolling
      fixed={!isBack && "top"}
      // transparent
    >
      {isBack ? (
        <React.Fragment>
          <img
            src="../../static/images/logo.png"
            className="rounded img"
            alt="aligment"
            onClick={() => Router.back()}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <MDBNavbarBrand>
            <img
              src="../../static/images/logo.png"
              className="rounded img"
              alt="aligment"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  to="trangchu"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                >
                  <p className="nav-link rightLink">TRANG CHỦ</p>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  to="gioithieu"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-100}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                >
                  <p className="nav-link rightLink">GIỚI THIỆU</p>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  to="sanpham"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-100}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                >
                  <p className="nav-link rightLink">SẢN PHẨM</p>
                </Link>
              </MDBNavItem>
        
              <MDBNavItem>
                <Link
                  activeClass="active"
                  to="tintuc"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-100}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                >
                  <p className="nav-link rightLink">TIN TỨC</p>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  activeClass="active"
                  to="lienhe"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-100}
                  duration={500}
                  delay={200}
                  isDynamic={true}
                >
                  <p className="nav-link rightLink">LIÊN HỆ</p>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </React.Fragment>
      )}
    </MDBNavbar>
  );
}

export default AppAppBar;
