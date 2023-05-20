import duck from "../../../assets/duck.svg";
import image1 from "../../../assets/spider.jpg";
import image2 from "../../../assets/thor.jpg";
import image3 from "../../../assets/login-btn-1.jpg";
import image4 from "../../../assets/root.jpg";
const Client = () => {
  return (
    <div className="mt-20 ">
      <div className="divider text-2xl ">Testimonials</div>
      <div className="mb-12 md:flex flex-wrap ">
        <div
          className=" bg-[#66CCFF]  rounded gap-6 md:flex flex-col items-center justify-center border-8  md:w-[40%] mx-auto "
          data-aos="zoom-in-up "
        >
          <h1 className="text-5xl">Client Say s</h1>

          <div className="divider">
          </div>
          <div className="avatar">
              <div className="w-20 rounded-full">
                <img src={duck} className="object-cover " />
              </div>
            </div>
        </div>

        <div data-aos="zoom-in-up" className="md:w-1/2 mx-auto">
          <div className="carousel  ">
            <div id="slide11" className="carousel-item relative w-full">
              <div className="card card-compact w-full bg-base-100 shadow-xl items-center justify-center">
                <div className="avatar">
                  <div className="w-36 rounded-full">
                    <img src={image1} />
                  </div>
                </div>
                <div className="card-body items-center justify-center w-[70%]">
                  <h2 className="card-title">Mical Ford</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt facere temporibus quidem aut dolores corrupti
                    officia quisquam dolor aliquam? Soluta labore commodi
                    tempora, suscipit aperiam quod nihil voluptas accusamus?
                    Deserunt, corrupti. Qui esse consectetur odit odio, nulla
                    deleniti modi voluptate!
                  </p>
                </div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide14" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide12" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide12" className="carousel-item relative w-full">
              <div className="card card-compact w-full bg-base-100 shadow-xl items-center justify-center">
                <div className="avatar">
                  <div className="w-36 rounded-full">
                    <img src={image2} />
                  </div>
                </div>
                <div className="card-body items-center justify-center w-[70%]">
                  <h2 className="card-title">Mical Ford</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt facere temporibus quidem aut dolores corrupti
                    officia quisquam dolor aliquam? Soluta labore commodi
                    tempora, suscipit aperiam quod nihil voluptas accusamus?
                    Deserunt, corrupti. Qui esse consectetur odit odio, nulla
                    deleniti modi voluptate!
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide11" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide13" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide13" className="carousel-item relative w-full">
              <div className="card card-compact w-full bg-base-100 shadow-xl items-center justify-center">
                <div className="avatar">
                  <div className="w-36 rounded-full">
                    <img src={image3} />
                  </div>
                </div>
                <div className="card-body items-center justify-center w-[70%]">
                  <h2 className="card-title">Mical Ford</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt facere temporibus quidem aut dolores corrupti
                    officia quisquam dolor aliquam? Soluta labore commodi
                    tempora, suscipit aperiam quod nihil voluptas accusamus?
                    Deserunt, corrupti. Qui esse consectetur odit odio, nulla
                    deleniti modi voluptate!
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide12" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide14" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide14" className="carousel-item relative w-full">
              <div className="card card-compact w-full bg-base-100 shadow-xl justify-center items-center">
                <div className="avatar">
                  <div className="w-36 rounded-full">
                    <img src={image4} />
                  </div>
                </div>
                <div className="card-body items-center justify-center w-[70%]">
                  <h2 className="card-title">Mical Ford</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt facere temporibus quidem aut dolores corrupti
                    officia quisquam dolor aliquam? Soluta labore commodi
                    tempora, suscipit aperiam quod nihil voluptas accusamus?
                    Deserunt, corrupti. Qui esse consectetur odit odio, nulla
                    deleniti modi voluptate!
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide13" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide10" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// bg-[#66CCFF]

export default Client;
