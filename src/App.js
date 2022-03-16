import "./App.css";
import FrontPage from "./Components/FrontPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<FrontPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
