import React from "react";
import { Link } from "react-router-dom";
import image from "../images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={image} alt="user" />
      <div className="content">
        <Link to={{ pathname: `/contact/${id}`, contactDetail: contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        onClick={() => clickHandler(contact.id)}
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
      ></i>
      <Link to={{ pathname: `/edit`, state: {contact} }}>
        <i
  
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
