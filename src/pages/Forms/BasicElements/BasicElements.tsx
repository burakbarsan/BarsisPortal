import React from "react";

import UiContent from "../../../Components/Common/UiContent";
import "../../../assets/scss/pages/_load.scss"; // CSS dosyanızı import edin
import { Card, CardBody, Col, Row } from "reactstrap";

import { Container } from "reactstrap";
import PreviewCardHeader from "Components/Common/PreviewCardHeader";
import GeneralInformations from "Components/pages/load/GeneralInformations";
import CustomerInformations from "Components/pages/load/CustomerInformations";
import LoadInformations from "Components/pages/load/LoadInformations";
import LoadDetail from "Components/pages/load/LoadDetail";
import LoadSize from "Components/pages/load/LoadSize";
import AirInformations from "Components/pages/load/AirInformaitons";
import FlightInformations from "Components/pages/load/FlightInformations";
import WarehouseInformations from "Components/pages/load/WarehouseInformations";


const BasicElements = () => {
  document.title = "Barsis - Yük";

  return (
    <React.Fragment>
      <UiContent />
      <div className="page-content">
        <GeneralInformations />
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <PreviewCardHeader title="Müşteri Bilgileri" />
                <CardBody>
                  <CustomerInformations/>
                  <LoadInformations/>
                  <LoadDetail/>
                  <LoadSize/>
                </CardBody>
              </Card>
              <Card>
                <PreviewCardHeader title="Hava Yolu Bilgileri" />
                <CardBody>
                  <AirInformations/>
                  <FlightInformations/>
                </CardBody>
              </Card>
              <Card>
                <PreviewCardHeader title="Depo Bilgileri" />
                <CardBody>
                  <WarehouseInformations/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BasicElements;
