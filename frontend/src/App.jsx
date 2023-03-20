import React ,{useState}from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Alert from "./pages/Alert";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";




import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";

const App = (props) => {
  // const {showAlert} = props

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

    return (
      <>
  <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Register" element={<Register showAlert={showAlert}/>}></Route>
          <Route path="/Login" element={<Login showAlert={showAlert}/>}></Route>
          <Route path="/Product" element={<Products/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/ProductList" element={<ProductList/>}></Route>
           
          
        </Routes>
        <Footer/>

  </Router>
  </>
    )
  
  
};

export default App;











// "author": "Gyan",
// "license": "ISC",
// "bugs": {
//   "url": "https://github.com/safak/youtube/issues"
// },
// "homepage": "https://github.com/safak/youtube#readme"
// }
