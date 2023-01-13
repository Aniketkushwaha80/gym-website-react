import React, { useState } from "react";
import "./Submenu.css";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink, Link, useLocation } from "react-router-dom";

const Submenu = (prop) => {
  const [open, setopen] = useState(false);
  return (
    <div className={open ? "sidebar-item open" : "sidebar-item "}>
      <div
        className="sidebar-title"
        onClick={() => {
          setopen(!open);
        }}
      >
        <AiOutlineRight className="first-item toggle-btn" />
        <span>{prop.data.title}</span>
      </div>
      <div className="sidebar-content">
        {prop.data.subMenu.map((submenuChild, subMenuIndex) => (
         
            <NavLink key={subMenuIndex} to={prop.data.pathName[subMenuIndex]}>
              <p className="sub-menu-title">{submenuChild}</p>
            </NavLink>
      
        ))}
      </div>
    </div>
  );
};

export default Submenu;
