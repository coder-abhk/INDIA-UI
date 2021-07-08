import "../static/Main.css";
import NavigateButton from "./NavigateButton";

const Main = ({ headline_one, headline_two, quote_one, quote_two }) => {
  return (
    <div className="main_wrapper">
      <h1 className="headline_one">{headline_one}</h1>
      <h1 className="headline_two">{headline_two}</h1>
      <div className="quote_wrapper">
        <div className="quote_one">{quote_one}</div>
        <div className="quote_two">{quote_two}</div>
      </div>
      <NavigateButton />
      <div className="main_base"></div>
    </div>
  );
};

export default Main;
