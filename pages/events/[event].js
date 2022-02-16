import { apoClient } from "../../graphQL/client";
import { eventQ } from "../../graphQL/events";
import Error from "../../components/Error";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Blog({ eveProps }) {
  if (eveProps === null || Object.keys(eveProps).length === 0) {
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
    <div id="event">
      <h1 className="black-text-outline">{eveProps.Title}</h1>
      <div className="imgContainer">
        <Image src={eveProps.Poster.url} layout="fill" objectFit="cover" />
      </div>
      <p className="date black-text-outline">
        {dateFormat(eveProps.EventDate)}
      </p>
      <div className="event-content">
        <ReactMarkdown>{eveProps.Content}</ReactMarkdown>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { data } = await apoClient.query({ query: eventQ(params.event) });
  return {
    props: { eveProps: data.event }, // will be passed to the page component as props
  };
}
