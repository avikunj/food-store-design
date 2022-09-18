

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/home/home";



function App() {
  return (
    <div className="FurnitureDesignHomePage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
