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

const CustomerInformations = () => {
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
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Firma - Customer
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
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label>IM/EX</Label>
              <Dropdown isOpen={dropdownOpen4} toggle={toggle4}>
                
                <DropdownToggle 
                  as="button"
                  className="btn btn-light border arrow-none dropdown-button w-100"
                >
                  <div className="d-flex align-items-center space-between p-1 input-text-style">
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
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Gönderici/Shipper
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
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Yükleme Firma/Shipper
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
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Alıcı Firma
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
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Alıcı/Consignee
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
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                İhbar (banka) Notify
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
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Firma Ref.
              </Label>
              <Input

                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Firma Ref."
              />
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Firma Kontakt
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Firma Kontakt"
              />
            </div>
          </Col>
        </Row>

        <div className="divider"></div>
      </div>
    </React.Fragment>
  );
};

export default CustomerInformations;
