import { useEffect, useRef } from "react";

const ArticleSection = ({
  article_label,
  article_content,
  img_one,
  img_two,
}) => {
  const label = useRef(null);
  const content_paras = useRef(null);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let winHeight = window.innerHeight / 1.4;
        let elements = [label.current, content_paras.current.childNodes[0]];
        elements.forEach((ele) => {
          let eleHeight = ele.getBoundingClientRect().top;
          if (eleHeight <= winHeight) {
            ele.style.opacity = 1;
            ele.style.transform = `translateY(${0}px)`;
          } else {
            ele.style.opacity = 0;
            ele.style.transform = `translateY(${25}px)`;
          }
        });
      },
      false
    );
  }, []);

  return (
    <div className="article_inner">
      <div className="article_content__wrapper">
        <div className="article_content">
          <div className="header_wrapper">
            <h1 ref={label}>{article_label}</h1>
          </div>
          <div className="paras" ref={content_paras}>
            {article_content.split(".").map((para, idx) => (
              <p className="content_para" key={idx}>
                {para.concat(".")}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="article_images">
        <img id="article_img_one" className="img_" src={img_one} alt="" />
        <img id="article_img_two" className="img_" src={img_two} alt="" />
      </div>
    </div>
  );
};

export default ArticleSection;
