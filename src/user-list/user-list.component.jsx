import React from "react";
// import "./user-list.styles.css";

const UserList = (props) => {
  return props.users.map((user) => {
    return (
      <tr>
        <td>{user.id}.</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.company.name}</td>
        <td>{user.address.zipcode}</td>
      </tr>
    );
  });
};

export default UserList;
