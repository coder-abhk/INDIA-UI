import Header from "./Header";
import Main from "./Main";
import "../static/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header label="INDIA" />
      <Main
        headline_one="INDIA, LAND OF"
        headline_two="LOVE AND GOD."
        quote_one="You must visit once in your life to feel heaven on Earth. INDIA is spiritual, religious and democratic country."
        quote_two=" Environment of LOVE and EMOTION teaches you meaning of family."
      />
    </div>
  );
};

export default Homepage;
