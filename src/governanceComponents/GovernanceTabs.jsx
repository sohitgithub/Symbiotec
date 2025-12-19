import React, { useState } from "react";

// --- Custom SVG Icon for Documents ---
const DocumentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState("Board");

  const tabs = [
    "Board", "Committee Composition", "Policies", "Offer Documents", 
    "Shareholding Pattern", "Disclosures", "Secreterial & Regulatory Compliance", 
    "Material Creditors", "Industry Report", "Scheme of Arrangements", "Media & Press"
  ];

  // --- BOARD MEMBERS DATA ---
  const boardMembers = [
    { img: "/images/boardimages/board-anil-satwani.png", name: "Mr Anil Satwani", role: "Chairman and Managing Director", slug: "anil-satwani" },
    { img: "/images/boardimages/board-hari-buggana.png", name: "Mr Hariharnath Buggana", role: "Nominee Director", slug: "hariharnath-buggana" },
    { img: "/images/boardimages/board-Sunita-Kishnani.png", name: "Mrs Sunita Kishnani", role: "Independent Director", slug: "sunita-kishnani" },
    { img: "/images/boardimages/board-pratik.png", name: "Mr Pratik Patel", role: "Managing Director", slug: "pratik-patel" },
    { img: "/images/boardimages/board-rohit.png", name: "Mr Rohit Mantri", role: "Nominee Director", slug: "rohit-mantri" },
    { img: "/images/boardimages/board-richard-kenny.png", name: "Mr Richard P F Kenny", role: "Independent Director", slug: "richard-kenny" },
  ];

  // --- DOCUMENTS DATA ---
  const documentData = {
    "Offer Documents": [
      { id: 1, title: "Prospectus", link: "#" },
      { id: 2, title: "Groww Audio Visual RHP - Hindi", link: "#" },
      { id: 3, title: "Groww Audio Visual RHP - English", link: "#" },
      { id: 4, title: "Price Band Advertisement", link: "#" },
      { id: 5, title: "Red Herring Prospectus", link: "#" },
    ],
    "Committee Composition": [
      { id: 101, title: "Audit Committee Charter", link: "#" },
      { id: 102, title: "Nomination & Remuneration Committee", link: "#" },
      { id: 103, title: "Stakeholders Relationship Committee", link: "#" },
      { id: 104, title: "CSR Committee Composition", link: "#" },
    ],
    "Policies": [
      { id: 201, title: "Policy for Determination of Material Subsidiary", link: "#" },
      { id: 202, title: "Policy for Determination of Materiality of events or information", link: "#" },
      { id: 203, title: "Policy on familiarization programme for Independent directors", link: "#" },
      { id: 204, title: "Policy for Preservation of Documents", link: "#" },
      { id: 205, title: "Policy on Related Party Transactions", link: "#" },
      { id: 206, title: "Dividend Distribution Policy", link: "#" },
      { id: 207, title: "Nomination and Remuneration Policy", link: "#" },
      { id: 208, title: "Policy on Diversity of Board of Directors", link: "#" },
      { id: 209, title: "Policy for Evaluation of Performance of BODs", link: "#" },
      { id: 210, title: "Plan for orderly Succession for appointment of directors and senior management", link: "#" },
      { id: 211, title: "Code of Conduct for Board and Senior Management", link: "#" },
      { id: 212, title: "Corporate Social Responsibility Policy", link: "#" },
      { id: 213, title: "Policy on POSH", link: "#" },
      { id: 214, title: "Policy on Vigil Mechanism", link: "#" },
      { id: 215, title: "Archival Policy", link: "#" },
      { id: 216, title: "Risk Assessment, Management and Mitigation Policy", link: "#" },
      { id: 217, title: "Policy for inquiry in case of leak of UPSI", link: "#" },
      { id: 218, title: "Policy for determining of legitimate purpose of sharing UPSI", link: "#" },
      { id: 219, title: "Code of Conduct to Regulate, Monitor and Report Trading by Designated Persons", link: "#" },
      { id: 220, title: "Code of Fair Disclosure Practices", link: "#" },
    ],
    "Shareholding Pattern": [
      { id: 301, title: "Shareholding Pattern - Q1 2024", link: "#" },
    ],
    "Secreterial & Regulatory Compliance": [
      { id: 401, title: "Annual Returns - Knovea 2022", link: "#" },
      { id: 402, title: "Annual Returns - Knovea 2023", link: "#" },
      { id: 403, title: "Annual Returns - Knovea 2024", link: "#" },
      { id: 404, title: "Annual Returns - Symbiotec 2022", link: "#" },
      { id: 405, title: "Annual Returns - Symbiotec 2023", link: "#" },
      { id: 406, title: "Annual Returns - Symbiotec 2024", link: "#" },
      { id: 407, title: "Annual Returns - SZPL 2022", link: "#" },
      { id: 408, title: "Annual Returns - SZPL 2023", link: "#" },
      { id: 409, title: "Annual Returns - SZPL 2024", link: "#" },
    ]
  };

  const currentDocuments = documentData[activeTab] || [];

  return (
    <div className="governance-container">
      <style>{`
        /* --- Container --- */
        .governance-container { padding: 20px; font-family: 'Inter', system-ui, sans-serif; max-width: 1400px; margin: 0 auto; }

        /* --- Tabs --- */
        .governance-tabs { display: flex; gap: 30px; border-bottom: 1px solid #e5e7eb; margin-bottom: 30px; overflow-x: auto; scrollbar-width: none; }
        .governance-tabs::-webkit-scrollbar { display: none; }
        .gov-tab { background: none; border: none; font-size: 15px; color: #6b7280; padding: 12px 0; cursor: pointer; white-space: nowrap; border-bottom: 2px solid transparent; transition: all 0.2s; font-weight: 500; }
        .gov-tab:hover { color: #2563eb; }
        .gov-tab.active { color: #2563eb; border-bottom: 2px solid #2563eb; font-weight: 600; }

        /* --- DOCUMENT GRID --- */
        .doc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
        .doc-card { display: flex; flex-direction: column; justify-content: space-between; height: 180px; padding: 24px; background-color: #fff; border: 1px solid #e5e7eb; border-radius: 12px; text-decoration: none; transition: all 0.3s ease; }
        .doc-card:hover { border-color: #93c5fd; box-shadow: 0 10px 25px rgba(37, 99, 235, 0.1); transform: translateY(-4px); }
        .doc-icon-wrapper { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 10px; background-color: #f3f4f6; color: #6b7280; transition: all 0.3s ease; }
        .doc-card:hover .doc-icon-wrapper { background-color: #eff6ff; color: #2563eb; }
        .doc-title { margin: 0; font-size: 15px; color: #374151; line-height: 1.5; font-weight: 500; }

        /* --- BOARD GRID --- */
        .board-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
          gap: 30px; 
          padding-top: 10px;
        }
        
        .board-member-card {
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .board-member-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
          border-color: #bfdbfe;
        }

        .board-img { 
          width: 100%; 
          aspect-ratio: 3/4;
          object-fit: cover;
          object-position: top center;
          background-color: #f3f4f6;
          border-bottom: 1px solid #f0f0f0;
        }

        .board-info-box {
            padding: 20px 15px;
            text-align: center;
        }

        .board-name { 
          margin: 0 0 8px 0; 
          font-size: 19px; 
          font-weight: 700; 
          color: #111827; 
          transition: color 0.3s ease;
        }

        .board-member-card:hover .board-name {
            color: #2563eb;
        }

        .board-role { 
          margin: 0; 
          font-size: 15px; 
          color: #6b7280; 
          font-weight: 500;
          line-height: 1.4;
        }

        /* --- Empty State --- */
        .empty-state { padding: 60px; text-align: center; color: #9ca3af; background: #f9fafb; border-radius: 12px; border: 1px dashed #e5e7eb; }
      `}</style>

      {/* TABS MENU */}
      <div className="governance-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`gov-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT AREA */}
      <div className="tab-content-area">
        
        {activeTab === "Board" ? (
          <div className="board-grid">
            {boardMembers.map((member) => (
              <div key={member.slug} className="board-member-card">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="board-img"
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/300x400?text=No+Image'}} 
                />
                <div className="board-info-box">
                    <h3 className="board-name">{member.name}</h3>
                    <p className="board-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          currentDocuments.length > 0 ? (
            <div className="doc-grid">
              {currentDocuments.map((doc) => (
                <a 
                  key={doc.id} 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="doc-card"
                >
                  <div className="doc-icon-wrapper">
                    <DocumentIcon />
                  </div>
                  <div className="doc-info">
                    <p className="doc-title">{doc.title}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No documents available for <strong>{activeTab}</strong> yet.</p>
            </div>
          )
        )}
      </div>

    </div>
  );
}