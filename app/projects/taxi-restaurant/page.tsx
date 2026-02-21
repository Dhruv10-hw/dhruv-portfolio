"use client";
import Link from "next/link";
import Image from "next/image";

const R = "#E50914", BG = "#0a0a0a", S = "#141414", S2 = "#1f1f1f", M = "#888";
const D = "var(--font-display,'Bebas Neue',sans-serif)";

export default function NYCProject() {
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
        .arch-flow{background:${S2};border:1px solid rgba(229,9,20,.2);padding:20px 24px;font-family:monospace;font-size:.78rem;color:#aaa;line-height:2;border-radius:2px}
        .arch-flow .hl{color:${R};font-weight:700}
        .arch-flow .sub{color:#7ec8e3}
        .arch-flow .dim{color:#a8d8a8}
        .etl-step{background:${S2};padding:18px 20px;border-left:2px solid rgba(229,9,20,.5);margin-bottom:8px}
        .etl-step .sn{font-family:${D};font-size:1.5rem;color:rgba(229,9,20,.4);line-height:1;float:left;margin-right:12px}
        .etl-step .st{font-weight:700;font-size:.88rem;color:#fff;margin-bottom:4px;letter-spacing:.04em}
        .etl-step .sd{font-size:.8rem;color:${M};line-height:1.55;clear:both}
        .corr-highlight{background:rgba(229,9,20,.1);border:1px solid rgba(229,9,20,.3);padding:16px 20px;text-align:center;border-radius:2px}
        .corr-num{font-family:${D};font-size:3rem;color:${R};line-height:1}
        .corr-label{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:${M};margin-top:4px}
        @media(max-width:860px){.two-col{grid-template-columns:1fr !important}.stat-row{grid-template-columns:1fr 1fr !important}}
      `}</style>

      {/* HERO */}
      <div style={{ position:"relative", height:"60vh", minHeight:420, overflow:"hidden" }}>
        <Image src="/NYC.png" alt="NYC Data Warehouse" fill style={{ objectFit:"cover", objectPosition:"center top" }} sizes="100vw"/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(0,0,0,.2) 0%,rgba(10,10,10,1) 100%)" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(0,0,0,.8),transparent 50%)" }}/>
        <div style={{ position:"absolute", top:0, left:0, right:0, padding:"24px 48px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Link href="/" style={{ fontFamily:D, fontSize:"1.8rem", color:R, letterSpacing:".1em", textDecoration:"none" }}>DS<span style={{color:"#fff"}}>.</span></Link>
          <Link href="/" className="bl">← Back to Portfolio</Link>
        </div>
        <div style={{ position:"absolute", bottom:48, left:48, right:"38%" }}>
          <div style={{ fontSize:".72rem", letterSpacing:".25em", textTransform:"uppercase", color:R, fontWeight:700, marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ width:24, height:2, background:R, display:"inline-block" }}/>
            BigQuery · Python ETL · Sodapy API · Tableau · Star Schema
          </div>
          <h1 style={{ fontFamily:D, fontSize:"clamp(2.5rem,6vw,5rem)", lineHeight:.92, color:"#fff", marginBottom:16 }}>
            NYC SERVICE<br/><span style={{color:R}}>DATA WAREHOUSE</span>
          </h1>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {["BigQuery","Python","Sodapy API","Tableau","Star Schema","Kimball Methodology"].map(t=>(
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px 48px" }}>

        {/* STATS */}
        <div className="stat-row" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:2, marginBottom:60 }}>
          {[["0.87–0.90","Correlation Found"],["2021–2024","Data Timeframe"],["2","Source Domains"],["Star Schema","Kimball Method"]].map(([n,l])=>(
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
              <p>A cloud-based dimensional data warehouse integrating NYC 311 Taxi Complaints and Restaurant Inspection datasets to evaluate borough-level service quality and public safety patterns. Built using Python ETL pipelines, Google BigQuery, star schema modeling (Kimball methodology), and Tableau analytics.</p>
              <p><strong style={{color:"#ccc"}}>Core research question:</strong> Can borough-level safety and service quality be evaluated by integrating taxi complaint patterns with restaurant inspection outcomes — and does a cross-sector correlation exist?</p>
            </div>

            {/* DATA SOURCES */}
            <div className="sc">
              <h3>DATA SOURCES — 2021 TO 2024</h3>
              <ul>
                <li><strong>311 Taxi Complaints (NYC Open Data):</strong> Unsafe driving, route disputes, pickup refusals, unauthorized pickups — filtered to 2021–2024 via Sodapy API</li>
                <li><strong>DOHMH Restaurant Inspections (NYC Open Data):</strong> Inspection scores, letter grades (A/B/C/P/N/Z), critical violations, cuisine types, location data — filtered to 2021–2024</li>
              </ul>
            </div>

            {/* ARCHITECTURE */}
            <div className="sc">
              <h3>STAR SCHEMA — DUAL DOMAIN DESIGN</h3>
              <div className="arch-flow">
                <div><span className="hl">TAXI DOMAIN</span></div>
                <div><span className="sub">fact_taxi_complaints</span> ──┬── <span className="dim">dim_complaint_type</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="dim">dim_location</span> (borough, zip)</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="dim">dim_agency</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="dim">dim_date / dim_time</span></div>
                <br/>
                <div><span className="hl">RESTAURANT DOMAIN</span></div>
                <div><span className="sub">fact_restaurant_inspections</span> ──┬── <span className="dim">dim_inspection_type</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="dim">dim_grade</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className="dim">dim_location</span> ← shared</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className="dim">dim_date</span> ← shared</div>
                <br/>
                <div style={{color:"#888",fontSize:".75rem"}}>↑ Shared dimensions enable cross-domain KPI analysis</div>
              </div>
            </div>

            {/* ETL PIPELINE */}
            <div className="sc">
              <h3>ETL PIPELINE — 4 STAGES</h3>
              <div className="etl-step"><div className="sn">1</div><div className="st">Extraction</div><div className="sd">Sodapy API incremental pulls (2021–2024); chunked retrieval for large datasets; raw CSV staging</div></div>
              <div className="etl-step"><div className="sn">2</div><div className="st">Data Profiling</div><div className="sd">Automated profiling via ydata-profiling; null detection, duplicate detection, schema validation</div></div>
              <div className="etl-step"><div className="sn">3</div><div className="st">Transformation</div><div className="sd">Surrogate key generation; null normalization (strings → "Unknown", zipcodes → 99999); restaurant grade binning via pd.cut() (0–13=A, 14–27=B, 28+=C)</div></div>
              <div className="etl-step"><div className="sn">4</div><div className="st">Loading to BigQuery</div><div className="sd">WRITE_TRUNCATE for new tables; WRITE_APPEND for incremental; metadata fields: update_timestamp, update_date</div></div>
            </div>

            {/* KEY FINDING */}
            <div className="sc">
              <h3>🔑 KEY ANALYTICAL FINDING</h3>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16 }}>
                <div className="corr-highlight">
                  <div className="corr-num">0.87–0.90</div>
                  <div className="corr-label">Grade B&C restaurants ↔ Taxi complaints</div>
                </div>
                <div className="corr-highlight">
                  <div className="corr-num">0.69</div>
                  <div className="corr-label">Grade A restaurants ↔ Taxi complaints</div>
                </div>
              </div>
              <p><strong style={{color:"#ccc"}}>Interpretation:</strong> Neighborhoods with higher concentrations of lower-grade restaurants (B and C) also show significantly higher taxi complaints — suggesting systemic service quality disparities at the borough/zip level. Grade A restaurant areas correlate with better transportation service outcomes.</p>
              <ul style={{marginTop:12}}>
                <li><strong>Manhattan:</strong> High taxi complaints + high inspection volume — dense, high-pressure service environment</li>
                <li><strong>Bronx / Queens:</strong> Distinct clustering patterns — localized service disparities visible at zip-code level</li>
              </ul>
            </div>

          </div>

          {/* SIDEBAR */}
          <div>
            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>TECH STACK</div>
              {[["Extraction","Sodapy API"],["Transform","Python, Pandas"],["Profiling","ydata-profiling"],["Warehouse","Google BigQuery"],["Modeling","Kimball Star Schema"],["BI","Tableau"],["Execution","Google Colab"]].map(([k,v])=>(
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,.07)", fontSize:".82rem" }}>
                  <span style={{ color:M, textTransform:"uppercase", letterSpacing:".08em", fontSize:".72rem" }}>{k}</span>
                  <span style={{ color:"#ddd", fontWeight:600 }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>KPIs ENGINEERED</div>
              <div style={{ fontSize:".78rem", color:R, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", marginBottom:8 }}>Taxi</div>
              {["Total complaints by type","Complaints by borough","Monthly complaint volume","Time-of-day distribution"].map(k=>(
                <div key={k} style={{ fontSize:".8rem", color:M, padding:"6px 0", borderBottom:"1px solid rgba(255,255,255,.05)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:5, height:5, borderRadius:"50%", background:R, flexShrink:0 }}/>{k}
                </div>
              ))}
              <div style={{ fontSize:".78rem", color:R, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", margin:"12px 0 8px" }}>Restaurant</div>
              {["Inspection counts by grade","Violations by critical flag","Cuisine type distribution","Monthly inspection trends"].map(k=>(
                <div key={k} style={{ fontSize:".8rem", color:M, padding:"6px 0", borderBottom:"1px solid rgba(255,255,255,.05)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:5, height:5, borderRadius:"50%", background:R, flexShrink:0 }}/>{k}
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>SKILLS DEMONSTRATED</div>
              {["Kimball Dimensional Modeling","Google BigQuery Cloud DW","Sodapy API Ingestion","Surrogate Key Engineering","ETL Pipeline Automation","Cross-Domain Data Integration","Correlation-Based Analytics","Tableau Dashboard Design"].map(s=>(
                <div key={s} style={{ fontSize:".8rem", color:M, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0 }}/>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display:"flex", gap:16, marginTop:48, flexWrap:"wrap" }}>
          <a href="https://github.com/Dhruv10-hw/NYC-Taxi-Restaurant-Investigation" target="_blank" rel="noreferrer" className="br">View on GitHub</a>
          <Link href="/" className="bg">← Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}