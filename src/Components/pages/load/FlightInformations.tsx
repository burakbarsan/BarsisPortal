import React, { useState } from "react";

import { Col, Input, Label, Row } from "reactstrap";
import Select from "react-select";
import FieldWithDropdown from "Components/Common/FieldWithDropdown";
import HeaderButton from "Components/Header/HeaderButton";

const FlightInformations = () => {
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
        <h4 className="card-title pb-2 pt-3 flex-grow-1">Uçuş Bilgileri</h4>
        <div className="d-flex align-items-center buttons-height">
          <button
            type="button"
            className="custom-toggle btn header-button-address button-text-style"
          >
            <i className="ri-edit-box-line icon-size-l padding-right-s"></i>
            Reserve
          </button>

          <button type="button" className="custom-toggle btn header-button button-text-style hawb-button">
            <span className="icon-on ">
              <i className="ri-file-line icon-size-l padding-right-s"></i>
              HAWB
            </span>
          </button>
        </div>

        <Row className="gy-1">
          <Col lg={3} md={6} className="mb-2"></Col>
        </Row>
        <div className="divider"></div>
      </div>
    </React.Fragment>
  );
};

export default FlightInformations;
