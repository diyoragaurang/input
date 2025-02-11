import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([{ name: "", product: "", price: "" }]);

  const handleChange = (e) => 
    const { name, value } = e.target;
    setData([{ ...data[0], [name]: value }, ...data.slice(1)]);
  };

  const handleSave = () => {
    if (data[0].name && data[0].product && data[0].price) {
      setData([{ name: "", product: "", price: "" }, ...data]);
    }
  };

  const handleEdit = (index) => {
    setData([data[index + 1], ...data.slice(0, index + 1), ...data.slice(index + 2)]);
  };

  const handleDelete = (index) => {
    setData([data[0], ...data.slice(1, index + 1), ...data.slice(index + 2)]);
  };

  return (
    <>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.slice(1).map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}

            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={data[0].name}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="product"
                  placeholder="Enter Product"
                  value={data[0].product}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  value={data[0].price}
                  onChange={handleChange}
                />
              </td>
              <td>
                <button onClick={handleSave}>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
