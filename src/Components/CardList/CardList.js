import React from "react";
import Card from "../Card/Card";

const CardList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            company={user.company.name}
            address={user.address}
            website={user.website}
          />
        );
      })}
    </div>
  );
};

export default CardList;
