import "./styles/reset.css"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header";
import Bedroom from "./components/bedroom/Bedroom";
import Media from "./components/media/Media";
import Selection from "./components/selection/Selection";
import Product from "./components/product/Product";
import Footer from "./components/footer/Footer"

    


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header /> 
      <Bedroom />
      <Media/>
      <Selection />
      <Product />
       <Footer />
      </div>
  );
};

    

export default App;
