import "./App.css";
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SearchAppBar from "./components/AppBar";
import Tour from "./pages/Tour";


function App() {
  return (
    // <Home/>
    <BrowserRouter>
    <SearchAppBar />
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/tour" element={<Tour/>}/>


    </Routes>
    

    

    </BrowserRouter>

  );
}

export default App;
