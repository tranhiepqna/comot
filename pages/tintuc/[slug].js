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

function News(props) {
  const markdownBody = props.content
  const frontmatter = props.data
  return (
    <Layout isBack={true} siteTitle={frontmatter.title} description={frontmatter.description} >
     <div className="container">
      <MDBCardBody>
              <MDBCardImage
                alt="Bột ngũ cốc Cô Một"
                className="img-fluid center w-responsive"
                src={frontmatter.hero_image}
                height={350}
                width={700}
              />
          <h1 className="black-text w-responsive mx-auto text-justify h1-responsive font-weight-bold">{frontmatter.title}</h1>
          <ReactMarkdown source={markdownBody} className="black-text w-responsive mx-auto text-justify description"/>
        </MDBCardBody>
     </div>
   
    </Layout>
  );
}

News.getInitialProps = async function(context) {
  const { slug } = context.query
  const content = await import(`../../services/${slug}.md`)
  const data = matter(content.default)
  return {
    ...data,
  }
}

export default News;