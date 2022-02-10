import { allBlogs } from "../../graphQL/blogs";
import { apoClient } from "../../graphQL/client";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

export default function blogs({ blogsProps }) {
  // console.log(blogsProps);
  return (
    <div id="blogs">
      <h2>Blogs brought to you by Sketch Team</h2>
      <Row sm={2} md={4} className="allBlogCards black-text-outline">
        {[...blogsProps].reverse().map((blogData) => {
          return (
            <Col
              key={blogData.id}
              className={"blogCard _" + blogData.id}
              style={{ height: "20vw", position: "relative" }}
            >
              <Link href={"/blogs/" + blogData.id}>
                <a style={{ flexDirection: "column", cursor: "none" }}>
                  <h3>{blogData.Title}</h3>
                  <p>{blogData.member.Name}</p>
                </a>
              </Link>
            </Col>
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
