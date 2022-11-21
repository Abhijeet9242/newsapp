import "./App.css";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewsDetails from "./components/NewsDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
