
import AllToysRow from "../AddToys/AllToysRow";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys,setAllToys]=useState([]);
  const [search,setSearch]=useState("");

useEffect(()=>{
  fetch("http://localhost:5000/toys")
  .then((res)=>res.json())
  .then((data)=>setAllToys(data))
},[])


const handleToyNameSearch=()=>{
  fetch(`http://localhost:5000/toysSearchByToyName/${search}`)
  .then((res)=>res.json()).then((data)=>setAllToys(data))
  
}


  return (
  <div className="overflow-x-auto my-2 ">
    <div>
      <input type="text"  className="text-center p-1 bg-red-400" onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={handleToyNameSearch}>Search</button>
    </div>
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