import "../static/Header.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import plant from "../static/images/plant.svg";

const Header = ({ label }) => {
  return (
    <div className="header">
      <h3 className="header_label">
        {label}
        <ArrowRightAltIcon fontSize="small" />
      </h3>
      <img id="plant_" src={plant} alt="" />
    </div>
  );
};

export default Header;
