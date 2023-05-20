import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysCard from "./MyToysCard";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  // const [sorting, setSorting] = useState("");
   const email=user?.email;
   const sortEmail={email};
   useTitle("MyToys")




  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);





  const handleSort = (sorting) => {
    fetch(`http://localhost:5000/sorts/${sorting}`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(sortEmail)
    })
    .then((res)=>res.json()).then((data)=>setMyToys(data))

  };

  
  return (
    <div>
      <div className="mx-auto">
        <button
          className="btn "
          onClick={() => {
            // setSorting("-1");
            handleSort("-1");
          }}
        >
          ASC
        </button>
        <button
          className="btn "
          onClick={() => {
            // setSorting("1");
            handleSort("1");
          }}
        >
          DSC
        </button>
      </div>
      <div className="overflow-x-auto mt-10 home">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToysCard
                key={toy._id}
                toy={toy}
                myToys={myToys}
                setMyToys={setMyToys}
              ></MyToysCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
