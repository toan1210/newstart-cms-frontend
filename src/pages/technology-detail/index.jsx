import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Invole from "./component/involve";
import Care from "./component/care";
import useAuth from "../../core/useAuth";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import Comment from "../../components/Comment";
let $ = window.$;
// import { Container } from './styles';

function Index() {
  let { ip } = useAuth();
  let { slug } = useRouteMatch().params;
  // console.log(ip+"traditional/"+slug);
  const [state, setState] = useState({
    listnew: null,
    allnew: null,
    arrayadvertisements: null,
  });

  useEffect(() => {
    Promise.all([
      fetch(`${ip}traditional/${slug}`).then((res) => res.json()),
      fetch(`${ip}traditional/traditionalapi`).then((res) => res.json()),
      fetch(`${ip}arrayadvertisements/arrayadvertisementsapi`).then((res) =>
        res.json()
      ),
    ]).then(([res1, res2, res3]) => {
      setState({
        listnew: res1,
        allnew: res2,
        arrayadvertisements: res3,
      });
    });
    
    window.onscroll = function () {
      var detail = $(".detail-content");
      var detailsrcoll = Math.round(detail.offset().top);
      var windowscroll = window.pageYOffset;
      console.log(detailsrcoll, windowscroll);
      if (detailsrcoll < Math.round(windowscroll)) {
        $(".left-quangcao").addClass("active3");
      } else if (detailsrcoll > Math.round(windowscroll)) {
        $(".left-quangcao").removeClass("active3");
      }
    };
  }, [slug]);

  let { listnew, allnew, arrayadvertisements } = state;
  if (!listnew && !allnew && !arrayadvertisements) return "loading...";
 
  var timedate = 0;
  var arraytechnology = [];
  var arraykhac = state.allnew.reverse();
  
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
  time(state.listnew.date);
  console.log(timedate);

  function filter(x) {
    x.forEach((a, b) => {
      if (a.category === "CongNghes") {
        arraytechnology.push(a);
      }
    });
  }
  filter(state.allnew);

  return (
    <>
      <main className="page-detail">
        <div className="container">
          <div className="detail-type">
            <a href>
              <h3></h3>
            </a>
          </div>
          <div className="detail-title">
            <h1>{state.listnew.title}</h1>
          </div>
          <div className="detail-article">
            <div className="detail-article-wappe">
              <div className="detail-article-share">
                <FaFacebookF className="icon-share" />
                <SiZalo className="icon-share" />
              </div>
              <div className="detail-article-time">
                <AiOutlineClockCircle />
                <span>{timedate}</span>
              </div>
              <div className="detail-article-author">
                <span>
                  <p
                    style={{
                      fontWeight: "500",
                      display: "inline",
                      marginRight: "5px",
                    }}
                  >
                    Ng?????i vi???t:
                  </p>
                  {state.listnew.author}
                </span>
              </div>
            </div>
          </div>
          <div className="detail-content">
            <div className="detail-content__left">
              <div className="content-left detail-left">
                <div
                  dangerouslySetInnerHTML={{ __html: listnew.content }}
                ></div>
              </div>
              <Comment />
              <div className="detail-involve">
                <h2>
                  <img src="/img/3color.png" alt="???nh 3 m??u" />
                  B??i Li??n Quan
                </h2>
                <div className="detail-involve__content">
                  {arraytechnology.map((x, y) =>
                    y < 5 ? <Invole key={x.id} {...x}></Invole> : null
                  )}
                </div>
              </div>
            </div>
            <div className="detail-content__right">
              <div className="left-quangcao">
                <h1>Content right Advertisement</h1>
                {
                  //  typeof(arrayadvertisements[0].DetailAdvertisementLivingRight[0]) !== 'undefined'?
                  //  <a href={arrayadvertisements.DetailAdvertisementLivingRightContent}>
                  //      <img className="left-quangcao-img" src={iplink + arrayadvertisements[0].DetailAdvertisementLivingRight[0].url} alt="" />
                  //   </a>:null
                }
              </div>
            </div>
          </div>
          <div className="detail-care">
            <div className="detail-care__left">
              <div className="detail-care__title">
                <h2>
                  <img src="/img/3color.png" alt="???nh 3 m??u" />
                  B???N C?? TH??? QUAN T??M
                </h2>
              </div>
              {arraykhac.map((x, y) =>
                y < 30 ? <Care key={x.id} {...x}></Care> : null
              )}
            </div>
            <div className="detail-care__right" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Index;
