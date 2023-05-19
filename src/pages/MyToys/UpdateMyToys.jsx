import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateMyToys = () => {
  const toy = useLoaderData();
  const{email,name,photo,price,quantity,rating,seller,_id,details}=toy;
  console.log(_id)

  const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const price=form.price.value;
    const quantity=form.quantity.value;
    const details=form.details.value;
    const updateToys={price,quantity,details};

    fetch(`http://localhost:5000/toys/${_id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updateToys)

    })
    .then((res)=>res.json())
    .then((data)=>{
      if (data.modifiedCount) {
        Swal.fire({
          title: "Success",
          text: "Price,details,quantity are  updated successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
      }
    })


  }

  return (
    <form className="home" onSubmit={handleUpdate}>
      <div className="md:flex md:gap-3 mt-10">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text"> Name:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
               readOnly
              defaultValue={name}
              placeholder="Enter Toys name "
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text"> Quantity:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Enter Available Quantity "
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>

      {/* form row with supplier and taste  */}
      <div className="md:flex md:gap-3">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Seller:</span>
          </label>
          <label className="input-group ">
            <input
              type="text"
              readOnly
              defaultValue={seller}
              placeholder="Enter seller Name "
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text"> Email:</span>
          </label>
          <label className="input-group">
            <input
              type="email"
              readOnly
              defaultValue={email}
              placeholder="Enter Seller Email "
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>

      <div className="md:flex md:gap-3 mt-10">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text"> Price:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter Toys Price "
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text"> Rating:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="rating"
              defaultValue={rating}
              readOnly
              placeholder="Enter Toys Rating "
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>

      {/* form row with category and details */}
      <div className="md:flex md:gap-3">
        <div className="form-control w-1/2 mx-auto my-3 text-xl">
          <label className="label">
            <span className="label-text text-xl">Sub-Category</span>
          </label>
          <select id="categories">
            <option defaultValue={true}>Marvel</option>
            <option value="StarWars">Star Wars</option>
            <option value="Transformers">Transformers</option>
            <option value="Dc">DC</option>
          </select>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text"> Details:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter  Details "
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>
      {/* form row with photo */}
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Photo URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              readOnly
              defaultValue={photo}
              placeholder="Enter Toys URL "
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>

      <div>
        <input
          type="submit"
          defaultValue="Update Toy"
          className="btn btn-block mt-5"
        />
      </div>
    </form>
  );
};

export default UpdateMyToys;
