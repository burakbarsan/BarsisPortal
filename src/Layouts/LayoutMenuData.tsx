import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState<boolean>(false);
  const [isCustomReport, setIsCustomReport] = useState<boolean>(false);
  const [isUsaWarehouse, setIsUsaWarehouse] = useState<boolean>(false);
  const [isPoaBondSummary, setIsPoaBondSummary] = useState<boolean>(false);
  const [isInvoiceBenchmark, setIsInvoiceBenchmark] = useState<boolean>(false);
  const [isGlobalFinance, setIsGlobalFinance] = useState<boolean>(false);
  const [isAirShipmentList, setIsAirShipmentList] = useState<boolean>(false);
  const [isShipmentDone, setIsShipmentDone] = useState<boolean>(false);
  const [isTruckerList, setIsTruckerList] = useState<boolean>(false);
  const [isGlobalLCL, setIsGlobalLCL] = useState<boolean>(false);
  const [isTeuReport, setIsTeuReport] = useState<boolean>(false);
  const [isKPIReport, setIsKPIReport] = useState<boolean>(false);
  const [isUsaFileProfit, setIsUsaFileProfit] = useState<boolean>(false);
  const [isApps, setIsAir] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isPages, setIsPages] = useState<boolean>(false);
  const [isBaseUi, setIsBaseUi] = useState<boolean>(false);
  const [isAdvanceUi, setIsAdvanceUi] = useState<boolean>(false);
  const [isForms, setIsForms] = useState<boolean>(false);
  const [isTables, setIsTables] = useState<boolean>(false);
  const [isCharts, setIsCharts] = useState<boolean>(false);
  const [isIcons, setIsIcons] = useState<boolean>(false);
  const [isMaps, setIsMaps] = useState<boolean>(false);
  const [isMultiLevel, setIsMultiLevel] = useState<boolean>(false);

  // Apps
  const [isCalendar, setCalendar] = useState<boolean>(false);
  const [isEmail, setEmail] = useState<boolean>(false);
  const [isSubEmail, setSubEmail] = useState<boolean>(false);
  const [isEcommerce, setIsEcommerce] = useState<boolean>(false);
  const [isProjects, setIsProjects] = useState<boolean>(false);
  const [isTasks, setIsTasks] = useState<boolean>(false);
  const [isCRM, setIsCRM] = useState<boolean>(false);
  const [isCrypto, setIsCrypto] = useState<boolean>(false);
  const [isInvoices, setIsInvoices] = useState<boolean>(false);
  const [isSupportTickets, setIsSupportTickets] = useState<boolean>(false);
  const [isNFTMarketplace, setIsNFTMarketplace] = useState<boolean>(false);
  const [isJobs, setIsJobs] = useState<boolean>(false);
  const [isJobList, setIsJobList] = useState<boolean>(false);
  const [isCandidateList, setIsCandidateList] = useState<boolean>(false);

  // Authentication
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [isPasswordReset, setIsPasswordReset] = useState<boolean>(false);
  const [isPasswordCreate, setIsPasswordCreate] = useState<boolean>(false);
  const [isLockScreen, setIsLockScreen] = useState<boolean>(false);
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
  const [isVerification, setIsVerification] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  // Pages
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [isLanding, setIsLanding] = useState<boolean>(false);

  // Charts
  const [isApex, setIsApex] = useState<boolean>(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState<boolean>(false);
  const [isLevel2, setIsLevel2] = useState<boolean>(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e: any) {
    if (e && e.target && e.target.getAttribute("sub-items")) {
      const ul: any = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("sub-items");
        const getID = document.getElementById(id) as HTMLElement;
        if (getID) getID.classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    console.log(iscurrentState);
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Custom Report") {
      setIsCustomReport(false);
    }
    if (iscurrentState !== "POA Bond Summary") {
      setIsPoaBondSummary(false);
    }
    if (iscurrentState !== "Invoice Benchmark") {
      setIsInvoiceBenchmark(false);
    }
    if (iscurrentState !== "Global Finance") {
      setIsGlobalFinance(false);
    }
    if (iscurrentState !== "Usa Warehouse") {
      setIsUsaWarehouse(false);
    }
    if (iscurrentState !== "KPI Report") {
      setIsKPIReport(false);
    }
    if (iscurrentState !== "Usa File Profit") {
      setIsUsaFileProfit(false);
    }
    if (iscurrentState !== "Trucker List") {
      setIsTruckerList(false);
    }
    if (iscurrentState !== "Shipment Done List") {
      setIsShipmentDone(false);
    }
    if (iscurrentState !== "Teu Report") {
      setIsTeuReport(false);
    }
    if (iscurrentState !== "Air Shipment List") {
      setIsAirShipmentList(false);
    }
    if (iscurrentState !== "Global LCL") {
      setIsGlobalLCL(false);
    }
    if (iscurrentState !== "Air") {
      setIsAir(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "BaseUi") {
      setIsBaseUi(false);
    }
    if (iscurrentState !== "AdvanceUi") {
      setIsAdvanceUi(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState !== "Landing") {
      setIsLanding(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isApps,
    isAuth,
    isPages,
    isBaseUi,
    isAdvanceUi,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
    isMultiLevel,
    isCustomReport,
    isGlobalLCL,
    isTeuReport,
  ]);
  const iframeSrc = "https://app.powerbi.com/groups/af9619af-a4d9-41e2-a8b2-9b47af9ffa70/reports/a519534b-533a-48cf-a35b-2f41c20b6e7c";

  const menuItems: any = [
    {
      id: "dashboard",
      label: "Dashboards",
      icon: "mdi mdi-home",
      link: "/#",
      stateVariables: isDashboard,
      click: function (e: any) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
      
    },
    {
      id: "customReport",
      label: "Custom Report",
      icon: "ri-file-chart-line",
      link: "/customReport",
      stateVariables: isCustomReport,
     
      click: function (e:any) {
        e.preventDefault();
        setIsCustomReport(!isCustomReport);
        setIscurrentState("Custom Report");
        updateIconSidebar(e);
    },
      
    },
    {
      id: "teuReports",
      label: "TEU Report",
      icon: "ri-file-chart-2-line",
      link: "/teuReports",
      click: function (e: any) {
        e.preventDefault();
        setIsAuth(!isAuth);
        setIscurrentState("Auth");
        updateIconSidebar(e);
      },
    },
    {
      id: "globalFinance",
      label: "Global Finance ",
      icon: "ri-folder-chart-line",
      link: "/globalFinance",
      click: function (e:any) {
        e.preventDefault();
        setIsGlobalFinance(!isGlobalFinance);
        setIscurrentState("Global Finance");
        updateIconSidebar(e);
    },
    
    },
    {
      id: "globalLcl",
      label: "Global LCL Finance",
      icon: "ri-bank-line",
      link: "/globalLcl",
      click: function (e:any) {
        e.preventDefault();
        setIsCustomReport(!isCustomReport);
        setIscurrentState("Custom Report");
        updateIconSidebar(e);
    },
    },
    {
      id: "oceanAirOperation",
      label: "KPI Report",
      icon: "ri-file-user-line",
      link: "/kpiReport",
      click: function (e:any) {
        e.preventDefault();
        setIsKPIReport(!isKPIReport);
        setIscurrentState("KPI Report");
        updateIconSidebar(e);
    },

    },
    {
      id: "truckerList",
      label: "Trucker List",
      icon: "ri-file-list-line",
      link: "/truckerList",
      click: function (e:any) {
        e.preventDefault();
        setIsKPIReport(!isKPIReport);
        setIscurrentState("Trucker List");
        updateIconSidebar(e);
    },
    },
    {
      id: "shipmentDone",
      label: "Shipment Done List",
      icon: "ri-ship-line",
      link: "/shipmentDone",
      click: function (e:any) {
        e.preventDefault();
        setIsShipmentDone(!isShipmentDone);
        setIscurrentState("Shipment Done List");
        updateIconSidebar(e);
    },
    },
    {
      id: "usaFileProfit",
      label: "USA File Profit Report",
      icon: "ri-money-dollar-box-line",
      link: "/usaFileProfit",
      click: function (e:any) {
        e.preventDefault();
        setIsUsaFileProfit(!isUsaFileProfit);
        setIscurrentState("Usa File Profit");
        updateIconSidebar(e);
    },
    },
    {
      id: "airShipmentList",
      label: "Air Shipment List",
      icon: "ri-plane-fill",
      link: "/airShipmentList",
      click: function (e:any) {
        e.preventDefault();
        setIsAirShipmentList(!isAirShipmentList);
        setIscurrentState("Air Shipment List");
        updateIconSidebar(e);
    },
    },
    {
      id: "poaBondSummary",
      label: "Poa Bond Summary",
      icon: "ri-file-list-3-line",
      link: "/poaBondSummary",
      click: function (e:any) {
        e.preventDefault();
        setIsPoaBondSummary(!isPoaBondSummary);
        setIscurrentState("Poa Bond Summary");
        updateIconSidebar(e);
    },
    },
    {
      id: "invoice Bencmark",
      label: "Invoice Benchmarking",
      icon: "ri-line-chart-line",
      link: "/invoiceBencmark",
      click: function (e:any) {
        e.preventDefault();
        setIsInvoiceBenchmark(!isInvoiceBenchmark);
        setIscurrentState("Invoice Benchmark");
        updateIconSidebar(e);
    },
    },{
      id: "usaWarehouse",
      label: "USA Warehouse Cost",
      icon: "ri-home-gear-line",
      link: "/usaWarehouse",
      click: function (e:any) {
        e.preventDefault();
        setIsUsaWarehouse(!isUsaWarehouse);
        setIscurrentState("Usa Warehouse");
        updateIconSidebar(e);
    },

    },
    
  ];
  
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
