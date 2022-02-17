import { authorBlogs } from "../../graphQL/author";
import Error from "../../components/Error";
import { apoClient } from "../../graphQL/client";
import Link from "next/link";
import Image from "next/image";

export default function AllAuthBlogs({ blogProps }) {
  try {
    if (blogProps === null) {
      return <Error />;
    }
  } catch {
    return <Error />;
  }

  return (
    <div id="authourBlogs">
      <div className="authInfo">
        <div
          className="picture"
          style={{ height: "20px", widows: "20px", position: "relative" }}
        >
          <Image
            src={blogProps.ProfilePicture.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="name-and-socials">
          <h1>Blogs by {blogProps.Name}</h1>
          <div className="socials">
            <Link href={"https://www.instagram.com/" + blogProps.InstaID}>
              <a>Instagram</a>
            </Link>
          </div>
        </div>
      </div>
      {blogProps.Blogs.map((blog) => {
        return <h2>{blog.Title}</h2>;
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { data } = await apoClient.query({
    query: authorBlogs(params.authorID),
  });
  return {
    props: { blogProps: data.member }, // will be passed to the page component as props
  };
}
