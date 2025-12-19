import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Performance.css";

import PerformanceTabs from "../performanceComponents/PerformanceTabs";
import QuarterlyResults from "../performanceComponents/QuarterlyResults";
import AnnualCompany from "../performanceComponents/AnnualCompany";
import AnnualSubsidiaries from "../performanceComponents/AnnualSubsidiaries";
import AnnualGroup from "../performanceComponents/AnnualGroup";

export default function Performance() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const tabFromURL = params.get("tab");
  const annualFromURL = params.get("annualTab");

  const [activeTab, setActiveTab] = useState("quarterly");
  const [annualTab, setAnnualTab] = useState("company");

  // ⭐ Apply URL-based tab control
  useEffect(() => {
    if (tabFromURL === "annual") {
      setActiveTab("annual");
      if (annualFromURL) setAnnualTab(annualFromURL);
      else setAnnualTab("company");
    }

    if (tabFromURL === "quarterly") {
      setActiveTab("quarterly");
    }
  }, [tabFromURL, annualFromURL]);

  return (
    <div className="performance-page">
      <PerformanceTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        annualTab={annualTab}
        setAnnualTab={setAnnualTab}
      />

      {/* MAIN CONTENT */}
      {activeTab === "quarterly" && <QuarterlyResults />}

      {activeTab === "annual" && (
        <>
          {annualTab === "company" && <AnnualCompany />}
          {annualTab === "subsidiaries" && <AnnualSubsidiaries />}
          {annualTab === "group" && <AnnualGroup />}
        </>
      )}
    </div>
  );
}
