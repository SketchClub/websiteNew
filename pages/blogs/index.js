import { allBlogs } from "../../graphQL/blogs";
import { apoClient } from "../../graphQL/client";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

export default function Blogs({ blogsProps }) {
  // console.log(blogsProps);
  return (
    <div id="blogs">
      <h1>Blogs brought to you by Sketch Team</h1>
      <Row xs={2} sm={2} md={4} className="allBlogCards black-text-outline">
        {[...blogsProps].reverse().map((blogData) => {
          return (
            <Link href={"/blogs/" + blogData.id} key={blogData.id}>
              <a>
                <Col className={"blogCard _" + blogData.id}>
                  <h2>{blogData.Title}</h2>
                  <p>{blogData.member.Name}</p>
                </Col>
              </a>
            </Link>
          );
        })}
      </Row>
    </div>
  );
}
export async function getServerSideProps() {
  const { data } = await apoClient.query({ query: allBlogs });
  return {
    props: { blogsProps: data.blogs }, // will be passed to the page component as props
  };
}
