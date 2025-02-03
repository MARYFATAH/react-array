import { users } from "C:/Users/mftth/bootcamp/react/react-array/src/data/users.js";
import React, { useState } from "react";
import UserCard from "./UserCard";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Filtering = () => {
  const [activeButton, setActiveButton] = useState("all");
  const [inputAge, setInputAge] = useState("");

  let filteredUsers = users;

  if (activeButton === "women") {
    filteredUsers = users.filter((user) => user.gender === "female");
  } else if (activeButton === "men") {
    filteredUsers = users.filter((user) => user.gender === "male");
  } else if (activeButton === "name") {
    filteredUsers = [...users].sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
  } else if (activeButton === "age") {
    filteredUsers = [...users].sort((a, b) => a.dob.age - b.dob.age);
  } else if (activeButton === "olderThan") {
    filteredUsers = users.filter(
      (user) => user.dob.age > parseInt(inputAge, 10)
    );
  }

  return (
    <div className="container justify-content-center w-50">
      <h1 className="text-center m-5">Filtering</h1>
      <div className="btn-group mb-3">
        <button
          className={`btn rounded ${
            activeButton === "all" ? "active bg-primary" : ""
          }`}
          onClick={() => setActiveButton("all")}
        >
          All
        </button>
        <button
          className={`btn rounded ${
            activeButton === "women" ? "active bg-primary" : ""
          }`}
          onClick={() => setActiveButton("women")}
        >
          Women
        </button>
        <button
          className={`btn rounded ${
            activeButton === "men" ? "active bg-primary" : ""
          }`}
          onClick={() => setActiveButton("men")}
        >
          Men
        </button>
        <button
          className={`btn rounded ${
            activeButton === "name" ? "active bg-primary" : ""
          }`}
          onClick={() => setActiveButton("name")}
        >
          By Name
        </button>
        <button
          className={`btn rounded ${
            activeButton === "age" ? "active bg-primary" : ""
          }`}
          onClick={() => setActiveButton("age")}
        >
          By Age
        </button>
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter age"
          value={inputAge}
          onChange={(e) => setInputAge(e.target.value)}
        />
        <button
          className={`btn btn-secondary mt-2 ${
            activeButton === "olderThan" ? "active bg-secondary" : ""
          }`}
          onClick={() => setActiveButton("olderThan")}
        >
          Users older than...
        </button>
      </div>
      <div>
        {filteredUsers.map((user) => (
          <UserCard key={user.id.value} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Filtering;
