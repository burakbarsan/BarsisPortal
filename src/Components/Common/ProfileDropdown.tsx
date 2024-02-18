import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import { createSelector } from "reselect";
import i18n from "i18n";

const ProfileDropdown = () => {
  const profiledropdownData = createSelector(
    (state: any) => state.Profile.user,
    (user) => user
  );
  // Inside your component
  const user = useSelector(profiledropdownData);

  const [userName, setUserName] = useState();

  useEffect(() => {
    const authUSer: any = sessionStorage.getItem("authUser");
    if (authUSer) {
      const obj: any = JSON.parse(authUSer);
      setUserName(
        process.env.REACT_APP_DEFAULTAUTH === "fake"
          ? obj.username === undefined
            ? user.first_name
              ? user.first_name
              : obj.data.first_name
            : "Admin" || "Admin"
          : process.env.REACT_APP_DEFAULTAUTH === "firebase"
          ? obj.email && obj.email
          : "Admin"
      );
    }
  }, [userName, user]);

  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState<boolean>(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="header-item"
      >
        <DropdownToggle
          tag="button"
          type="button"
          className="custom-toggle btn header-button neutral-400"
        >
          <span className="d-flex align-items-center">
            <img
              className="rounded-circle header-profile-user-photo"
              src={avatar1}
              alt="Header Avatar"
            />
            <span className="text-start ms-xl-1">
              <i className="ri-arrow-down-s-line"></i>
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <h6 className="dropdown-header">
            {i18n.t("Welcome")} {userName}!
          </h6>
          <DropdownItem href={process.env.PUBLIC_URL + "/profile"}>
            <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
            <span className="align-middle"> {i18n.t("Profile")}</span>
          </DropdownItem>
          
          
        
          <div className="dropdown-divider"></div>

        
          <DropdownItem href={process.env.PUBLIC_URL + "/logout"}>
            <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle" data-key="t-logout">
              {i18n.t("Logout")}
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;
