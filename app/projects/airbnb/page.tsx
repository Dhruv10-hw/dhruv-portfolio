"use client";
import Link from "next/link";
import Image from "next/image";

const R = "#E50914", BG = "#0a0a0a", S = "#141414", S2 = "#1f1f1f", M = "#888";
const D = "var(--font-display,'Bebas Neue',sans-serif)";

export default function AirbnbProject() {
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
        .insight-box{background:${S2};padding:20px;border-top:2px solid rgba(229,9,20,.4)}
        .insight-box .ib-title{font-weight:700;font-size:.85rem;color:#fff;margin-bottom:8px;letter-spacing:.04em}
        .insight-box .ib-body{font-size:.8rem;color:${M};line-height:1.6}
        .insight-box .ib-stat{font-family:${D};font-size:1.6rem;color:${R};margin-bottom:4px}
        .test-box{background:${S2};border:1px solid rgba(229,9,20,.25);padding:20px 24px;margin-bottom:10px}
        .test-box .tb-name{font-family:${D};font-size:1rem;letter-spacing:.06em;color:#fff;margin-bottom:8px}
        .test-box .tb-result{font-size:.82rem;color:${M};line-height:1.65}
        .test-box .tb-verdict{display:inline-block;margin-top:8px;padding:3px 12px;background:rgba(229,9,20,.15);border:1px solid rgba(229,9,20,.3);border-radius:2px;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:${R};font-weight:700}
        @media(max-width:860px){.two-col{grid-template-columns:1fr !important}.stat-row{grid-template-columns:1fr 1fr !important}.insight-grid{grid-template-columns:1fr 1fr !important}}
      `}</style>

      {/* HERO */}
      <div style={{ position:"relative", height:"60vh", minHeight:420, overflow:"hidden" }}>
        <Image src="/airbnb.jpg" alt="Airbnb NYC Market Analysis" fill style={{ objectFit:"cover", objectPosition:"center" }} sizes="100vw"/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(0,0,0,.1) 0%,rgba(10,10,10,1) 100%)" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(0,0,0,.82),transparent 55%)" }}/>
        <div style={{ position:"absolute", top:0, left:0, right:0, padding:"24px 48px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Link href="/" style={{ fontFamily:D, fontSize:"1.8rem", color:R, letterSpacing:".1em", textDecoration:"none" }}>DS<span style={{color:"#fff"}}>.</span></Link>
          <Link href="/" className="bl">← Back to Portfolio</Link>
        </div>
        <div style={{ position:"absolute", bottom:48, left:48, right:"38%" }}>
          <div style={{ fontSize:".72rem", letterSpacing:".25em", textTransform:"uppercase", color:R, fontWeight:700, marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ width:24, height:2, background:R, display:"inline-block" }}/>
            Python · Statistical Testing · Kaggle API · SQLite
          </div>
          <h1 style={{ fontFamily:D, fontSize:"clamp(2.5rem,6vw,5rem)", lineHeight:.92, color:"#fff", marginBottom:16 }}>
            NYC AIRBNB<br/><span style={{color:R}}>MARKET ANALYSIS</span>
          </h1>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {["Python","Pandas","NumPy","Seaborn","ANOVA","Linear Regression","Kaggle API","SQLite"].map(t=>(
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px 48px" }}>

        {/* STATS */}
        <div className="stat-row" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:2, marginBottom:60 }}>
          {[["49,000+","Listings Analyzed"],["p<0.05","ANOVA Significance"],["R²=0.014","Availability Regression"],["5","Boroughs Modeled"]].map(([n,l])=>(
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
              <p>A full-cycle data analytics project exploring pricing dynamics, availability patterns, and market segmentation in NYC's Airbnb ecosystem. Built using automated Kaggle API ingestion, exploratory data analysis, ANOVA statistical testing, linear regression modeling, and SQLite database integration — designed to simulate a <strong style={{color:"#ccc"}}>production-style analytics workflow</strong>.</p>
            </div>

            <div className="sc">
              <h3>CORE RESEARCH QUESTIONS</h3>
              <ul>
                <li>What drives price differences across boroughs and room types?</li>
                <li>Does availability significantly influence pricing?</li>
                <li>How do stay duration patterns reflect market demand?</li>
                <li>Can pricing be statistically explained using structured features?</li>
              </ul>
            </div>

            {/* STATS TESTS */}
            <div className="sc">
              <h3>STATISTICAL TESTING</h3>
              <div className="test-box">
                <div className="tb-name">ANOVA TEST — Price vs Room Type</div>
                <div className="tb-result">
                  H₀: No price difference across room types<br/>
                  Result: <strong style={{color:"#ccc"}}>p-value &lt; 0.05</strong><br/>
                  Conclusion: Room type significantly impacts pricing — strong statistical evidence confirms segmentation-based pricing structure
                </div>
                <span className="tb-verdict">H₀ Rejected</span>
              </div>
              <div className="test-box">
                <div className="tb-name">LINEAR REGRESSION — Price vs Availability</div>
                <div className="tb-result">
                  R² ≈ 0.014 — Availability is statistically significant but a weak predictor<br/>
                  Indicates other variables dominate price formation (room type, location, quality)
                </div>
                <span className="tb-verdict">Weak Predictor Confirmed</span>
              </div>
              <div className="test-box">
                <div className="tb-name">MULTIVARIATE REGRESSION — Price Drivers</div>
                <div className="tb-result">
                  Features: Latitude, Longitude, Minimum Nights, Reviews/Month, Availability_365<br/>
                  Conclusion: Basic regression explains limited variance → pricing likely influenced by nonlinear or unobserved variables (amenities, property quality)
                </div>
                <span className="tb-verdict">Feature Gap Identified</span>
              </div>
            </div>

            {/* KEY INSIGHTS */}
            <div className="sc">
              <h3>KEY MARKET INSIGHTS</h3>
              <div className="insight-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:16 }}>
                <div className="insight-box">
                  <div className="ib-title">🏢 Entire Home/Apt</div>
                  <div className="ib-body">Highest mean price and highest price variance — premium strategy market</div>
                </div>
                <div className="insight-box">
                  <div className="ib-title">🛏️ Private Rooms</div>
                  <div className="ib-body">Mid-range pricing — best price-privacy tradeoff for travelers</div>
                </div>
                <div className="insight-box">
                  <div className="ib-title">🤝 Shared Rooms</div>
                  <div className="ib-body">Lowest and most stable pricing — niche budget segment</div>
                </div>
              </div>
              <ul>
                <li><strong>Manhattan dominates</strong> across all room types — location remains the strongest pricing determinant</li>
                <li><strong>Brooklyn</strong> balances price and availability — best occupancy-maximization borough</li>
                <li><strong>Queens & Bronx</strong> offer lower-cost alternatives with higher availability</li>
                <li><strong>Short stays dominate:</strong> 1-2 night minimums represent ~60%+ of all listings</li>
                <li><strong>Manhattan & Brooklyn:</strong> Low availability → high demand pressure; Queens & Staten Island → higher availability, lower demand</li>
              </ul>
            </div>

            <div className="sc">
              <h3>DATABASE INTEGRATION</h3>
              <p>To simulate production data flow, data was exported to a SQLite database (table: <code style={{color:"#7ec8e3",fontSize:".82rem"}}>ab_nyc_listings</code>), re-ingested using SQL queries, and schema integrity was validated — demonstrating pipeline continuity between analytics and storage layers.</p>
            </div>

          </div>

          {/* SIDEBAR */}
          <div>
            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>PROJECT DETAILS</div>
              {[["Language","Python"],["Data Source","Kaggle API"],["Records","49,000+ listings"],["Test","ANOVA + Regression"],["Storage","SQLite"],["Team","Group 5 (5 members)"]].map(([k,v])=>(
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,.07)", fontSize:".82rem" }}>
                  <span style={{ color:M, textTransform:"uppercase", letterSpacing:".08em", fontSize:".72rem" }}>{k}</span>
                  <span style={{ color:"#ddd", fontWeight:600 }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>VISUALIZATIONS</div>
              {["Price distribution histograms","Room-type price bar charts","Borough-room heatmap","Boxplots of availability","Scatterplot: Price vs Location","Stay-duration pie chart","ANOVA validation results"].map(s=>(
                <div key={s} style={{ fontSize:".8rem", color:M, padding:"7px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0 }}/>{s}
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>SKILLS DEMONSTRATED</div>
              {["Kaggle API Data Ingestion","ANOVA Hypothesis Testing","OLS Regression Modeling","Seaborn Visualization","SQLite DB Integration","Borough-Level Segmentation","Statistical Storytelling"].map(s=>(
                <div key={s} style={{ fontSize:".8rem", color:M, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0 }}/>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display:"flex", gap:16, marginTop:48, flexWrap:"wrap" }}>
          <a href="https://github.com/Dhruv10-hw/Airbnb-Data-Analysis" target="_blank" rel="noreferrer" className="br">View on GitHub</a>
          <Link href="/" className="bg">← Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}