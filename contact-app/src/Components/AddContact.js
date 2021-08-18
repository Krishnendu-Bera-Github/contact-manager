import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddContact = ({addContactHandler} ) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (event) => {
    event.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    // console.log(name, email);
    const contact = {
      name,
      email,
    };
    addContactHandler(contact);
    setName("");
    setEmail("");
    history.push("/");
  };

  return (
    <div>
      <div className="ui main">
        <h2>Add Contact</h2>
        <form onSubmit={add} className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
