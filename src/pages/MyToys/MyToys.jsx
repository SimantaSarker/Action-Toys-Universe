import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`  http://localhost:5000/myToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  console.log(myToys);

  return (
    <div className="overflow-x-auto mt-10 home">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Toy Image</th>
            <th>Toy Name</th>
            <th>Seller Name</th>
            <th>Email</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            {/* <th>Details</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            { 
            myToys.map((toy)=><MyToysCard key={toy._id} toy={toy}></MyToysCard>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
