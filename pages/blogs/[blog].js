import { apoClient } from "../../graphQL/client";
import { oneBlog as oneBlogQ } from "../../graphQL/blogs";
import Image from "next/image";
import NotFound from "../../components/NotFound";
import ReactMarkdown from "react-markdown";

export default function blog({ blogProps }) {
  if (blogProps === null || Object.keys(blogProps).length === 0) {
    return <NotFound />;
  }
  // console.log(blogProps.Title);
  // const blogID = useRouter().query.blog
  return (
    <div id="blog">
      <h1>{blogProps.Title}</h1>
      <span className="one-liner" style={{ fontStyle: "italic" }}>
        {`"` + blogProps.OneLiner + `"`}
      </span>
      <br />
      <span className="date">{blogProps.PublishingDate}</span>
      <div className="blog-content">
        <ReactMarkdown>{blogProps.Content}</ReactMarkdown>
      </div>
      <div className="author">
        {/* <Image
          src={blogProps.member.ProfilePicture.url}
          className="image"
          layout="fill"
        /> */}
        <div className="name-and-socials">
          <h2 className="name">{blogProps.member.Name}</h2>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { data } = await apoClient.query({ query: oneBlogQ(params.blog) });
  return {
    props: { blogProps: data.blog }, // will be passed to the page component as props
  };
}
