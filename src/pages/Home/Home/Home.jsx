import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Client from "../ExtraSections/Client";
import Quality from "../ExtraSections/Quality";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Quality></Quality>
      <Client></Client>
      <Footer></Footer>
    </div>
  );
};

export default Home;