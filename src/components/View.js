import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import "../static/View.css";
import view_one from "../static/images/gallery/01.jpg";
import view_two from "../static/images/gallery/02.jpg";
import view_three from "../static/images/gallery/03.jpg";
import view_four from "../static/images/gallery/04.jpg";
import view_five from "../static/images/gallery/05.jpg";
import view_six from "../static/images/gallery/06.jpg";

const View = () => {
  const view_img1 = useRef(null);
  const view_img2 = useRef(null);
  const view_img3 = useRef(null);
  const view_img4 = useRef(null);
  const view_img5 = useRef(null);
  const view_img6 = useRef(null);

  useEffect(() => {
    const images = [
      view_img1.current,
      view_img2.current,
      view_img3.current,
      view_img4.current,
      view_img5.current,
      view_img6.current,
    ];
    // callback
    const callback = (entries) => {
      entries.forEach((entry) => {
        const tl = gsap.timeline({ defaults: { duration: 1.2 } });
        if (entry.intersectionRatio > 0) {
          tl.to(entry.target, {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "Power2.easeOut",
          });
        }
      });
    };
    // options
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };
    const observer = new IntersectionObserver(callback, options);
    images.forEach((image) => {
      observer.observe(image);
    });
  }, []);

  return (
    <div className="view_container">
      <h1 className="view_label">VIEW</h1>
      <div className="view_inner_container">
        <div className="stretched_ele">
          <img ref={view_img1} className="view_img" src={view_one} alt="" />
        </div>
        <div className="three_col_img">
          <div className="col_one">
            <img ref={view_img2} className="view_img" src={view_two} alt="" />
          </div>
          <div className="col_two">
            <img ref={view_img3} className="view_img" src={view_three} alt="" />
          </div>
          <div className="col_third">
            <img ref={view_img4} className="view_img" src={view_four} alt="" />
          </div>
        </div>
        <div className="two_col_img">
          <div className="col_one">
            <img ref={view_img5} className="view_img" src={view_five} alt="" />
          </div>
          <div className="col_two">
            <img ref={view_img6} className="view_img" src={view_six} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
