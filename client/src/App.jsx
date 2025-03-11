// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Compare from "./pages/Compare";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import Layout from "./Layout"; // Import the new Layout component
import ContactUs from "./pages/ContactUs";
import OtherServices from "./pages/OtherServices";
import Atelier from "./pages/Atelier";

function App() {
  return (
    <Router basename="/newbuild">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otherServices" element={<OtherServices />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<HomeAdmin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
