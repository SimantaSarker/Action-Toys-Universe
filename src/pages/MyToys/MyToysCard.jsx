const MyToysCard = ({toy}) => {
  console.log(toy);
  const{details,email,name,photo,price,quantity,rating,seller,subCategory}=toy
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
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
  );
};

export default MyToysCard;