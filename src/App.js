import "./App.css";
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SearchAppBar from "./components/AppBar";


function App() {
  return (
    // <Home/>
    <BrowserRouter>
    <SearchAppBar />
    <Routes>
    <Route path ="/" element={<Home/>}/>

    </Routes>
    

    

    </BrowserRouter>

  );
}

export default App;
