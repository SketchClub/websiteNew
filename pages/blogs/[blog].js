import { apoClient } from "../../graphQL/client";
import { oneBlog as oneBlogQ } from "../../graphQL/blogs";
import Image from "next/image";
import Link from "next/link";
import Error from "../../components/Error";
import ReactMarkdown from "react-markdown";
import readingTime from "reading-time";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Blog({ blogProps }) {
  if (blogProps === null || Object.keys(blogProps).length === 0) {
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
      case "01":
        dateAddOn = "st";
        break;
      case "02":
        dateAddOn = "nd";
        break;
      case "03":
        dateAddOn = "rd";
        break;

      default:
        dateAddOn = "th";
        break;
    }
    return date + dateAddOn + " " + month + ", " + year;
  }
  function readTime(text) {
    const stats = readingTime(text);
    const mins = Math.round(stats.minutes);
    if (mins === 1) {
      return "1 minute read";
    } else {
      return mins + " minutes read";
    }
  }
  // console.log(blogProps.Title);
  // const blogID = useRouter().query.blog
  return (
    <div id="blog">
      <h1 className="black-text-outline">{blogProps.Title}</h1>
      <p
        className="one-liner black-text-outline"
        style={{ fontStyle: "italic" }}
      >
        {`"` + blogProps.OneLiner + `"`}
      </p>
      <p className="date black-text-outline">
        {dateFormat(blogProps.PublishingDate)}
      </p>
      <p className="minRead black-text-outline">
        {readTime(blogProps.Content)}
      </p>
      <div className="blog-content">
        <ReactMarkdown>{blogProps.Content}</ReactMarkdown>
      </div>
      <div className="author">
        <Link href={"/author/" + blogProps.member.id}>
          <a>
            <div className="imageContainer">
              <Image
                src={blogProps.member.ProfilePicture.url}
                className="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
        <div className="name-and-socials">
          <Link href={"/author/" + blogProps.member.id}>
            <a>
              <h2 className="name">{blogProps.member.Name}</h2>
            </a>
          </Link>
          <div className="socials">
            <a
              href={"https://instagram.com/" + blogProps.member.InstaID}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram color="black" />
            </a>
            <a
              href={"mailto:" + blogProps.member.Email}
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail color="black" />
            </a>
          </div>
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
