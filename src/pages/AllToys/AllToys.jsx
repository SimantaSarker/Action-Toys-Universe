import useTitle from "../../hooks/useTitle";
import AllToysRow from "../AddToys/AllToysRow";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [search, setSearch] = useState("");
  useTitle("AllToys");

  useEffect(() => {
    fetch("https://assignment-11-server-lilac.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleToyNameSearch = () => {
    fetch(
      `https://assignment-11-server-lilac.vercel.app/toysSearchByToyName/${search}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  return (
    <div className="overflow-x-auto mt-10 home">
      <div className="mb-5 text-center">
        <input
          type="text"
          className="input input-bordered input-info w-full max-w-xs "
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleToyNameSearch} className="ms-6">
          Search
        </button>
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
          {allToys.map((toy) => (
            <AllToysRow key={toy._id} toy={toy}></AllToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
