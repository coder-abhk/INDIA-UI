import "../static/View.css";
import view_one from "../static/images/gallery/01.jpg";
import view_two from "../static/images/gallery/02.jpg";
import view_three from "../static/images/gallery/03.jpg";
import view_four from "../static/images/gallery/04.jpg";
import view_five from "../static/images/gallery/05.jpg";
import view_six from "../static/images/gallery/06.jpg";

const View = () => {
  return (
    <div className="view_container">
      <h1 className="view_label">VIEW</h1>
      <div className="view_inner_container">
        <div className="stretched_ele">
          <img className="view_img" src={view_one} alt="" />
        </div>
        <div className="three_col_img">
          <div className="col_one">
            <img className="view_img" src={view_two} alt="" />
          </div>
          <div className="col_two">
            <img className="view_img" src={view_three} alt="" />
          </div>
          <div className="col_third">
            <img className="view_img" src={view_four} alt="" />
          </div>
        </div>
        <div className="two_col_img">
          <div className="col_one">
            <img className="view_img" src={view_five} alt="" />
          </div>
          <div className="col_two">
            <img className="view_img" src={view_six} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
