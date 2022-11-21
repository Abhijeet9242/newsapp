import "./NewsDetails.css";
import { useSelector } from "react-redux";
import "./News.css";

const NewsDetails = () => {
  const selectedNews = useSelector((store) => store.selectedNews);

  return (
    <div className="contdiv contdivdetails">
      <div className="contitem contitemdetails">
        <div className="imgdiv">
          <img src={selectedNews.urlToImage} alt="" />
        </div>
        <p className="sourcename">{selectedNews.source.name}</p>
        <div className="titlediv">
          <h3 className="title">{selectedNews.title}</h3>
          <p className="para">{selectedNews.description}</p>
        </div>
        <div className="author">
          <p>{selectedNews.author}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
