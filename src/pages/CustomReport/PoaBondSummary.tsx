import HeaderButton from "Components/Header/HeaderButton";
import { leftSidebarTypes } from "Components/constants/layout";
import Layouts from "Layouts";
import Header from "Layouts/Header";
import Sidebar from "Layouts/Sidebar";
import VerticalLayouts from "Layouts/VerticalLayouts";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";



  const PoaBondSummary = () => {
    document.title = "POA BOND SUMMARY | Barsis Portal";

    const [rightColumn, setRightColumn] = useState(true);
    const toggleRightColumn = () => {
      setRightColumn(!rightColumn);
    };

    return (
      <React.Fragment>
          <div style={{height:"59px"}}></div>
        <div className="page-content bg-fc">
        <iframe style={{ width: '100%' ,height:'100%'}} src="https://app.powerbi.com/reportEmbed?reportId=2e1db005-7ccb-4a9c-a69f-cec758fe5953&autoAuth=true&ctid=c96f0caf-a442-412b-8443-1e604a428001&filterPaneEnabled=false&navContentPaneEnabled=false"></iframe>
        </div>
      </React.Fragment>
    );
  };

  export default PoaBondSummary;
