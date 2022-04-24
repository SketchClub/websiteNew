import { authorBlogs } from "../../graphQL/author";
import Error from "../../components/Error";
import { apoClient } from "../../graphQL/client";
import Link from "next/link";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function AllAuthBlogs({ blogProps }) {
  try {
    if (blogProps === null) {
      return <Error />;
    }
  } catch {
    return <Error />;
  }
  function dateFormat(strapiDate) {
    var year = strapiDate.slice(0, 4);
    var month = "";
    var date = strapiDate.slice(8, 10);
    var dateAddOn = "";
    switch (strapiDate.slice(5, 7)) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
    }
    switch (date.slice(1, 2)) {
      case "1":
        dateAddOn = "st";
        break;
      case "2":
        dateAddOn = "nd";
        break;
      case "3":
        dateAddOn = "rd";
        break;

      default:
        dateAddOn = "th";
        break;
    }
    return date + dateAddOn + " " + month + ", " + year;
  }

  return (
    <div id="author">
      <div className="authInfo">
        <div className="name-and-socials">
          <h1>Blogs by {blogProps.Name}</h1>
          <div className="socials">
            <Link href={"https://www.instagram.com/" + blogProps.InstaID}>
              <a>
                <AiFillInstagram fontSize="2rem" />
              </a>
            </Link>
            <Link href={"https://www.instagram.com/" + blogProps.Email}>
              <a>
                <MdEmail fontSize="2rem" />
              </a>
            </Link>
          </div>
        </div>
        <div className="picture">
          <Image
            src={blogProps.ProfilePicture.url}
            alt="Sketch Club SRM Ramapuram"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="allBlogs">
        {blogProps.Blogs.map((blog, i) => {
          return (
            <div className="blog" key={i}>
              <Link href={"/blogs/" + blog.id}>
                <a style={{ display: "unset" }}>
                  <h2>{blog.Title}</h2>
                  <p>{blog.OneLiner}</p>
                  <span>{dateFormat(blog.PublishingDate)}</span>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
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
