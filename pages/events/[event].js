import { useEffect } from "react";
import { apoClient } from "../../graphQL/client";
import { eventQ } from "../../graphQL/events";
import Error from "../../components/Error";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Head from "next/head";

export default function Blog({ eveProps }) {
  try {
    var event_elem = document.querySelector(".event-content");
    var head_elem = event_elem.querySelectorAll("h1, h2, h3");
    head_elem.forEach((elem) => {
      var text = elem.innerText;
      var index1 = text.indexOf("{{{{{");
      var index2 = text.indexOf("}}}}}");
      if (index1 !== -1 && index2 !== -1) {
        var subtext1 = text.substring(0, index1); //real heading
        var subtext2 = text.substring(index1, text.length); //idname
        var idtext = subtext2.substring(5, subtext2.indexOf("}}}}}"));
        elem.innerText = subtext1;
        elem.setAttribute("id", idtext);
      }
    });
  } catch {}
  useEffect(() => {
    var event_elem = document.querySelector(".event-content");
    var head_elem = event_elem.querySelectorAll("h1, h2, h3");
    head_elem.forEach((elem) => {
      var text = elem.innerText;
      var index1 = text.indexOf("{{{{{");
      var index2 = text.indexOf("}}}}}");
      if (index1 !== -1 && index2 !== -1) {
        var subtext1 = text.substring(0, index1); //real heading
        var subtext2 = text.substring(index1, text.length); //idname
        var idtext = subtext2.substring(5, subtext2.indexOf("}}}}}"));
        elem.innerText = subtext1;
        elem.setAttribute("id", idtext);
      }
    });
  }, []);
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
    switch (date.slice(0, 2)) {
      case "01":
        dateAddOn = "st";
        break;
      case "02":
        dateAddOn = "nd";
        break;
      case "03":
        dateAddOn = "rd";
        break;
      case "21":
        dateAddOn = "st";
        break;
      case "22":
        dateAddOn = "nd";
        break;
      case "23":
        dateAddOn = "rd";
        break;
      case "31":
        dateAddOn = "st";
        break;
      default:
        dateAddOn = "th";
        break;
    }
    return date + dateAddOn + " " + month + ", " + year;
  }
  return (
    <div id="event">
      <Head>
        <title>Sketch | {eveProps.Title} | Event</title>
        <meta
          name="description"
          content={
            eveProps.Title + " is an event by the Sketch Club - SRM Ramapuram"
          }
        />
      </Head>
      <h1 className="black-text-outline">{eveProps.Title}</h1>
      <div className="imgContainer">
        <Image
          src={eveProps.Poster.url}
          layout="fill"
          objectFit="cover"
          alt="Sketch Club SRM Ramapuram"
        />
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
