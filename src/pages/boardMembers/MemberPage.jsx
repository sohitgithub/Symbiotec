import React from "react";
import { useParams } from "react-router-dom";
import "./MemberPage.css";

export default function MemberPage() {
  const { slug } = useParams();

  const members = {
    "anil-satwani": {
      name: "Mr Anil Satwani",
      role: "Chairman and Managing Director",
      img: "/images/boardimages/board-anil-satwani.png",
      bio: `Anil Satwani is the Chairman and Managing Director on the Board of our Company.
            He has been associated with our Company since its incorporation. He holds a bachelor’s
            degree in science from Holkar Science College, Devi Ahilya Vishwavidyalaya, Indore, a 
            master’s of arts degree in economics from Indore Christian College, Devi Ahilya Vishwavidyalaya, 
            Indore and a master’s degree in business administration from the Institute of Management Studies, 
            Devi Ahilya Vishwavidyalaya, Indore. He has approximately 30 years of experience in the pharmaceutical sector. 
            In our Company, he is responsible for the overall management related to quality, production and finance.`,
    },

    "hariharnath-buggana": {
      name: "Mr Hariharnath Buggana",
      role: "Nominee Director",
      img: "/images/boardimages/board-hari-buggana.png",
      bio: `Hariharnath Buggana is a Nominee Director on the Board of our Company. 
            He holds a bachelor’s degree in engineering (chemical) from the Pravara 
            Education Society’s College of Engineering, Loni (Ahmednagar), University 
            of Poona, a master’s of science degree in chemical engineering from the College 
            of Engineering and Science, Illinois Institute of Technology and a master’s degree 
            in management from the J. L. Kellogg Graduate School of Management, Northwestern University. 
            He is currently serving as the chairman and designated partner at InvAscent Advisory Services 
            India LLP. He has previously been associated with Mckinsey & Company Inc. US and Abbott Laboratories`,
    },

    "sunita-kishnani": {
      name: "Mrs Sunita Kishnani",
      role: "Independent Director",
      img: "/images/boardimages/board-Sunita-Kishnani.png",
      bio: `Sunita Kishnani is an Independent Director on the Board of our Company. 
            She holds a bachelor’s degree in commerce from Devi Ahilya Vishwavidyalaya, 
            Indore, a master’s degree in business administration from the Institute of Management 
            Studies, Indore, Devi Ahilya Vishwavidyalaya, Indore and a degree of doctor of philosophy 
            from the Pacific Academy of Higher Education & Research University, Udaipur. She has also 
            participated in a programme on B2B marketing organised by the Indian Institute of Management, 
            Ahmedabad. She has approximately 30 years of experience in the marketing sector. She has previously 
            served as the CMO (chief marketing officer) with Systematix Infotech Private Limited  and 
            vice-president – product, digital initiative and SCM in the marketing department with 
            Boston Ivy Healthcare Solutions Private Limited.`,
    },
    "pratik-patel": {
      name: "Mr Pratik Patel",
      role: "Independent Director",
      img: "/images/boardimages/board-pratik.png",
      bio: `Mr. Pratik Patel is the Managing Director of Jash Engineering Limited, a publicly listed company.
            He holds a Bachelor's degree in Production Engineering from Sardar Patel University and an MBA in
            Finance from Devi Ahilya Vishwavidyalaya, Indore. With over 35 years of experience in marketing and 
            the design of engineering products, his expertise primarily lies in Sales and Marketing.`,
    },

    "rohit-mantri": {
      name: "Mr Rohit Mantri",
      role: "Independent Director",
      img: "/images/boardimages/board-rohit.png",
      bio: `Rohit leads the life sciences and healthcare investments at Motilal Oswal Private Equity (MOPE).
            He has over 15 years of experience in the life sciences sector in private equity and investment 
            banking.Before joining MOPE in 2015, Rohit worked as an Associate Director at KPMG in the investment 
            banking business, responsible for origination and execution of M&A, private equity, financial restructuring
            and joint venture transactions.Rohit is also a member of the Institute of Chartered Accountants of India 
            (all-India rank holder) and a qualified Company Secretary.`,
    },

    "richard-kenny": {
      name: "Mr Richard P F Kenny",
      role: "Independent Director",
      img: "/images/boardimages/board-richard-kenny.png",
      bio: `Richard Patrick Findlay Kenny is an Independent Director on the Board of our Company. 
            He is the Founder and Managing Partner of Hawkwood Biotech, the largest consulting practice dedicated 
            to industrial biotechnology, where he has built a highly skilled team of industrial biotech and foodtech 
            specialists to support emerging companies with commercial and technical scaling. After completing his thesis 
            in enzyme bioengineering at Oxford, he began his career in finance with Numis Securities (now part of Deutsche Bank),
            helping early-stage companies secure capital, and later earned his MBA from UC Berkeley before joining Solazyme, Inc. 
            (now part of Corbion NV), where he led business analytics and subsequently served as Product Line Director for the 
            launch of its successful omega-3 ingredient, AlgaPrime DHA. In 2017, he founded Hawkwood to guide the next generation 
            of industrial biotech ventures, while also serving in board, finance, and business development roles for several leading 
            companies in the space; additionally, he is a Venture Partner at Genoa Ventures and the acting CEO and co-founder of Redux 
            Bio, Inc., an animal health startup. He has approximately 15 years of experience in Industrial Biotech. He holds a master’s 
            degree in chemistry from University of Oxford, UK and a master’s degree in business administrative from University of California, 
            USA-Berkeley.`,
    },
  };

  const member = members[slug];
  if (!member) return <h2 style={{ padding: "40px" }}>Member not found</h2>;

  return (
    <div className="member-wrapper">
      {/* LEFT SIDE — Text Content */}
      <div className="member-left">
        <h1 className="board-member-name">{member.name}</h1>
        <h3 className="board-member-role">{member.role}</h3>

        <p className="member-bio">{member.bio}</p>
      </div>

      {/* RIGHT SIDE — Image */}
      <div className="member-right">
        <img src={member.img} alt={member.name} className="member-photo" />
      </div>
    </div>
  );
}
