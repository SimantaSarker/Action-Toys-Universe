import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
  const { seller, name, subCategory, price, quantity,_id} = toy;
  return (
    <tr data-aos="fade-up-right"  data-aos-easing="linear"
    data-aos-duration="1500">
      <td>{seller}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toys/${_id}`}><button className="btn btn-success">Details</button></Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
