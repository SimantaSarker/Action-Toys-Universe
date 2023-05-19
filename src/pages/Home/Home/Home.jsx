
import Banner from "../Banner/Banner";
import Client from "../ExtraSections/Client";
import Quality from "../ExtraSections/Quality";
import Gallery from "../Gallery/Gallery";
import '../Home/Home.css'

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Gallery></Gallery>
      <Quality></Quality>
      <Client></Client>
   
    </div>
  );
};

export default Home;