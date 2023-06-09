import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ToysDetails = () => {
  const toyDetails = useLoaderData();
  const {details,email,name,photo,price,quantity,rating,seller}=toyDetails
  useTitle("Action Universe | ToyDetails")

  return (
    <div className="card lg:card-side shadow-xl  mx-auto  md:h-[70vh]   home">
      <figure className="md:w-1/2  "  data-aos="fade-up-right"  data-aos-easing="linear"
    data-aos-duration="1500">
        <img src={photo} alt="Album" className=" md:h-[80%]  object-contain " />
      </figure>
      <div className="card-body md:w-1/2 "  data-aos="fade-up-left"  data-aos-easing="linear"
    data-aos-duration="1500">
        <p >Toy Name:{name}</p>
        <p>Price: {price}</p>
        <p>Quantity:{quantity}</p>
        <p >Seller Email:{email}</p>
        <p>Seller Name:{seller}</p>
        <p>Toy Details:{details}</p>
        <div className="card-actions justify-end ">
          <button className="btn bg-[white] text-[black]">Rating:{rating}</button>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
