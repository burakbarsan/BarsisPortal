import React, { useState } from "react";

import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import SimpleBar from "simplebar-react";

const FieldWithDropdown = ({
  labelText,
  placeholderText,
  dropdownText,
}: any) => {
  const SingleOptions = [
    { value: "Choices 1", label: "Choices 1" },
    { value: "Choices 2", label: "Choices 2" },
    { value: "Choices 3", label: "Choices 3" },
    { value: "Choices 4", label: "Choices 4" },
  ];

  const [dropdownOpen4, setDropdownOpen4] = useState<boolean>(false);

  const toggle4 = () => setDropdownOpen4((prevState) => !prevState);
  return (
    <React.Fragment>
      <div>
        <Label>{labelText}</Label>
        <Dropdown
          className="input-group"
          isOpen={dropdownOpen4}
          toggle={toggle4}
        >
          <input
            type="number"
            className="form-control rounded-start flag-input input-text-style"
            placeholder={placeholderText}
          />
          <DropdownToggle
            as="button"
            className="btn btn-light border arrow-none dropdown-button input-text-style"
          >
            <div className="d-flex align-items-center">
              <div>{dropdownText}</div>
              <i className="ri-arrow-down-s-line icon-size"></i>
            </div>
          </DropdownToggle>
          <DropdownMenu
            as="ul"
            className="list-unstyled w-100 dropdown-menu-list mb-0"
          >
            <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
              {(SingleOptions || []).map((item, key) => (
                <DropdownItem
                  as="li"
                  onClick={() => {}}
                  key={key}
                  className="dropdown-item d-flex"
                >
                  <div className="flex-grow-1">
                    <div className="d-flex">
                      <div className="country-name me-1">{item.value}</div>
                    </div>
                  </div>
                </DropdownItem>
              ))}
            </SimpleBar>
          </DropdownMenu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
};

export default FieldWithDropdown;
