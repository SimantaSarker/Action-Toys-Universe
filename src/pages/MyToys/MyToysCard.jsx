import { FiDelete } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyToysCard = ({toy,myToys,setMyToys}) => {
  const{email,name,photo,price,quantity,rating,seller,subCategory,_id,details}=toy;



  const handleDelete=(_id)=>{
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`,{
          method:"DELETE",
       
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
          if(data.deletedCount>0)
          {
            Swal.fire(
              'Deleted!',
              'Toy has been deleted successfully.',
              'success'
            )
            const remaining=myToys.filter(toy=>toy._id!==_id);
            setMyToys(remaining)
          }
        })
      }
    })

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
        <td>{details}</td>
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