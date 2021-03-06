import ProductHero from "../modules/views/ProductHero";
import AboutUs from "../modules/views/AboutUs";
import ProductCategories from "../modules/views/ProductCategories";
import Activity from "../modules/views/Activity";
import AppFooter from "../modules/views/AppFooter";
import Layout from "../modules/views/Layout";
import Story from '../modules/views/StoryOfProduct';
import Fair from '../modules/views/Fair';
import { Element } from "react-scroll";

export default function Index() {
  return (
    <Layout siteTitle="Bột ngũ cốc Cô Một | Bột ngũ cốc dinh dưỡng 12 loại hạt Cô Một" description="Bột ngũ cốc Cô Một | Bột ngũ cốc dinh dưỡng 12 loại hạt Cô Một thơm ngon và bổ dưỡng.">
      <Element name="trangchu">
        <ProductHero />
      </Element>
      <Element name="gioithieu">
        <AboutUs />
      </Element>
      <Element name="cau_chuyen_san_pham">
        <Story />
      </Element>
      <Element name="sanpham">
        <ProductCategories />
      </Element>
      <Element name="tintuc">
        <Activity />
      </Element>
      <Element name="hoatdong">
        <Fair />
      </Element>
      <Element name="lienhe">
        <AppFooter />
      </Element>
    </Layout>
  );
}
