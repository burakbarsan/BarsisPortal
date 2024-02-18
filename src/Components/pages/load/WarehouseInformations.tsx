import React, { useState } from "react";

import { Col, Input, Label, Row } from "reactstrap";

const WarehouseInformations = () => {
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
        <Row className="gy-1">
          <Col lg md={6} col-12>
            <div>
              <Label htmlFor="exampleInputdate" className="form-label">
                Depo Giriş Tarihi
              </Label>
              <Input
                type="date"
                className="form-control input-text-style"
                id="exampleInputdate"
              />
            </div>
          </Col>
          <Col lg md={6} col-12>
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Depo Giriş Not
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Notunuz"
              />
            </div>
          </Col>
          <Col lg md={6} col-12>
            <div>
              <Label htmlFor="exampleInputdate" className="form-label">
                Firma Teslim Tarihi
              </Label>
              <Input
                type="date"
                className="form-control input-text-style"
                id="exampleInputdate"
              />
            </div>
          </Col>
          <Col lg md={6} col-12>
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Firma Teslim Not
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                defaultValue="Notunuz"
              />
            </div>
          </Col>
          <Col lg md={6} col-12>
            <div>
              <Label htmlFor="exampleInputdate" className="form-label">
                YD Depo Giriş Tarihi
              </Label>
              <Input
                type="date"
                className="form-control input-text-style"
                id="exampleInputdate"
              />
            </div>
          </Col>
		  <Col lg={12} md={12} className="mb-2">
            <div>
              <Label
                htmlFor="exampleFormControlTextarea5"
                className="form-label"
              >
                Açıklama
              </Label>
              <textarea
                placeholder="Notunuz"
                draggable={false}
                className="textarea-form-control input-text-style"
                id="formControllerTextArea"
                rows={6}
              ></textarea>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default WarehouseInformations;
