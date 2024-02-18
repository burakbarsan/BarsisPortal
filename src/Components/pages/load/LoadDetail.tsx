import React, { useState } from "react";

import { Col, Input, Label, Row } from "reactstrap";
import Select from "react-select";
import FieldWithDropdown from "Components/Common/FieldWithDropdown";

const LoadDetail = () => {
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
        <h4 className="card-title pb-2 pt-3 flex-grow-1">Yük Detay</h4>

        <Row className="gy-1">
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Türkçe Adı
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Ad"
              />
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                İngilizce Adı
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Ad"
              />
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                HS Code
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Kod"
              />
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-2">
            <div>
              <Label
                htmlFor="choices-single-default"
                className="form-label text-muted"
              >
                Mal Özellik
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
          <Col lg={6} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Konşimento Not
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Notunuz"
              />
            </div>
          </Col>
          <Col lg={6} md={6} className="mb-2">
            <div>
              <Label htmlFor="valueInput" className="form-label">
                Hava Yolu Özel Not
              </Label>
              <Input
                type="text"
                className="form-control input-text-style"
                id="valueInput"
                placeholder="Notunuz"
              />
            </div>
          </Col>
          <Col lg={12} md={12} className="mb-2">
            <div>
              <Label
                htmlFor="exampleFormControlTextarea5"
                className="form-label"
              >
                Not
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
        <div className="divider"></div>
      </div>
    </React.Fragment>
  );
};

export default LoadDetail;
