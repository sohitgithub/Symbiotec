import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Board.css";

export default function Board() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  /* 🔹 STATIC MEMBERS */
  const staticMembers = [
    {
      img: "/images/boardimages/board-anil-satwani.png",
      name: "Mr Anil Satwani",
      role: "Chairman and Managing Director",
      slug: "anil-satwani",
    },
    {
      img: "/images/boardimages/board-hari-buggana.png",
      name: "Mr Hariharnath Buggana",
      role: "Nominee Director",
      slug: "hariharnath-buggana",
    },
    {
      img: "/images/boardimages/board-Sunita-Kishnani.png",
      name: "Mrs Sunita Kishnani",
      role: "Independent Director",
      slug: "sunita-kishnani",
    },
    {
      img: "/images/boardimages/board-pratik.png",
      name: "Mr Pratik Patel",
      role: "Managing Director",
      slug: "pratik-patel",
    },
    {
      img: "/images/boardimages/board-rohit.png",
      name: "Mr Rohit Mantri",
      role: "Nominee Director",
      slug: "rohit-mantri",
    },
    {
      img: "/images/boardimages/board-richard-kenny.png",
      name: "Mr Richard P F Kenny",
      role: "Independent Director",
      slug: "richard-kenny",
    },
  ];

  /* 🔹 CMS MEMBERS */
  const [cmsMembers, setCmsMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    // Safety check for URL
    if (!baseUrl) {
      setLoading(false);
      return;
    }

    fetch(`${baseUrl}/api/public/content?category=Governance&subcategory=Board`)
      .then((res) => res.json())
      .then((items = []) => {
        if (!isMounted) return;

        const mapped = items.map((item) => {
          const files = JSON.parse(item.files_json || "[]");
          const slug = item.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "";

          return {
            img: files[0]?.path ? `${baseUrl}${files[0].path}` : "/images/boardimages/default.png",
            name: item.title || "",
            role: item.summary || "",
            slug,
          };
        });
        setCmsMembers(mapped);
      })
      .catch((err) => console.error("Board CMS fetch error:", err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [baseUrl]);

  /* 🔹 MERGE DATA */
  const membersMap = new Map();
  [...staticMembers, ...cmsMembers].forEach((m) => {
    if (m.slug) membersMap.set(m.slug, m);
  });
  const members = Array.from(membersMap.values());

  if (loading) return <div className="board-loading">Loading...</div>;
  if (!members.length) return <div className="board-empty">No board members found.</div>;

  return (
    /* Unique Wrapper to prevent CSS leaking */
    <div className="board-section-wrapper">
      <div className="board-grid">
        {members.map((m) => (
          <Link to={`/board/${m.slug}`} className="board-card" key={m.slug}>
            <div className="board-card-inner">
              <div className="board-img-container">
                <img src={m.img} className="board-img" alt={m.name} loading="lazy" />
              </div>
              <h3 className="board-name">{m.name}</h3>
              <p className="board-role">{m.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}