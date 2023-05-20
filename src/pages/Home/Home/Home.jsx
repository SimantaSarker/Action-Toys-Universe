
import Banner from "../Banner/Banner";
import Client from "../ExtraSections/Client";
import Quality from "../ExtraSections/Quality";
import Gallery from "../Gallery/Gallery";
import '../Home/Home.css'
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Quality></Quality>
      <Client></Client>
   
    </div>
  );
};

export default Home;