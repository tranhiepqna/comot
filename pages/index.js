import ProductHero from "../modules/views/ProductHero";
import AboutUs from "../modules/views/AboutUs";
import ProductCategories from "../modules/views/ProductCategories";
import Activity from "../modules/views/Activity";
import AppFooter from "../modules/views/AppFooter";
import Layout from "../modules/views/Layout";
import { Element } from "react-scroll";
import { MDBIcon } from "mdbreact";
import ButtonPage from "../modules/components/ShopCart";

export default function Index() {
  return (
    <Layout>
      <Element name="home">
        <ProductHero />
      </Element>
      <Element name="product">
        <ProductCategories />
      </Element>
      <Element name="about">
        <AboutUs />
      </Element>
      <Element name="activity">
        <Activity />
      </Element>
      <Element name="contact">
        <AppFooter />
      </Element>
    </Layout>
  );
}
