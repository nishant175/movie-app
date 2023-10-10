import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { useSelector } from "react-redux";
import "../src/assets/css/style.css";
import { useCookies } from "react-cookie";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";

function App() {
  const [cookies, setCookie] = useCookies();
  const nightMode = cookies.nightMode;
  return (
    <div className={`${nightMode ? "night-mode" : "day-mode"}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:categoryType" element={<Category />} />
          <Route path="/detail/:movieName" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
