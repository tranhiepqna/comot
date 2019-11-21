import ReactMarkdown from 'react-markdown'
import Layout from "../../modules/views/Layout";
import matter from 'gray-matter';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
    MDBCardBody,
    MDBCardImage,
} from "mdbreact";

function About(props) {
  const markdownBody = props.content
  return (
    <Layout isBack={true} siteTitle={props.siteTitle} description="Cơ sở sản xuất bột ngũ cốc Cô Một địa chỉ Xã Bình Định Bắc, Huyện Thăng Bình, Tỉnh Quảng Nam">
     <div className="container">
     <MDBCardBody>
        <MDBCardImage
              alt="Bột ngũ cốc Cô Một"
              className="img-fluid center"
              src="../../static/images/aboutus.webp"
              height={350}
              width={700}
            />
         <ReactMarkdown source={markdownBody} className="black-text w-responsive mx-auto text-justify description"/>
         <p className="black-text w-responsive mx-auto text-right description">Kính giới thiệu.</p>
      </MDBCardBody>
     </div>
      
    </Layout>
  );
}

About.getInitialProps = async function(context) {
  // grab the file in the posts dir based on the slug
  const content = await import(`../../services/about.md`)
  // also grab the config file so we can pass down siteTitle
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default)
  return {
    siteTitle: 'Giới thiệu Cô Một',
    ...data,
  }
}

export default About;