import React, { useState } from "react";

import {
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

const AirInformations = () => {
  const [selectedSingle, setSelectedSingle] = useState<any>(null);
  function handleSelectSingle(selectedSingle: any) {
    setSelectedSingle(selectedSingle);
  }
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
      <div className="live-preview">
        <Row className="gy-1">
          <Col lg={4} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Airlines
              </Label>
              <Select
                value={selectedSingle}
                onChange={(selectedSingle: any) => {
                  handleSelectSingle(selectedSingle);
                }}
                options={SingleOptions}
              />
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Air Port of Departure
              </Label>
              <Select
                value={selectedSingle}
                onChange={(selectedSingle: any) => {
                  handleSelectSingle(selectedSingle);
                }}
                options={SingleOptions}
              />
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Air Port of Destination
              </Label>
              <Select
                value={selectedSingle}
                onChange={(selectedSingle: any) => {
                  handleSelectSingle(selectedSingle);
                }}
                options={SingleOptions}
              />
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Agent
              </Label>
              <Select
                value={selectedSingle}
                onChange={(selectedSingle: any) => {
                  handleSelectSingle(selectedSingle);
                }}
                options={SingleOptions}
              />
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-2">
            <div>
              <Label>Delivery Terms</Label>
              <div className="d-flex align-items-center space-between ">
               <Col lg={6} md={6}>
               <Dropdown isOpen={dropdownOpen4} toggle={toggle4} className="margin-right">
                
                  <DropdownToggle
                    as="button"
                    className="btn btn-light border arrow-none dropdown-button w-100"
                  >
                    <div className="d-flex align-items-center space-between input-text-style">
                      <div>Seçeneği Seç</div>
                      <i className="ri-arrow-down-s-line icon-size-l"></i>
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
                              <div className="country-name me-1">
                                {item.value}
                              </div>
                            </div>
                          </div>
                        </DropdownItem>
                      ))}
                    </SimpleBar>
                  </DropdownMenu>
                </Dropdown>
               </Col>

                <Col>
                <Select
                  
                  value={selectedSingle}
                  onChange={(selectedSingle: any) => {
                    handleSelectSingle(selectedSingle);
                  }}
                  options={SingleOptions}
                />
                </Col>
              </div>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-2">
          <div>
              <Label htmlFor="valueInput" className="form-label">
               MAWB
              </Label>
              <Input
                readOnly={true}
                type="text"
                className="form-control input-text-style-disabled"
                id="valueInput"
               
              />
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-2">
          <div>
              <Label htmlFor="valueInput" className="form-label">
               HAWB
              </Label>
              <Input
                readOnly={true}
                type="text"
                className="form-control input-text-style-disabled"
                id="valueInput"
               
              />
            </div>
          </Col>
        </Row>

        <div className="divider"></div>
      </div>
    </React.Fragment>
  );
};

export default AirInformations;
