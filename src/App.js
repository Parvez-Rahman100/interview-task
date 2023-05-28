import "./App.css";
import Article from "./Components/Article/Article";
import BestProducts from "./Components/BestProducts/BestProducts";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Menus from "./Components/Menus/Menus";
import Navbar from "./Components/Navbar/Navbar";
import NewArrival from "./Components/NewArrival/NewArrival";
import TopRated from "./Components/TopRated/TopRated";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="bg-[#F5F5F5]">
        <Hero />
        <NewArrival />
        <BestProducts />
        <TopRated />
        <Article />
        <div className="relative">
          <div className="absolute top-[-23px] left-[50%] z-10 translate-x-[-50%] translate-y-[-32%]">
            <Menus />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
