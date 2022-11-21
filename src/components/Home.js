import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="contentmaindiv">
      <Link to="/news">
        <div className="contentdiv">
          <p className="spinner rotate">Go To News</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
