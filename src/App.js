import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Home from "./Home/home"
import NavBar from './navbar/navvar'
import Addarticles from "./addArticles/addarticles"
import Pages from "./pages/pages"
import Footer from './footer/footer'
import Publish from './aboutpages/publishwithus'
import Privacy from './aboutpages/privacy'
import Callus from './aboutpages/callus'
import Disclaimer from './aboutpages/Disclaimer'
import Terms from './aboutpages/Terms'
import About from './aboutpages/About'
import Error from './aboutpages/error'
 
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path="/" ></Route>
        <Route element={<Home/>} path="/home" ></Route>
        <Route element={<Addarticles/>} path="/addarticles" ></Route>
        <Route element={<Pages/>} path="/Pages/:id" ></Route>
        <Route path="/Publish-With-us" element={<Publish/>} ></Route>
     <Route path="/privacy-policy" element={<Privacy/>} ></Route>
     <Route path="/contact-us" element={<Callus/>} ></Route>
     <Route path="/About-Us" element={<About/>} ></Route>
     <Route path="/Disclaimer" element={<Disclaimer/>} ></Route>
     <Route path="/Terms-of-Service" element={<Terms/>} ></Route>
     <Route path="/Custom404" element={<Error/>} ></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
