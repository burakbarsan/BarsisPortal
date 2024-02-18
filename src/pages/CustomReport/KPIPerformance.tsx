import HeaderButton from "Components/Header/HeaderButton";
import { leftSidebarTypes } from "Components/constants/layout";
import Layouts from "Layouts";
import Header from "Layouts/Header";
import Sidebar from "Layouts/Sidebar";
import VerticalLayouts from "Layouts/VerticalLayouts";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";



  const KPIPerformance = () => {
    document.title = "KPI Performance | Barsis Portal";

    const [rightColumn, setRightColumn] = useState(true);
    const toggleRightColumn = () => {
      setRightColumn(!rightColumn);
    };

    return (
      <React.Fragment>
          <div style={{height:"59px"}}></div>
        <div className="page-content bg-fc">
        <iframe style={{ width: '100%' ,height:'100%'}} src="https://app.powerbi.com/reportEmbed?reportId=e4c786ab-dee2-41b4-b72a-66cb5989fe02&autoAuth=true&ctid=c96f0caf-a442-412b-8443-1e604a428001&filterPaneEnabled=false&navContentPaneEnabled=false"></iframe>
        </div>
      </React.Fragment>
    );
  };

  export default KPIPerformance;
