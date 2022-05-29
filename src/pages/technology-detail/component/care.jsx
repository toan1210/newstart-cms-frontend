import React from "react";
import ReactMarkdown from "react-markdown";
import useAuth from "../../../core/useAuth";

// import { Container } from './styles';

function Index({
  _id,
  title,
  author,
  status,
  category,
  date,
  images,
  sumary,
  content,
}) {
  let { ip } = useAuth();
  //------------------------------
  let url = "";
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
  if (category === "CongNghes") {
    url = "technology";
  } else if (category === "DuLichs") {
    url = "tourism";
  } else if (category === "HangHieus") {
    url = "brandstuff";
  } else if (category === "SucKhoes") {
    url = "living";
  } else if (category === "ThoiTrangs") {
    url = "fashion";
  } else if (category === "DuLichs") {
    url = "tourism";
  } else if (category === "Videos") {
    url = "Video";
  } else if (category === "TinMois") {
    url = "news";
  } else if (category === "KinhTes") {
    url = "economy";
  } else if (category === "VHXHs") {
    url = "cultural";
  } else if (category === "GiaiTris") {
    url = "entertain";
  } else if (category === "TheThaos") {
    url = "sport";
  } else if (category === "AmThucs") {
    url = "cuisine";
  }
  return (
    <>
      <div className="detail-care__content">
        <div className="care-content__img">
          <a href={`/${url}/${_id}`}>
            <img src={ip + "images/" + images} alt="" srcSet />
          </a>
        </div>
        <div className="care-content__text">
          <a href={`/${url}/${_id}`}>
            <h3>{title}</h3>
          </a>
          <p className="time">
            <span className="time-day">{timedate}</span>
            <span className="DanhMuc">{author}</span>
          </p>
          <span className="demo">
            <div dangerouslySetInnerHTML={{ __html: sumary }}></div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Index;
