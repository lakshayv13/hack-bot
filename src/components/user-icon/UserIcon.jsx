import React from "react";
import { FaUser } from "react-icons/fa6";

import "./userIcon.css";

function UserIcon(props) {
  return (
      <FaUser style={{padding: props.padding}} className="sidebar-user-icon" />
  );
}

export default UserIcon;
