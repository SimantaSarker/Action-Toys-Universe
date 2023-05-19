import { FiDelete } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
const MyToysCard = ({toy}) => {
  const{email,name,photo,price,quantity,rating,seller,subCategory,_id}=toy;

  const handleDelete=id=>{
    console.log(id)
  }
  return (
    <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
       {name}
        </td>
        <td>{seller}</td>
        <td>{email}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        {/* <td className="overflow-hidde">{details}</td> */}
        <td>
              <div className="w-12 h-12  flex items-center">
                <button
                  className="btn btn-outline bg-gray-200 btn-xs  w-full"
                  onClick={() => handleDelete(_id)}
                >
                  <FiDelete></FiDelete>
                </button>
                <Link to={`/update/${_id}`}>
                  <button className="btn btn-outline bg-gray-200 btn-xs w-full ml-3">
                    <RxUpdate></RxUpdate>
                  </button>
                </Link>
              </div>
            </td>
      </tr>
  );
};

export default MyToysCard;