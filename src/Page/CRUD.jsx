import React, { useEffect, useState } from "react";
import axios from "axios";
const CRUD = () => {
  const [user, setUser] = useState([]);

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
  });

  const [buttonStatus, setButtonStatus] = useState(true);
  // Input handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

//   post api
  const handleSubmit = async (e) => {
    console.log(formdata);

    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4040/user", formdata);
      console.log("Post api", response.data.data);

      setUser((pre) => [...pre, formdata]);

      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.log("Error in post api", error.message);
    }
  };
// get api
  const getUserAPI = async () => {
    try {
      const response = await axios.get("http://localhost:4040/showuser");

      console.log("get user", response.data.data);
      setUser(response.data.data);
    } catch (error) {
      console.log("Error in get api", error.message);
    }
  };
// delete api
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4040/deleteuser/${id}`
      );

      setUser((user) => user.filter((list) => list._id != id));

      console.log("Delete user", response);
    } catch (error) {
      console.log("Error delete api", error.message);
    }
  };

  const handleEdit = (list) => {
    setFormData(list);
    setButtonStatus(false);
  };

  const handleCancel = () => {
    setButtonStatus(true);
    setFormData({
      name: "",
      email: "",
    });
  };

//   Update api

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4040/updateuser/${formdata._id}`,
        formdata
      );
      console.log("Put list", response.data.data);

      const updateData = response.data.data;

      setUser((user) =>
        user.map((list) => (list._id === updateData._id ? updateData : list))
      );

      handleCancel();
    } catch (error) {
      console.log("Error in put api", error.message);
    }
  };

  useEffect(() => {
    getUserAPI();
  }, []);

  return (
    <div>
      <h2>CRUD Operation</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your Name</label>
          <input
            type="text"
            className="border-2 p-3 rounded-lg"
            name="name"
            value={formdata.name}
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            className="border-2 p-3 rounded-lg"
            name="email"
            value={formdata.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <br />
          <br />

          {buttonStatus ? (
            <input
              type="submit"
              className="bg-blue-500 p-4 rounded-2xl"
              value="Submit List"
            />
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleUpdate}
                className="bg-blue-500 p-4 rounded-2xl"
              >
                Update
              </button>
              <button
                onClick={handleCancel}
                className="bg-blue-500 p-4 rounded-2xl"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>

      <div className="p-4">
        <table>
          <thead>
            <tr className="grid gap-52 grid-cols-5">
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.length > 0 ? (
              user.map((list, index) => (
                <tr key={index} className="grid mt-5 gap-52 grid-cols-5">
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(list);
                      }}
                      className="bg-green-500 cursor-pointer p-3 rounded"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(list._id);
                      }}
                      type="button"
                      className="bg-red-500 cursor-pointer p-3 rounded"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Data not found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRUD;
