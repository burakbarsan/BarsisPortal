import React, { useState } from "react";
import Select from "react-select";
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import PreviewCardHeader from "../../Common/PreviewCardHeader";
import AirListExit from "Components/DevExtreme/Input/AirListExit/AirListExit";
import AirListEnter from "Components/DevExtreme/InputAirEnterList/AirListEnter";
import "../../../assets/scss/pages/loadList.scss";
import Flatpickr from "react-flatpickr";

const AirShipmentList = () => {
    const [isTableVisible, setTableVisibility] = useState(false);
    const [startDate, setStartDate] = useState(null); // Başlangıç tarihi
    const [endDate, setEndDate] = useState(null); // Bitiş tarihi

  const options = [
    { value: "option1", label: "Tümü" },
    { value: "option2", label: "Seçenek 1" },
    { value: "option3", label: "Seçenek 2" },
    { value: "option4", label: "Seçenek 3" }
  ];
  const options2 = [
    { value: "option1", label: "IM" },
    { value: "option2", label: "EX" }

  ];
  const options3 = [
    { value: "option1", label: "Kişi 1" },
    { value: "option2", label: "Kişi 2" }

  ];
  const options4 = [
    { value: "option1", label: "Kişi 1" },
    { value: "option2", label: "Kişi 2" },
    { value: "option2", label: "Kişi 3" },
    { value: "option2", label: "Kişi 4" }
  ];


  const handleSelectClick = (e:any) => {
    e.stopPropagation();
    setTableVisibility(!isTableVisible);
  };
  

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col lg={12}>
            
              <CardBody className="card-body shipment-list">
                <div className="live-preview row d-flex">
                  <Row className="gy-1">
                    <Col lg md={6} col-12>
                      <div>
                        <Label htmlFor="valueInput" className="form-label">
                          Departman
                        </Label>

                        <Select
                          options={options}
                          isMulti
                          closeMenuOnSelect={false}
                          defaultValue={options[0]} 
                          isSearchable
                        />
                      </div>
                    </Col>
                    <Col lg md={6} col-12>
                      <div>
                        <Label htmlFor="valueInput" className="form-label">
                          Çıkış Hava Limanı
                        </Label>
                        <AirListExit/>
                       </div>
       
           
                    </Col>
                    <Col lg md={6} col-12>
                      <div>
                        <Label htmlFor="valueInput" className="form-label">
                          Varış Hava Limanı
                        </Label>
                        <AirListEnter/>
                    
                      </div>
                    </Col>
                    <Col lg md={6} col-12>
                      <div>
                        <Label htmlFor="valueInput" className="form-label">
                          Imex
                        </Label>
                        <Select
                          options={options2}
                          isMulti
                          closeMenuOnSelect={false}
                          placeHolder="Seçiniz:"
                          isSearchable
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
                          className="form-control"
                          id="valueInput"
                        
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
              <CardBody className="card-body shipment-list-second">
                <div className="live-preview row d-flex">
                  <Row className="gy-1">
                    <Col lg md={6} col-12>
                      <div className="d-flex">
                        <div className="me-2 flex-grow-1">
                          <Label htmlFor="mawbInput" className="form-label">
                            MAWB No
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            id="mawbInput"
                            bsSize="sm"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <Label htmlFor="hawbInput" className="form-label">
                            HAWB No
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            id="hawbInput"
                            bsSize="sm"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col lg md={6} col-12>
                      <div>
                        <Label htmlFor="senderInput" className="form-label">
                          Gönderici
                        </Label>
                        <Select
                          options={options3}
                          isMulti
                          closeMenuOnSelect={false}
                          placeHolder="Seçiniz:"
                          isSearchable
                        />
                      </div>
                    </Col>
                    <Col lg md={6} col-12>
                      <div>
                        <Label
                          htmlFor="receiverInput"
                          className="form-label"
                        >
                          Alıcı
                        </Label>
                        <Select
                          options={options4}
                          isMulti
                          closeMenuOnSelect={false}
                          placeHolder="Seçiniz:"
                          isSearchable
                        />
                      </div>
                    </Col>

                    <Col lg md={6} col-12>
                      <div>
                        <Label htmlFor="dateInput" className="form-label">
                          Yük Tarihi
                        </Label>
                        <Flatpickr
                            className="form-control"
                            defaultValue="12.11.2024"
                            options={{
                              mode: "range",
                              dateFormat: "Y-m-d"
                            }}
                          />
                      </div>
                    </Col>
                    <Col className="searchBtnDiv" lg md={6} col-12>
              
                       
  <div className="d-flex align-items-center justify-content-between searchBtnDivS"> {/* 1. iç div */}
    <Button className="searchBtn">
        <SearchIcon className="searchIcon"></SearchIcon>
        Search</Button> {/* 3. Button */}
  </div>
</Col>

                  </Row>
                </div>
              </CardBody>
           
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AirShipmentList;
