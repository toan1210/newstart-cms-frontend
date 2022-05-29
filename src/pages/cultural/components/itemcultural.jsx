import React from "react";
import ReactMarkdown from "react-markdown";
import useAuth from "../../../core/useAuth";

// import { Container } from './styles';

function Itemcultural({
  _id,
  title,
  author,
  status,
  category,
  date,
  images,
  sumary,
}) {
  let { ip } = useAuth();
  var timedate = "";
  function time(datetime) {
    var time = new Date(datetime);
    let years = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDay();
    if (month < 10) {
      month = "0" + month;
    }
    if (month < 10) {
      day = "0" + day;
    }
    timedate = years + "-" + month + "-" + day;
  }
  time(date);
  return (
    <>
      <div className="new-content-news">
        <a className="content-news" href={`/cultural/${_id}`}>
          <div className="content-news-img">
            <img src={ip + "images/" + images} alt="" srcSet />
          </div>
          <div className="content-news-text">
            <div className="news-text-title">
              <h3>{title}</h3>
            </div>
            <div className="news-text-time">
              <span className="date">{timedate}</span>
              <span className="time" style={{ marginLeft: 5 }}>
                {author}
              </span>
            </div>
            <div className="news-text-content">
              <div dangerouslySetInnerHTML={{ __html: sumary }}></div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Itemcultural;
