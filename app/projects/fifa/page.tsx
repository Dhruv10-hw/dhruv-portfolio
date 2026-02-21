"use client";
import Link from "next/link";

const R = "#E50914", BG = "#0a0a0a", S = "#141414", S2 = "#1f1f1f", M = "#888";
const D = "var(--font-display,'Bebas Neue',sans-serif)";

export default function FifaProject() {
  return (
    <main style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-body,'Barlow',sans-serif)", color: "#e5e5e5" }}>
      <style>{`
        .bl { color:${M}; text-decoration:none; font-size:.8rem; letter-spacing:.15em; text-transform:uppercase; font-weight:600; transition:color .2s; display:inline-flex; align-items:center; gap:8px; }
        .bl:hover { color:${R}; }
        .pill { padding:4px 14px; border:1px solid rgba(229,9,20,.5); border-radius:2px; font-size:.75rem; letter-spacing:.1em; text-transform:uppercase; color:${R}; font-weight:600; }
        .sb { background:${S2}; padding:24px 20px; text-align:center; border-top:2px solid ${R}; }
        .sc { background:${S}; border-left:3px solid ${R}; padding:28px 32px; margin-bottom:16px; }
        .sc h3 { font-family:${D}; font-size:1.2rem; letter-spacing:.06em; color:#fff; margin-bottom:12px; }
        .sc p { font-size:.88rem; color:${M}; line-height:1.85; margin-bottom:10px; }
        .sc p:last-child { margin-bottom:0; }
        .sc ul { list-style:none; padding:0; }
        .sc ul li { font-size:.88rem; color:${M}; line-height:1.8; padding-left:14px; position:relative; margin-bottom:6px; }
        .sc ul li::before { content:'▸'; position:absolute; left:0; color:${R}; font-size:.7rem; }
        .sc ul li strong { color:#ccc; }
        .br { display:inline-flex; align-items:center; gap:10px; padding:14px 32px; background:${R}; color:#fff; font-weight:700; font-size:.9rem; letter-spacing:.08em; text-transform:uppercase; text-decoration:none; transition:background .2s; }
        .br:hover { background:#b8070f; }
        .bg { display:inline-flex; align-items:center; gap:10px; padding:14px 32px; background:rgba(255,255,255,.12); color:#fff; font-weight:600; font-size:.9rem; letter-spacing:.08em; text-transform:uppercase; text-decoration:none; border:1px solid rgba(255,255,255,.2); transition:background .2s; }
        .bg:hover { background:rgba(255,255,255,.22); }
        .arch-box { background:${S2}; border:1px solid rgba(229,9,20,.2); padding:24px; font-family:monospace; font-size:.8rem; color:#aaa; line-height:2; text-align:center; }
        .arch-box .hl { color:${R}; font-weight:700; }
        .arch-box .sub { color:#7ec8e3; }
        .page-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px; }
        .page-item { background:${S2}; padding:14px 16px; border-left:2px solid rgba(229,9,20,.4); }
        .page-item .pn { font-family:${D}; font-size:.95rem; letter-spacing:.05em; color:#fff; margin-bottom:4px; }
        .page-item .pd { font-size:.78rem; color:${M}; line-height:1.5; }
        @media(max-width:860px){ .two-col { grid-template-columns:1fr !important; } .stat-row { grid-template-columns:1fr 1fr !important; } }
      `}</style>

      {/* HERO */}
      <div style={{ position:"relative", height:"60vh", minHeight:420, overflow:"hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/messi.jpg" alt="FIFA 2026 Power Modeling" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(0,0,0,.25) 0%,rgba(10,10,10,1) 100%)" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(0,0,0,.75),transparent 55%)" }}/>
        {/* NAV */}
        <div style={{ position:"absolute", top:0, left:0, right:0, padding:"24px 48px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Link href="/" style={{ fontFamily:D, fontSize:"1.8rem", color:R, letterSpacing:".1em", textDecoration:"none" }}>DS<span style={{color:"#fff"}}>.</span></Link>
          <Link href="/" className="bl">← Back to Portfolio</Link>
        </div>
        {/* TITLE */}
        <div style={{ position:"absolute", bottom:48, left:48, right:"38%" }}>
          <div style={{ fontSize:".72rem", letterSpacing:".25em", textTransform:"uppercase", color:R, fontWeight:700, marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ width:24, height:2, background:R, display:"inline-block" }}/>
            Databricks SQL · Power BI · Sports Analytics
          </div>
          <h1 style={{ fontFamily:D, fontSize:"clamp(2.5rem,6vw,5rem)", lineHeight:.92, color:"#fff", marginBottom:16 }}>
            FIFA 2026<br/><span style={{color:R}}>POWER ANALYSIS</span>
          </h1>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {["Databricks SQL","Power BI","DAX","Bronze→Gold Modeling","Dark Horse Detection","Match Simulator"].map(t=>(
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px 48px" }}>

        {/* STATS */}
        <div className="stat-row" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:2, marginBottom:60 }}>
          {[["32","Nations Modeled"],["3-Layer","Bronze→Silver→Gold"],["4","Power Dimensions"],["Live","Match-Up Simulator"]].map(([n,l])=>(
            <div key={l} className="sb">
              <div style={{ fontFamily:D, fontSize:"2rem", color:R }}>{n}</div>
              <div style={{ fontSize:".68rem", letterSpacing:".12em", textTransform:"uppercase", color:M, marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>

        <div className="two-col" style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:32 }}>
          <div>

            {/* OVERVIEW */}
            <div className="sc">
              <h3>PROJECT OVERVIEW</h3>
              <p>A full-stack analytics project combining data engineering, advanced metrics, and interactive visualization to evaluate team strength for FIFA World Cup 2026. This project goes beyond rankings to answer one core question: <strong style={{color:"#ccc"}}>Who is actually strong — and who is just perceived to be strong?</strong></p>
              <p>Built using Databricks SQL and Power BI, the project delivers group-level insights, dark horse detection, and a head-to-head match-up simulator with radar chart comparison.</p>
            </div>

            {/* ARCHITECTURE */}
            <div className="sc">
              <h3>DATA ARCHITECTURE — BRONZE → SILVER → GOLD</h3>
              <div className="arch-box">
                <div><span className="hl">Raw FIFA & Match Data</span></div>
                <div style={{color:M}}>↓</div>
                <div><span className="sub">Databricks SQL (Bronze)</span> — Raw ingestion layer</div>
                <div style={{color:M}}>↓</div>
                <div><span className="sub">Cleaned & Enriched Tables (Silver)</span> — Normalized, validated</div>
                <div style={{color:M}}>↓</div>
                <div><span className="hl">Gold-Layer Analytical Models</span></div>
                <div style={{color:M}}>↓</div>
                <div><span className="sub">Power BI Dashboards & Simulator</span></div>
              </div>
              <div style={{ marginTop:14, display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                {["gold_wc2026_team_master","gold_final_power_score","gold_group_strength_index","gold_dark_horse_teams"].map(t=>(
                  <div key={t} style={{ background:BG, padding:"8px 12px", fontFamily:"monospace", fontSize:".75rem", color:"#7ec8e3", border:"1px solid rgba(229,9,20,.2)" }}>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* CORE METRICS */}
            <div className="sc">
              <h3>CORE ANALYTICAL METRICS</h3>
              <ul>
                <li><strong>Final Power Score:</strong> Composite index built from FIFA Strength, Recent Form, World Cup Experience, and Group Difficulty Adjustment — represents true team strength beyond rankings</li>
                <li><strong>Group Strength Index:</strong> Measures group competitiveness using average team power, strength dispersion, and presence of elite teams — identifies true "Groups of Death"</li>
                <li><strong>Dark Horse Score:</strong> Detects teams with lower FIFA ranking but high Final Power Score — teams most likely to outperform expectations</li>
                <li><strong>Power vs Perception Scatter:</strong> FIFA Rank plotted against Final Power to visualize systematic over/underrating across all 32 nations</li>
              </ul>
            </div>

            {/* DASHBOARD PAGES */}
            <div className="sc">
              <h3>4-PAGE POWER BI DASHBOARD</h3>
              <div className="page-grid">
                <div className="page-item">
                  <div className="pn">Page 1 — Tournament Overview</div>
                  <div className="pd">Total teams & groups, team strength ranking, confederation distribution</div>
                </div>
                <div className="page-item">
                  <div className="pn">Page 2 — Group Strength Analysis</div>
                  <div className="pd">Group Strength Index comparison, strongest vs weakest groups, competitive balance</div>
                </div>
                <div className="page-item">
                  <div className="pn">Page 3 — Power vs Perception</div>
                  <div className="pd">FIFA Rank vs Final Power scatter, dark horse identification, underrated teams table</div>
                </div>
                <div className="page-item">
                  <div className="pn">Page 4 — Match-Up Simulator</div>
                  <div className="pd">Team selectors, radar chart comparison, power delta, automated match verdict</div>
                </div>
              </div>
            </div>

            {/* SIMULATOR */}
            <div className="sc">
              <h3>🎮 INTERACTIVE MATCH-UP SIMULATOR</h3>
              <p>Compare any two of the 32 nations head-to-head across four dimensions:</p>
              <ul>
                <li><strong>FIFA Strength</strong> — baseline ranking score</li>
                <li><strong>Recent Form</strong> — last 12 months performance weighting</li>
                <li><strong>World Cup Experience</strong> — tournament pedigree factor</li>
                <li><strong>Final Power Score</strong> — normalized composite index</li>
              </ul>
              <p style={{marginTop:12}}>Outputs: Radar comparison chart · Power delta score · Automated match verdict (<em>Clear Favorite / Slight Edge / Too Close to Call</em>)</p>
            </div>

          </div>

          {/* SIDEBAR */}
          <div>
            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>PROJECT DETAILS</div>
              {[["Warehouse","Databricks SQL"],["BI Tool","Power BI"],["Measures","DAX"],["Schema","Bronze→Silver→Gold"],["Teams","32 Nations"],["Status","Completed"]].map(([k,v])=>(
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,.07)", fontSize:".82rem" }}>
                  <span style={{ color:M, textTransform:"uppercase", letterSpacing:".08em", fontSize:".72rem" }}>{k}</span>
                  <span style={{ color:"#ddd", fontWeight:600 }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>KEY QUESTIONS ANSWERED</div>
              {["Which groups are objectively strongest?","Which teams are overrated vs underrated?","Who are the true dark horses?","How do two teams compare head-to-head?","How competitive is the tournament overall?"].map(q=>(
                <div key={q} style={{ fontSize:".8rem", color:M, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"flex-start", gap:8, lineHeight:1.5 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0, marginTop:5 }}/>{q}
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>SKILLS DEMONSTRATED</div>
              {["Medallion Architecture (Bronze→Gold)","Composite Metric Design","DAX Measures & Normalization","Power BI Dashboard Design","Dark Horse Algorithm","Match Simulation Logic","Data Storytelling"].map(s=>(
                <div key={s} style={{ fontSize:".8rem", color:M, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0 }}/>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ display:"flex", gap:16, marginTop:48, flexWrap:"wrap" }}>
          <a href="https://github.com/Dhruv10-hw/FIFA-World-Cup-2026-Analytics" target="_blank" rel="noreferrer" className="br">View on GitHub</a>
          <Link href="/" className="bg">← Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}