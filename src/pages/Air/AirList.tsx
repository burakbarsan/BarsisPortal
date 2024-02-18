import React, { useState, useRef } from "react";
import UiContent from "../../Components/Common/UiContent";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import PreviewCardHeader from "Components/Common/PreviewCardHeader";
import AirShipmentList from "Components/pages/load/LoadList";
import AirListDev from "Components/DevExtreme/AirList";
import { FaChevronDown } from "react-icons/fa";

const BasicElements = () => {
  document.title = "Barsis - Hava Yük";

  const [isAirShipmentListOpen, setIsAirShipmentListOpen] = useState(true);
  const [isAirListDevOpen, setIsAirListDevOpen] = useState(true);

  const airShipmentRef = useRef<HTMLDivElement>(null);
  const airListDevRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block :"start", inline:"start"});
    }
  };
  const toggleAirShipmentList = () => {
    setIsAirShipmentListOpen(!isAirShipmentListOpen);
  };
  const toggleAirListDev = () => {
    setIsAirListDevOpen(!isAirListDevOpen);
  };

  return (
    <React.Fragment>
    
          <Container className="menuContainer headerDiv"  fluid>
            <Row>
              <Col lg={12} className="headerSticky">
                <div className="menu-list-1" onClick={() => scrollToComponent(airShipmentRef)}>
                  Air Shipment List
                </div>
                <div className="menu-list-2" onClick={() =>  scrollToComponent(airListDevRef)}>
                  Reserve - Shipment List
                </div>
              </Col>
            </Row>
          </Container>
        
      <div className="page-content">
       
        <Container fluid>
        
          <Row>
          <div ref={airShipmentRef}>
            <Col lg={12}>
              
                <Card>
                    
                  <PreviewCardHeader title="Air Shipment List" />
                  <div className="downIcon">
                  <FaChevronDown onClick={toggleAirShipmentList} style={{ cursor: "pointer",color:'#001F87',fontSize:'20px' }} />
                  </div>
                  <CardBody>
                    {isAirShipmentListOpen && <AirShipmentList />}
                    
                  </CardBody>
                </Card>
        
            </Col>
            </div>
          </Row>
         
         
          <Row>
          <div ref={airListDevRef}>
            <Col lg={12}>   
                <Card>
                  <PreviewCardHeader title="Reserve - Shipment List" />
                  <div className="downIcon">
                  <FaChevronDown onClick={toggleAirListDev} style={{ cursor: "pointer",color:'#001F87',fontSize:'20px' }} />
                  </div>
                  <CardBody>
                    {isAirListDevOpen && <AirListDev />}
                  </CardBody>
                  
                </Card>
             
            </Col>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BasicElements;
