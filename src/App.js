import Header from "./components/Header"
import Banner from "./components/Banner"
import Tipbar from "./components/Tipbar";
import Shelf from "./components/Shelf";
import SubBanner from "./components/SubBanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import "./global.css"

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Tipbar />
      <Shelf />
      <SubBanner />
      <Newsletter />
      <Footer />
      <Modal />
    </>
  );
}

export default App;
