import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, getSelectedNews } from "../redux/action";
import { useNavigate } from "react-router-dom";
import "./News.css";

const News = () => {
  const [page, setPage] = useState(1);
  const [cato, setCato] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const news = useSelector((store) => store.news);

  useEffect(() => {
    dispatch(fetchNews("", 0));
  }, []);

  useEffect(() => {
    dispatch(fetchNews(cato, page));
  }, [page]);

  const handleSelectedNews = (data) => {
    dispatch(getSelectedNews(data));
    navigate("/newsDetails");
  };

  const handleCato = () => {
    setPage(1);
    dispatch(fetchNews(cato, page));
  };

  const handlePage = (val) => {
    if (val === -1) {
      setPage((pre) => pre - 1);
      dispatch(fetchNews(cato, page));
    } else if (val === 1) {
      setPage((pre) => pre + 1);
      dispatch(fetchNews(cato, page));
    }
  };

  // console.log(page)

  return (
    <>
      <div className="nav">
        <div className="navdiv">
          <div className="ipdiv">
            <input
              type="text"
              placeholder="enter keyword..."
              onChange={(e) => setCato(e.target.value)}
            />
          </div>
          <div className="btndiv">
            <button className="btnnav" onClick={handleCato}>
              search
            </button>
          </div>
        </div>
      </div>

      <div className="cont">
        <div className="contdiv">
          {news.map((newss, i) => (
            <div
              key={i}
              className="contitem"
              onClick={() => handleSelectedNews(newss)}
            >
              <div className="imgdiv">
                <img src={newss.urlToImage} alt="" />
              </div>
              <p className="sourcename">{newss.source.name}</p>
              <div className="titlediv">
                <h3 className="title">{newss.title}</h3>
                <p className="para">{newss.description}</p>
              </div>
              <div className="author">
                <p className="authortext">{newss.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="paginationbtndiv">
          <button
            disabled={page <= 1 ? true : false}
            onClick={() => handlePage(-1)}
          >
            prev
          </button>
          <button
            disabled={page >= 4 ? true : false}
            onClick={() => handlePage(1)}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default News;
