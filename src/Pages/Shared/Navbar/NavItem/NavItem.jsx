import { NavLink } from "react-router-dom";

const NavItem = ({ routeName, routePath }) => {
  return (
    <NavLink
      to={`${routePath}`}
      className={({ isActive, isPending }) =>
        `nav-item ${isPending ? "" : isActive ? "bg-gray-200" : ""}`
      }
    >
      {routeName}
    </NavLink>
  );
};

export default NavItem;
