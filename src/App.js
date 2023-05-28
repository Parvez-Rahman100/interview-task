import "./App.css";
import BestProducts from "./Components/BestProducts/BestProducts";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import NewArrival from "./Components/NewArrival/NewArrival";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <NewArrival />
      <BestProducts />
    </div>
  );
}

export default App;
