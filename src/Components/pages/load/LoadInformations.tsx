import React, { useState } from "react";

import { Col, Input, Label, Row } from "reactstrap";
import Select from "react-select";
import FieldWithDropdown from "Components/Common/FieldWithDropdown";

const LoadInformations = () => {
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
  return (
    <React.Fragment>
      <div className="live-preview">
        <h4 className="card-title pb-2 pt-3 flex-grow-1">Yük Bilgileri</h4>

        <Row className="gy-1">
          <Col lg={3} md={6} className="mb-2">
            <FieldWithDropdown
              className="input-text-style"
              labelText="Kap"
              placeholderText="Değer Giriniz"
              dropdownText="Kap"
            />
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <div className="">
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Palet
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
                Brüt Kg
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Brüt Kg"
              />
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Net Kg
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Net Kg"
              />
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <FieldWithDropdown
              labelText="Mal Bedeli"
              placeholderText="Fiyat"
              dropdownText="Euro"
            />
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <FieldWithDropdown
              labelText="Navlun Freight"
              placeholderText="Fiyat"
              dropdownText="Euro"
            />
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Chargeable Weight
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Weight"
              />
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Freight
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
            <div className="">
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Teslim Şekli
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
                Gönderim Tipi
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
        </Row>
        <div className="divider"></div>
      </div>
    </React.Fragment>
  );
};

export default LoadInformations;
