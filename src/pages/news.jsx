import React from "react";
import "../style/pages/news.css";
import event from "../assets/pages/news/news_header.png";
import { Slider } from "../components";

export const New = () => {
  return (
    <>
      <div className="news_box">
        <div className="news_header_sec">
          <div className="news_header_content">
            <p className="news_header_text ">News</p>
          </div>
          <hr className="news_hr"></hr>
        </div>
        <div className="news_events_sec">
          <div className="news_events_header">
            <p>Events happening soon...</p>
          </div>
          <div className="news_img_holder">
            <img src={event} className="news_img"></img>
          </div>
        </div>
        <div className="news_activities_sec">
          <div className="news_activities_header">
            <p>Activities we have done in the past</p>
          </div>
          <Slider></Slider>
        </div>
      </div>
    </>
  );
};
