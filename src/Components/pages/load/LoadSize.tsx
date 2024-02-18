import React, { useState } from "react";

import { Col, Input, Label, Row } from "reactstrap";
import Select from "react-select";
import FieldWithDropdown from "Components/Common/FieldWithDropdown";
import HeaderButton from "Components/Header/HeaderButton";

const LoadSize = () => {
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
        <h4 className="card-title pb-2 pt-3 flex-grow-1">Yük Ebat</h4>
        <div className="d-flex align-items-center space-between">
          <div className="d-flex align-items-center buttons-height">
            <HeaderButton
              icon={<i className="ri-add-fill"></i>}
              color="#1E5C13"
            />
            <HeaderButton
              icon={<i className="ri-save-2-line"></i>}
              color="#1545B2"
            />
            <HeaderButton
              icon={<i className="ri-delete-bin-6-line"></i>}
              color="#B51916"
            />
            <HeaderButton
              icon={<i className="ri-close-line"></i>}
              color="#20232D"
            />
          </div>
          <div className="form-check mb-2">
            <Input
              className="form-check-input"
              type="checkbox"
              id="formCheck1"
            />
            <Label className="form-check-label" htmlFor="formCheck1">
              İstiflenmiyor
            </Label>
          </div>
        </div>

        <Row className="gy-1">
          <Col lg={3} md={6} className="mb-2"></Col>
        </Row>
        <div className="divider"></div>
      </div>
    </React.Fragment>
  );
};

export default LoadSize;
