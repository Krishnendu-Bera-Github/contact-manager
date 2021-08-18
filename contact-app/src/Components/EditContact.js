import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const EditContact = (props) => {
  const updateContactHandler = props.updateContactHandler;
  const history = useHistory();
  const {
    id: updateId,
    name: updateName,
    email: updateEmail,
  } = props.location.state.contact;

  const [name, setName] = useState(updateName);
  const [email, setEmail] = useState(updateEmail);

  const update = (event) => {
    event.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    // console.log(name, email);
    const contact = {
      id: updateId,
      name,
      email,
    };

    updateContactHandler(contact);
    setName("");
    setEmail("");
    history.push("/");
  };

  return (
    <div>
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form onSubmit={update} className="ui form">
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
            <label>Name</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
