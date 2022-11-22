import axios from "axios";
import { GET_NEWS, GET_SELECTED_NEWS } from "./actionTypes";

export const fetchNews = (cato, page) => (dispatch) => {
  let link =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=68ed4c9448ed4460a987bb80f109bb4e";

  if (cato === "") {
    cato = "health";
    link = `https://newsapi.org/v2/top-headlines?country=in&category=${cato}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    axios
      .get(link)
      .then((res) => {
        dispatch(getNews(res.data.articles));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  } else {
    console.log(page + "page");
    link = `https://newsapi.org/v2/top-headlines?country=in&category=${cato}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    axios
      .get(link)
      .then((res) => {
        // console.log(res)
        dispatch(getNews(res.data.articles));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
};

const getNews = (payload) => {
  return {
    type: GET_NEWS,
    payload: payload,
  };
};

export const getSelectedNews = (payload) => {
  return {
    type: GET_SELECTED_NEWS,
    payload: payload,
  };
};
