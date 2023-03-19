import React from "react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardMain from "../../components/Dashboard/DashboardMain";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="container-fluid">
        <div className="row">
          <DashboardNavbar />
          <DashboardMain />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
