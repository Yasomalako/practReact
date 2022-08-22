import "./user.css";
import React, { useState } from "react";
import AddUser from "../adduser/AddUser.component";
function User() {
  return (
    <div className="user">
      <h1>user</h1>
      <AddUser/>
    </div>
  );
};

export default User;
