import image1 from '../../../assets/spider.jpg'
import image2 from '../../../assets/thor.jpg'
import image3 from '../../../assets/login-btn-1.jpg'
import image4 from '../../../assets/root.jpg'
import useTitle from '../../../hooks/useTitle';

const Banner = () => {
  //-------------Dynamic Title added---------------
  useTitle("Home-Action Universe")
  return (
    <div className="carousel w-full h-[700px] mt-7">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={image4} className=" w-full rounded object-cover" />
      <div className="rounded absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle bg-red-600">❮</a> 
        <a href="#slide2" className="btn btn-circle bg-red-600">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src={image1} className="w-full rounded object-cover" />
      <div className=" rounded absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle bg-red-600">❮</a> 
        <a href="#slide3" className="btn btn-circle bg-red-600">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full rounded">
      <img src={image2} className="w-full rounded object-cover" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle bg-red-600">❮</a> 
        <a href="#slide4" className="btn btn-circle bg-red-600">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full rounded">
      <img src={image3} className="w-full rounded object-cover" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle bg-red-600">❮</a> 
        <a href="#slide1" className="btn btn-circle bg-red-600">❯</a>
      </div>
    </div>
  </div>
  );
};

export default Banner;