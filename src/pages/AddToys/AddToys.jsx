import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const subCategory = form.categories.value;
    const photo = form.photo.value;
    console.log(
      name,
      email,
      quantity,
      seller,
      price,
      rating,
      subCategory,
      photo
    );
    const toy = {
      name,
      email,
      quantity,
      seller,
      price,
      rating,
      subCategory,
      photo,
    };
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId)
        {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully insert data into database',
            showConfirmButton: false,
            timer: 1500
          })
          form.reset();
        }
      });
  };

  return (
    <form onSubmit={handleAddToys}>
      <div className="md:flex md:gap-3 mt-10">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text"> Name:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              required
              name="name"
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
              required
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
              name="seller"
              readOnly
              defaultValue={user?.displayName}
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
              name="email"
              readOnly
              defaultValue={user?.email}
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
              placeholder="Enter Rating "
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
            <option value="White">Avengers</option>
            <option value="Transformers">Transformers</option>
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
              name="photo"
              placeholder="Enter Toys URL "
              className="input input-bordered w-full"
            />
          </label>
        </div>
      </div>

      <div>
        <input
          type="submit"
          defaultValue="Add Coffee"
          className="btn btn-block mt-5"
        />
      </div>
    </form>
  );
};

export default AddToys;
