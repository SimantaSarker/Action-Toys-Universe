const AllToysRow = ({ toy }) => {
  const { seller, name, subCategory, price, quantity, _id } = toy;
  return (
    <tr>
      <td>{seller}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-success">Details</button>
      </td>
    </tr>
  );
};

export default AllToysRow;
