import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ShopByCard = ({ singleData }) => {
  const {user}=useContext(AuthContext);
  const { photo, name, price, rating, _id } = singleData;


  const handleAlert=id=>{
   if(!user?.email)
   {
   return  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'You have to log in first to view details!',

  })
   }
  }
  return (
    <div className="card  bg-base-100 shadow-xl mt-12 md:h-[70vh] md:w-96 mx-auto">
      <figure className="h-full object-cover">
        <img src={photo} alt="Shoes" className=" h-full w-full" />
      </figure>
      <div className="card-body">
        <h2 className=" text-3xl ">{name}</h2>

        <div className="card-actions justify-between mt-6">
          <div>
            <p>Price:{price}</p>
            <p>Rating:{rating}</p>
          </div>
          <Link to={`/toys/${_id}`}>
            <button className="btn btn-success" onClick={()=>handleAlert(_id)}>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByCard;
