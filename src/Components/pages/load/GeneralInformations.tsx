import React from "react";
import '../../../assets/scss/pages/_load.scss';
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import PreviewCardHeader from "../../Common/PreviewCardHeader";

const GeneralInformations = () => {
  return (
    <React.Fragment>
     <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <PreviewCardHeader className= "bottom-padding-zero"  title="Genel Bilgiler" />
                <CardBody className="card-body">
                  <div className="live-preview row d-flex">
                    <Row className="gy-1">
                      <Col lg md={6} col-12>
                        <div>
                          <Label htmlFor="valueInput" className="form-label">
                            Barsan İş Emri No
                          </Label>
                          <Input
                            type="text"
                            className="form-control input-text-style-disabled"
                            id="valueInput"
                            placeholder="İş Emri No"
                          />
                        </div>
                      </Col>
                      <Col lg md={6} col-12>
                        <div>
                          <Label htmlFor="valueInput" className="form-label">
                            Yük No
                          </Label>
                          <Input
                            type="text"
                            className="form-control input-text-style-disabled"
                            id="valueInput"
                            placeholder="Yük No"
                          />
                        </div>
                      </Col>
                      <Col lg md={6} col-12>
                        <div>
                          <Label htmlFor="valueInput" className="form-label">
                            Yük Şube
                          </Label>
                          <Input
                            type="text"
                            className="form-control input-text-style-disabled"
                            id="valueInput"
                            placeholder="Yük Şube"
                          />
                        </div>
                      </Col>
                      <Col lg md={6} col-12>
                        <div>
                          <Label htmlFor="valueInput" className="form-label">
                            Firma Şube
                          </Label>
                          <Input
                            type="text"
                            className="form-control input-text-style-disabled"
                            id="valueInput"
                            placeholder="Firma Şube"
                          />
                        </div>
                      </Col>
                      <Col lg md={6} col-12>
                        <div>
                          <Label htmlFor="valueInput" className="form-label">
                            Karşılayan Şube
                          </Label>
                          <Input
                            type="text"
                            className="form-control input-text-style-disabled"
                            id="valueInput"
                            placeholder="Karşılayan Şube"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
    </React.Fragment>
  );
};

export default GeneralInformations;
