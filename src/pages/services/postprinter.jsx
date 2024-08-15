import React from "react";
import postprinter from "../../assets/postprinter1.png";

export const PostPrinter = () => {
  return (
    <div className="postprinter_box">
      <div className="postprinter_header_sec">
        <div className="postprinter_header_content">
          <img src={postprinter}></img>
          <h3>HP Poster Printer</h3>
          <img src={postprinter}></img>
        </div>
      </div>
    </div>
  );
};
