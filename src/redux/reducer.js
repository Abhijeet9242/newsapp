import { GET_NEWS, GET_SELECTED_NEWS } from "./actionTypes";

const newsState = [];

export const newsReducer = (state = newsState, action) => {
  switch (action.type) {
    case GET_NEWS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const selectedNews = {};

export const selectedNewsReducer = (state = selectedNews, action) => {
  switch (action.type) {
    case GET_SELECTED_NEWS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
