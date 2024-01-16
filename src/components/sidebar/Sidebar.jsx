import React from "react";
import "./sidebar.css";
import element from "./element";
import UserIcon from "../user-icon/UserIcon";

function Element(props) {
  return (
    <li
      className="sidebar-element"
      onClick={() => {
        window.location.href = props.href;
      }}
    >
      <a className="sidebar-element-link">
        {props.icon}
        {props.name}
      </a>
    </li>
  );
}

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2 className="sidebar-heading">
        Hack<span>Bot</span>
      </h2>
      <hr className="sidebar-division" />
      <ul className="elememt-list">
        {element.map((item) => {
          return (
            <Element
              key={item.id}
              name={item.name}
              icon={item.icon}
              href={item.href}
            />
          );
        })}
      </ul>
      <div className="sidebar-user-profile">
      <UserIcon padding={"5% 5.5%"} />
        <p>user-ab4wf5c</p>
      </div>
    </div>
  );
}

export default Sidebar;
