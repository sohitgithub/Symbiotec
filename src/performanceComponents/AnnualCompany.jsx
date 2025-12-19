import React, { useEffect, useState } from "react";
import "../pages/Performance.css";

export default function AnnualCompany() {
  const [data, setData] = useState({});
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(
      `${baseUrl}/api/public/content?category=Performance&subcategory=Annual Reports - Company`
    )
      .then((res) => res.json())
      .then((items) => {
        const grouped = {};

        items.forEach((item) => {
          const files = JSON.parse(item.files_json || "[]");
          if (!files[0]) return;

          /* ✅ READ STRUCTURED YEAR */
          const year = item.flags?.year || "Others";

          if (!grouped[year]) grouped[year] = [];

          grouped[year].push({
            title: item.title || "Annual Report",
            file: files[0].path,
          });
        });

        setData(grouped);
      })
      .catch((err) => {
        console.error("AnnualCompany fetch error:", err);
      });
  }, [baseUrl]);

  return (
    <div className="annual-wrapper">
      {Object.keys(data).length === 0 && (
        <p className="text-muted">No reports available.</p>
      )}

      {Object.keys(data)
        .sort((a, b) => b - a)
        .map((year) => (
          <div key={year} className="annual-year-block">
            {/* YEAR HEADING */}
            <h2 className="annual-year-title">{year}</h2>

            {/* CARDS */}
            <div className="annual-cards">
              {data[year].map((doc, index) => (
                <a
                  key={index}
                  href={`${baseUrl}${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="annual-card"
                >
                  <div className="annual-card-top">
                    <img
                      src="/images/doc.png"
                      alt="Document"
                      className="annual-icon"
                    />
                  </div>

                  <div className="annual-card-title">
                    {doc.title}
                  </div>
                </a>
              ))}
            </div>

            <hr className="annual-divider" />
          </div>
        ))}
    </div>
  );
}


