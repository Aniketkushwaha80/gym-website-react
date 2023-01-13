/*eslint-disable*/
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import Submenu from "components/shared/Submenu/Submenu";

const sidebarItemProp = [
  {
    title: "Client",
    pathName: ["/admin/userlist", "/admin/user-profile"],
    subMenu: ["List", "Add New Client"],
  },
  {
    title: "Package",
    pathName: ["/admin/package-list", "/admin/Add-package"],
    subMenu: ["List", "Add New Package"],
  },
];

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const { routes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;


  logoText = (
    <Link
      to={"/admin/dashboard"}
      className="simple-text logo-normal"
      onClick={props.toggleSidebar}
    >
      {logo.text}
    </Link>
  );
 
  return (
    <div className="sidebar" data={"blue"}>
      <div
        className="sidebar-wrapper"
        ref={sidebarRef}
        style={{ backgroundColor: "" }}
      >
        {logoImg !== null || logoText !== null ? (
          <div style={{textAlign:"center",fontSize:"24px"}} className="logo">
            
            {logoText}
          </div>
        ) : null}
        <Nav>
          <li>
            <NavLink
              style={{ fontSize: "14px", fontWeight: 700 }}
              to={"/admin/dashboard"}
              className="nav-link"
              activeClassName="active"
              onClick={props.toggleSidebar}
            >
              <i className="tim-icons icon-chart-pie-36" />
              <p>{rtlActive ? "Dashboard" : "Dashboard"}</p>
            </NavLink>
          </li>
          <li>
            <Submenu data={sidebarItemProp[0]} />
          </li>
          <li>
            <NavLink
              style={{ fontSize: "14px", fontWeight: 700 }}
              to={"/admin/Charts"}
              className="nav-link"
              activeClassName="active"
              onClick={props.toggleSidebar}
            >
              <i className="tim-icons icon-notes" />
              <p>{rtlActive ? "Charts" : "Charts"}</p>
            </NavLink>
          </li>

          <li>
            <Submenu data={sidebarItemProp[1]} />
          </li>

          <li>
            <NavLink
              style={{ fontSize: "14px", fontWeight: 700 }}
              to={"/admin/helpers"}
              className="nav-link"
              activeClassName="active"
              onClick={props.toggleSidebar}
            >
              <i className="tim-icons icon-support-17" />
              <p>{rtlActive ? "Helpers" : "Helpers"}</p>
            </NavLink>
          </li>
           <li>
            <NavLink
              style={{ fontSize: "14px", fontWeight: 700 }}
              to={"/admin/Add-coupon"}
              className="nav-link"
              activeClassName="active"
              onClick={props.toggleSidebar}
            >
              <i className="tim-icons icon-gift-2" />
              <p>{rtlActive ? "Coupon" : "Coupon"}</p>
            </NavLink>
          </li>
            <li>
            <NavLink
              style={{ fontSize: "14px", fontWeight: 700 }}
              to={"/"}
              className="nav-link"
              activeClassName="active"
              onClick={props.toggleSidebar}
            >
              <i className="tim-icons icon-support-17" />
              <p>{rtlActive ? "Client detail" : "user"}</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    text: PropTypes.node,
    imgSrc: PropTypes.string,
  }),
};

export default Sidebar;
