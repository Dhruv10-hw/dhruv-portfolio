"use client";
import Link from "next/link";
import Image from "next/image";

const R = "#E50914", BG = "#0a0a0a", S = "#141414", S2 = "#1f1f1f", M = "#888";
const D = "var(--font-display,'Bebas Neue',sans-serif)";

export default function HumanAgeProject() {
  return (
    <main style={{ background:BG, minHeight:"100vh", fontFamily:"var(--font-body,'Barlow',sans-serif)", color:"#e5e5e5" }}>
      <style>{`
        .bl{color:${M};text-decoration:none;font-size:.8rem;letter-spacing:.15em;text-transform:uppercase;font-weight:600;transition:color .2s;display:inline-flex;align-items:center;gap:8px}
        .bl:hover{color:${R}}
        .pill{padding:4px 14px;border:1px solid rgba(229,9,20,.5);border-radius:2px;font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:${R};font-weight:600}
        .sb{background:${S2};padding:24px 20px;text-align:center;border-top:2px solid ${R}}
        .sc{background:${S};border-left:3px solid ${R};padding:28px 32px;margin-bottom:16px}
        .sc h3{font-family:${D};font-size:1.2rem;letter-spacing:.06em;color:#fff;margin-bottom:12px}
        .sc p{font-size:.88rem;color:${M};line-height:1.85;margin-bottom:10px}
        .sc p:last-child{margin-bottom:0}
        .sc ul{list-style:none;padding:0}
        .sc ul li{font-size:.88rem;color:${M};line-height:1.8;padding-left:14px;position:relative;margin-bottom:6px}
        .sc ul li::before{content:'▸';position:absolute;left:0;color:${R};font-size:.7rem}
        .sc ul li strong{color:#ccc}
        .br{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;background:${R};color:#fff;font-weight:700;font-size:.9rem;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:background .2s}
        .br:hover{background:#b8070f}
        .bg{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;background:rgba(255,255,255,.12);color:#fff;font-weight:600;font-size:.9rem;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;border:1px solid rgba(255,255,255,.2);transition:background .2s}
        .bg:hover{background:rgba(255,255,255,.22)}
        .metric-table{width:100%;border-collapse:collapse;margin-top:8px}
        .metric-table th{text-align:left;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:${R};padding:8px 12px;border-bottom:1px solid rgba(229,9,20,.3)}
        .metric-table td{font-size:.84rem;color:#ddd;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.06)}
        .metric-table td:last-child{color:${R};font-family:${D};font-size:1.1rem;font-weight:600}
        @media(max-width:860px){.two-col{grid-template-columns:1fr !important}.stat-row{grid-template-columns:1fr 1fr !important}}
      `}</style>

      {/* HERO */}
      <div style={{ position:"relative", height:"60vh", minHeight:420, overflow:"hidden" }}>
        <Image src="/human-age.png" alt="Human Age Prediction" fill style={{ objectFit:"cover", objectPosition:"center" }} sizes="100vw"/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(0,0,0,.2) 0%,rgba(10,10,10,1) 100%)" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(0,0,0,.8),transparent 55%)" }}/>
        <div style={{ position:"absolute", top:0, left:0, right:0, padding:"24px 48px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Link href="/" style={{ fontFamily:D, fontSize:"1.8rem", color:R, letterSpacing:".1em", textDecoration:"none" }}>DS<span style={{color:"#fff"}}>.</span></Link>
          <Link href="/" className="bl">← Back to Portfolio</Link>
        </div>
        <div style={{ position:"absolute", bottom:48, left:48, right:"38%" }}>
          <div style={{ fontSize:".72rem", letterSpacing:".25em", textTransform:"uppercase", color:R, fontWeight:700, marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ width:24, height:2, background:R, display:"inline-block" }}/>
            Python · Snowflake · Tableau · Scikit-learn
          </div>
          <h1 style={{ fontFamily:D, fontSize:"clamp(2.5rem,6vw,5rem)", lineHeight:.92, color:"#fff", marginBottom:16 }}>
            HUMAN AGE<br/><span style={{color:R}}>PREDICTION</span>
          </h1>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {["Python","Scikit-learn","Snowflake SQL","Tableau","Bias Diagnostics","Production Evaluation"].map(t=>(
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px 48px" }}>

        {/* STATS */}
        <div className="stat-row" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:2, marginBottom:60 }}>
          {[["4.36 yrs","MAE"],["5.47 yrs","RMSE"],["0.13 yr","Avg Bias"],["600","Predictions Evaluated"]].map(([n,l])=>(
            <div key={l} className="sb">
              <div style={{ fontFamily:D, fontSize:"2rem", color:R }}>{n}</div>
              <div style={{ fontSize:".68rem", letterSpacing:".12em", textTransform:"uppercase", color:M, marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>

        <div className="two-col" style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:32 }}>
          <div>

            <div className="sc">
              <h3>PROJECT OVERVIEW</h3>
              <p>A full-stack Machine Learning project predicting human age from lifestyle, demographic, and behavioral features. The objective was not just to build a model — but to evaluate it like a <strong style={{color:"#ccc"}}>production system</strong> using model error diagnostics, bias analysis, segment sensitivity testing, residual analysis, SQL validation in Snowflake, and executive-level Tableau dashboards.</p>
              <p>This simulates how a healthcare or insurance company might predict biological aging risk, detect abnormal aging patterns, and monitor model bias across demographic segments.</p>
            </div>

            <div className="sc">
              <h3>FULL-STACK ARCHITECTURE</h3>
              <ul>
                <li><strong>Machine Learning (Python):</strong> Pandas, NumPy, Scikit-learn — preprocessing, feature engineering, model benchmarking, evaluation</li>
                <li><strong>Data Warehouse (Snowflake):</strong> Model outputs pushed to Snowflake; SQL views created for MAE, bias, age-group error breakdowns, and lifestyle sensitivity analysis</li>
                <li><strong>BI Layer (Tableau):</strong> Two production-grade dashboards — Age Prediction analytics and Model Evaluation & Segment Sensitivity</li>
              </ul>
            </div>

            <div className="sc">
              <h3>DASHBOARD 1 — HUMAN AGE PREDICTION</h3>
              <p>Visualizes prediction accuracy and lifestyle-based error patterns:</p>
              <ul>
                <li>Actual vs Predicted age trend overlay</li>
                <li>Age gap distribution (error centering analysis)</li>
                <li>Lifestyle factor impact on prediction spread</li>
                <li>Aging risk segmentation clusters</li>
              </ul>
              <p style={{marginTop:8}}><em>Key finding: Error distribution centers around zero with minimal systemic bias — model is not systematically over or under-predicting.</em></p>
            </div>

            <div className="sc">
              <h3>DASHBOARD 2 — MODEL EVALUATION & SEGMENT SENSITIVITY</h3>
              <p>Production-grade model diagnostics using parameter-driven segmentation:</p>
              <ul>
                <li>MAE, RMSE, and Avg Bias computed on 600 held-out predictions</li>
                <li>Residual diagnostic plot — error vs actual age trend</li>
                <li>Error distribution histogram — normality check</li>
                <li>Dynamic segment sensitivity via Tableau parameter controls</li>
                <li>High-error flag monitoring — flagging predictions exceeding threshold</li>
              </ul>

              <table className="metric-table">
                <thead>
                  <tr><th>Metric</th><th>Value</th></tr>
                </thead>
                <tbody>
                  {[["MAE","4.36 years"],["RMSE","5.47 years"],["Avg Bias","0.13 years"],["Predictions Evaluated","600"]].map(([m,v])=>(
                    <tr key={m}><td>{m}</td><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sc">
              <h3>SNOWFLAKE SQL VALIDATION LAYER</h3>
              <p>Model outputs were pushed into Snowflake and analyzed using SQL — simulating a production data warehouse evaluation workflow:</p>
              <ul>
                <li>Joined training data with predictions via <code style={{color:"#7ec8e3",fontSize:".82rem"}}>PERSON_ID</code></li>
                <li>Created analytical views for dashboard consumption</li>
                <li>Calculated MAE, bias, and age-group error breakdowns in SQL</li>
                <li>Built lifestyle sensitivity tables for downstream Tableau joins</li>
                <li>Ensures SQL validation, audit trail, and warehouse-level metric verification</li>
              </ul>
            </div>

          </div>

          {/* SIDEBAR */}
          <div>
            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>PROJECT DETAILS</div>
              {[["ML","Python / Scikit-learn"],["Warehouse","Snowflake"],["BI","Tableau Public"],["Predictions","600 evaluated"],["MAE","4.36 years"],["Status","Completed"]].map(([k,v])=>(
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,.07)", fontSize:".82rem" }}>
                  <span style={{ color:M, textTransform:"uppercase", letterSpacing:".08em", fontSize:".72rem" }}>{k}</span>
                  <span style={{ color:"#ddd", fontWeight:600 }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>BUSINESS FRAMING</div>
              {["Predict biological aging risk","Detect abnormal aging patterns","Monitor model bias across demographics","Validate ML in data warehouse","Deliver executive-ready dashboards"].map(s=>(
                <div key={s} style={{ fontSize:".8rem", color:M, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"flex-start", gap:8, lineHeight:1.5 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0, marginTop:5 }}/>{s}
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>SKILLS DEMONSTRATED</div>
              {["End-to-End ML Pipeline","Snowflake SQL Integration","Bias & Fairness Auditing","Residual Diagnostics","Tableau Dashboard Design","Segment Sensitivity Testing","Production Evaluation Mindset"].map(s=>(
                <div key={s} style={{ fontSize:".8rem", color:M, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0 }}/>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display:"flex", gap:16, marginTop:48, flexWrap:"wrap" }}>
          <a href="https://public.tableau.com/app/profile/dhruv.sharma6989" target="_blank" rel="noreferrer" className="br">View Tableau Dashboards</a>
          <a href="https://github.com/Dhruv10-hw/Human-Age-Prediction" target="_blank" rel="noreferrer" className="bg">GitHub</a>
          <Link href="/" className="bg">← Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}