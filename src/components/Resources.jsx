import React from "react";
import "./Resources.css";
import { MdEmail, MdCall } from "react-icons/md";

const Resources = () => {
  return (
    <section className="resources-wrapper">
      <h2 className="resources-title">Resources</h2>

      <div className="resources-grid">

        {/* Column 1 */}
        <div className="resources-card">
          <p className="resources-subtitle">For grievances</p>
          <h4 className="resources-name">Salil Jain</h4>
          <p className="resources-role">
            Company Secretary & Compliance Officer
          </p>
          <p className="resources-role">
            Symbiotec Pharmalab Limited 385/2, Pigdamber Rau, Mhow, Indore – 453 331 Madhya Pradesh, India
          </p>

          <div className="resources-contact">
            <MdEmail />
            <a href="mailto:corp.secretarial@symbiotec.in">
               symbiotecpharmalab.ipo@in.mpms.mufg.com
            </a>
          </div>
          <div className="resources-contact">
            <MdCall />
            <span> +91 731 6676 405</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="resources-card">
          <p className="resources-subtitle">For queries</p>
          <h4 className="resources-name">Shanti Gopalkrishnan</h4>
          <p className="resources-role">Head - Investor Relations</p>
          <p className="resources-role">Symbiotec Pharmalab Limited 385/2, Pigdamber Rau, Mhow, Indore – 453 331 Madhya Pradesh, India </p>
            
          <div className="resources-contact">
            <MdEmail />
            <a href="mailto:secretarial@symbiotec.com">
               secretarial@symbiotec.com
            </a>
          </div>

          <div className="resources-contact">
            <MdCall />
            <span>+91 731 6676 405</span>
          </div>

          <p className="resources-role-sebi">SEBI Registration No: INR000004058</p>
          <p className="resources-role-sebi"><a href="https://www.in.mpms.mufg.com">www.in.mpms.mufg.com</a></p>
          
        </div>

        {/* Column 3 */}
        <div className="resources-card">
          <p className="resources-subtitle">
            Registrar & share transfer agent
          </p>
          <h4 className="resources-name">
            MUFG Intime India Private Limited (Formerly Link Intime India Private Limited)
          </h4>

          <p className="resources-role">
            C-101, Embassy 247,L.B.S. Marg, Vikhroli (West) Mumbai 400 083 Maharashtra, India

          </p>

          <div className="resources-contact">
            <MdEmail />
            <a href="mailto:corp.secretarial@symbiotec.in">
               symbiotecpharmalab.ipo@in.mpms.mufg.com
            </a>
          </div>

          <div className="resources-contact">
            <MdCall />
            <span>+ 91 810 811 4949</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resources;
