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
    <Layout siteTitle="Cô Một | Bột ngũ cốc dinh dưỡng 12 loại hạt" description="Bột ngũ cốc dinh dưỡng 12 loại hạt Cô Một thơm ngon và bổ dưỡng.">
      <Element name="trangchu">
        <ProductHero />
      </Element>
      <Element name="gioithieu">
        <AboutUs />
      </Element>
      <Element name="sanpham">
        <ProductCategories />
      </Element>
      <Element name="tintuc">
        <Activity />
      </Element>
      <Element name="lienhe">
        <AppFooter />
      </Element>
    </Layout>
  );
}
