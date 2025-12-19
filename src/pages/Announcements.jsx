import React, { useState } from "react";
import Dropdown from "../components/Dropdown.jsx";
import "./Announcements.css";

export default function Announcements() {
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("All Years");

  const categoryOptions = [
    "All Categories",
    "Board Meetings",
    "Shareholders Meetings",
    "Postal Ballot",
    "Other Corporate Filings",
  ];

  const yearOptions = ["All Years", "2025", "2024", "2023", "2022"];

  return (
    <div className="ann-page">
      <h1 className="ann-title">Announcements</h1>

      {/* FILTERS */}
      <div className="ann-filters">
        <Dropdown
          value={category}
          options={categoryOptions}
          onChange={setCategory}
        />

        <Dropdown
          value={year}
          options={yearOptions}
          onChange={setYear}
        />
      </div>

      {/* ANNOUNCEMENT LIST (EMPTY FOR NOW) */}
      <div className="ann-list">
        <p className="ann-empty">No announcements available</p>
      </div>
    </div>
  );
}
