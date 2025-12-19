import React, { useEffect, useState } from "react";
import "../pages/Performance.css";

export default function AnnualSubsidiaries() {
  const [years, setYears] = useState([]);
  const [companies, setCompanies] = useState([]);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(
      `${baseUrl}/api/public/content?category=Performance&subcategory=Annual Reports - Subsidiaries`
    )
      .then((res) => res.json())
      .then((items) => {
        const yearSet = new Set();
        const companyMap = {};

        items.forEach((item) => {
          const files = JSON.parse(item.files_json || "[]");
          if (!files[0]) return;

          /* ✅ READ STRUCTURED DATA */
          const year = item.flags?.year || "Others";
          const companyName =
            item.flags?.company || "Unknown Company";

          yearSet.add(year);

          if (!companyMap[companyName]) {
            companyMap[companyName] = {
              name: companyName,
              reports: {},
            };
          }

          companyMap[companyName].reports[year] =
            files[0].path;
        });

        setYears(
          Array.from(yearSet).sort((a, b) => b - a)
        );
        setCompanies(Object.values(companyMap));
      })
      .catch((err) => {
        console.error(
          "AnnualSubsidiaries fetch error:",
          err
        );
      });
  }, [baseUrl]);

  const openPDF = (filePath) => {
    if (!filePath) return;
    window.open(`${baseUrl}${filePath}`, "_blank");
  };

  return (
    <div className="subsidiaries-container">
      {/* YEAR HEADER */}
      <div className="subsidiary-header">
        <div className="company-header"></div>
        {years.map((year) => (
          <div className="year-header" key={year}>
            {year}
          </div>
        ))}
      </div>

      {/* COMPANY ROWS */}
      {companies.map((c, idx) => (
        <div className="subsidiary-row" key={idx}>
          <div className="subsidiary-name">{c.name}</div>

          {years.map((year) => (
            <div
              key={year}
              className="subsidiary-report"
              onClick={() =>
                openPDF(c.reports[year])
              }
            >
              {c.reports[year]
                ? "Annual report"
                : "-"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
