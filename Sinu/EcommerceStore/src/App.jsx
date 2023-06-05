import "./App.css";
import Header from "../src/components/Header"
import Home from "./modules/Home"
import Foot from "./components/Footer/Foot";
import {Routes, Route} from "react-router-dom";
import Item from "./modules/Home/Products/Item";
import Prod from "./modules/Home/Products/Prod";
import Category from "./components/Category/Category";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/prod/:id" element={<Prod/>}/>
      <Route path="/item" element={<Item/>}/>
      
      </Routes>
      {/* <Home/> */}
      <Foot/>
    </div>
  );
}

export default App;
