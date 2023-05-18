import { useLoaderData } from "react-router-dom";
import AllToysRow from "../AddToys/AllToysRow";

const AllToys = () => {
  const allToys=useLoaderData();

  return (
  <div className="overflow-x-auto my-2 ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
         <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Details</th>
       
      </tr>
    </thead>
    <tbody>
    {
      allToys.map((toy)=>(<AllToysRow key={toy._id} toy={toy}></AllToysRow>))
    }
   
    </tbody>
  </table>
</div>
  );
};

export default AllToys;