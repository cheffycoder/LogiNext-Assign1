import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${props.name}.svg?options[mood][]=happy`}
        alt="avatar"
      />
      <div className="card-body">
        <h2>{props.name}</h2>
        <ul>
          <li>
            <span>Email: </span>
            {props.email}
          </li>
          <li>
            <span>Phone: </span>
            {props.phone}
          </li>
          <li>
            <span>Company: </span>
            {props.company}
          </li>
          <li>
            <span>Website: </span>
            {props.website}
          </li>
          <li>
            <span>Address: </span>
            {props.address.street}, {props.address.suite}, {props.address.city},{" "}
            {props.address.zipcode}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
