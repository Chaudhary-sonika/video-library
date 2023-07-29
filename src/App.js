import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/sidebar";
import { Home } from "./pages/home/Home";
import { Explore } from "./pages/explore/Explore";
import { Playlist } from "./pages/playlist/Playlist";
import { Watchlater } from "./pages/watchlater/Watchlater";
import { DetailCategory } from "./pages/detailCategory/DetailCategory";

import { SingleVideo } from "./pages/singleVideos/SingleVideo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/watch" element={<Watchlater />} />
          <Route path="/detailcategory" element={<DetailCategory />} />
          <Route path="/siglevideo" element={<SingleVideo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
