"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

type Project = {
  id: string; title: string; genre: string; desc: string;
  image: string; pills: string[]; link: string;
};

const projects: Project[] = [
  { id: "fifa", title: "FIFA 2026 POWER MODELING", genre: "Predictive Modeling",
    desc: "Predictive composite scoring & match simulation framework for World Cup 2026. Ensemble models ranking team strength across 32 nations with live bracket simulation.",
    image: "/messi.jpg", pills: ["Python", "Scikit-learn", "Simulation", "EDA"], link: "/projects/fifa" },
  { id: "human-age", title: "HUMAN AGE PREDICTION", genre: "ML Pipeline",
    desc: "End-to-end ML pipeline with Snowflake validation & bias diagnostics. Bias-corrected age estimates within ±3 years across demographics using XGBoost & neural networks.",
    image: "/human-age.png", pills: ["Snowflake", "XGBoost", "Bias Analysis", "Python"], link: "/projects/human-age" },
  { id: "spotify", title: "SPOTIFY RECOMMENDATION ENGINE", genre: "Recommender System",
    desc: "Heuristic-based scalable playlist recommendation engine using audio features, listening history signals, and collaborative filtering to generate personalized playlists.",
    image: "/spotify.jpg", pills: ["Python", "Collaborative Filtering", "Feature Eng."], link: "/projects/spotify" },
  { id: "airbnb", title: "AIRBNB STATISTICAL MODELING", genre: "Statistical Analysis",
    desc: "ANOVA testing & regression-based price optimization across NYC listings. Identified key price drivers and quantified neighborhood premiums with statistical rigor.",
    image: "/airbnb.jpg", pills: ["R", "ANOVA", "Regression", "Python"], link: "/projects/airbnb" },
  { id: "taxi-restaurant", title: "NYC DATA WAREHOUSE", genre: "Data Engineering",
    desc: "Dimensional modeling & BigQuery ETL architecture for NYC taxi and restaurant datasets at scale. Star schema with dbt transformations and automated pipeline monitoring.",
    image: "/NYC.png", pills: ["BigQuery", "dbt", "ETL", "SQL"], link: "/projects/taxi-restaurant" },
];

const stackItems = [
  { icon: "🐍", name: "Python",        cat: "Language"        },
  { icon: "🗄️", name: "SQL",           cat: "Language"        },
  { icon: "📊", name: "R",             cat: "Language"        },
  { icon: "❄️", name: "Snowflake",     cat: "Data Platform"   },
  { icon: "🔷", name: "BigQuery",      cat: "Data Warehouse"  },
  { icon: "🧱", name: "dbt",           cat: "Data Build Tool" },
  { icon: "⚡", name: "Databricks",    cat: "Data Platform"   },
  { icon: "📈", name: "Power BI",      cat: "Visualization"   },
  { icon: "🤖", name: "Scikit-learn",  cat: "Machine Learning"},
  { icon: "🚀", name: "XGBoost",       cat: "Machine Learning"},
  { icon: "🧮", name: "Pandas / NumPy",cat: "Data Wrangling"  },
  { icon: "🔬", name: "A/B Testing",   cat: "Experimentation" },
];

const RED    = "#E50914";
const BG     = "#0a0a0a";
const SURF   = "#141414";
const SURF2  = "#1f1f1f";
const MUTED  = "#888";
const DISP   = "var(--font-display,'Bebas Neue',sans-serif)";
const BODY   = "var(--font-body,'Barlow',sans-serif)";

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById("nf-nav");
    const fn = () => {
      if (!nav) return;
      nav.style.background = window.scrollY > 60
        ? "rgba(10,10,10,0.97)"
        : "linear-gradient(to bottom,rgba(0,0,0,0.85),transparent)";
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollRow = (id: string, dir: number) =>
    document.getElementById(id)?.scrollBy({ left: dir * 390, behavior: "smooth" });

  return (
    <main style={{ background: BG, minHeight: "100vh", overflowX: "hidden", fontFamily: BODY, color: "#e5e5e5" }}>

      {/* ── INLINE GLOBAL STYLES ── */}
      <style>{`
        *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .au1{animation:fadeUp .7s .10s ease both}
        .au2{animation:fadeUp .7s .25s ease both}
        .au3{animation:fadeUp .7s .35s ease both}
        .au4{animation:fadeUp .7s .45s ease both}
        .au5{animation:fadeUp .7s .55s ease both}
        .au6{animation:fadeUp .7s .65s ease both}

        .nf-card { flex:0 0 360px; scroll-snap-align:start; position:relative; border-radius:3px; overflow:hidden; cursor:pointer; background:${SURF2}; display:block; text-decoration:none; transition:transform .35s cubic-bezier(.23,1,.32,1), box-shadow .35s; }
        .nf-card:hover { transform:scale(1.06) translateY(-6px); box-shadow:0 28px 60px rgba(0,0,0,.85), 0 0 0 1px rgba(229,9,20,.4); z-index:10; }
        .nf-card:hover .thumb-img { transform:scale(1.08); }
        .thumb-img { transition:transform .5s ease; }

        .stack-cell { position:relative; overflow:hidden; background:${SURF}; padding:22px 18px; display:flex; align-items:center; gap:14px; transition:background .2s; }
        .stack-cell::before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:${RED}; transform:scaleY(0); transform-origin:top; transition:transform .2s; }
        .stack-cell:hover { background:${SURF2}; }
        .stack-cell:hover::before { transform:scaleY(1); }

        .nav-a { color:#e5e5e5; text-decoration:none; font-size:.85rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; opacity:.75; transition:opacity .2s; }
        .nav-a:hover { opacity:1; color:#fff; }

        .nf-pill { padding:3px 10px; background:rgba(229,9,20,.15); border:1px solid rgba(229,9,20,.3); border-radius:2px; font-size:.65rem; letter-spacing:.1em; text-transform:uppercase; color:#e88; font-weight:600; }
        .hero-tag { padding:4px 14px; border:1px solid rgba(229,9,20,.5); border-radius:2px; font-size:.73rem; letter-spacing:.1em; text-transform:uppercase; color:${RED}; font-weight:600; }

        .btn-red { display:inline-flex;align-items:center;gap:10px;padding:14px 32px;background:${RED};color:#fff;font-weight:700;font-size:.9rem;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:background .2s,transform .15s; }
        .btn-red:hover { background:#b8070f; transform:scale(1.03); }
        .btn-ghost { display:inline-flex;align-items:center;gap:10px;padding:14px 32px;background:rgba(255,255,255,.12);color:#fff;font-weight:600;font-size:.9rem;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;border:1px solid rgba(255,255,255,.2);transition:background .2s,transform .15s; }
        .btn-ghost:hover { background:rgba(255,255,255,.22); transform:scale(1.03); }

        .cbtn-play { flex:1;padding:9px;background:#fff;color:#000;border:none;border-radius:2px;font-size:.72rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;transition:background .2s; }
        .cbtn-play:hover { background:#ddd; }
        .cbtn-info { flex:1;padding:9px;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:2px;font-size:.72rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;transition:background .2s; }
        .cbtn-info:hover { background:rgba(255,255,255,.25); }

        .tl-li { list-style:none; }
        .tl-li li { font-size:.83rem;color:${MUTED};line-height:1.65;padding-left:14px;position:relative;margin-bottom:5px; }
        .tl-li li::before { content:'▸';position:absolute;left:0;color:${RED};font-size:.7rem; }
        .tl-li li strong { color:#ccc;font-weight:600; }

        .edge-p { font-size:.9rem;color:${MUTED};line-height:1.85;margin-bottom:14px; }
        .edge-p:last-child { margin-bottom:0; }
        .edge-p strong { color:#ccc;font-weight:600; }

        .abt-p { font-size:.88rem;color:${MUTED};line-height:1.85;margin-bottom:14px; }
        .abt-p strong { color:#ccc;font-weight:600; }

        .fl { color:${MUTED};text-decoration:none;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;font-weight:600;transition:color .2s; }
        .fl:hover { color:${RED}; }

        .carousel-row { display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:20px;scrollbar-width:none; }
        .carousel-row::-webkit-scrollbar { display:none; }

        @media(max-width:900px){
          .hero-stats { display:none!important; }
          .hero-wrap  { padding:0 24px 80px!important; }
          .row-wrap   { padding:0 24px!important; }
          .wide-wrap  { padding:60px 24px!important; }
          .about-cols { grid-template-columns:1fr!important; }
          .nav-inner  { padding:16px 24px!important; }
          .nav-ul     { gap:16px!important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav id="nf-nav" className="nav-inner" style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 48px",background:"linear-gradient(to bottom,rgba(0,0,0,.85),transparent)",transition:"background .3s" }}>
        <div style={{ fontFamily:DISP,fontSize:"2rem",letterSpacing:".1em",color:RED }}>DS<span style={{color:"#fff"}}>.</span></div>
        <ul className="nav-ul" style={{ display:"flex",gap:32,listStyle:"none" }}>
          {["projects","experience","stack","about"].map(s=>(
            <li key={s}><a href={`#${s}`} className="nav-a">{s}</a></li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-wrap" style={{ position:"relative",minHeight:"100vh",display:"flex",alignItems:"flex-end",padding:"0 72px 100px",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 80% at 70% 50%,rgba(229,9,20,.07),transparent 60%),linear-gradient(135deg,#0a0a0a,#1a0a0a)" }}/>
        <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(229,9,20,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(229,9,20,.04) 1px,transparent 1px)",backgroundSize:"60px 60px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)" }}/>
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,#0a0a0a 0%,rgba(0,0,0,.4) 40%,transparent 70%)" }}/>

        <div style={{ position:"relative",zIndex:2,maxWidth:680 }}>
          <div className="au1" style={{ fontSize:".75rem",letterSpacing:".3em",textTransform:"uppercase",color:RED,fontWeight:600,marginBottom:16,display:"flex",alignItems:"center",gap:12 }}>
            <span style={{ display:"inline-block",width:28,height:2,background:RED }}/>
            Portfolio · Data Analyst
          </div>
          <h1 className="au2" style={{ fontFamily:DISP,fontSize:"clamp(5rem,10vw,9rem)",lineHeight:.92,letterSpacing:".02em",color:"#fff" }}>
            DHRUV<br/><span style={{color:RED}}>SHARMA</span>
          </h1>
          <p className="au3" style={{ marginTop:24,fontSize:"1.15rem",fontWeight:300,color:MUTED,letterSpacing:".04em" }}>
            Revenue-Focused Data Analyst — Turning ambiguity into measurable business outcomes
          </p>
          <div className="au4" style={{ marginTop:14,display:"flex",flexWrap:"wrap",gap:8 }}>
            {["SQL","Python","Experimentation","BI Systems","Machine Learning"].map(t=>(
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
          <div className="au5" style={{ marginTop:40,display:"flex",gap:16,flexWrap:"wrap" }}>
            <a href="#projects" className="btn-red">▶ &nbsp;View Projects</a>
            <a href="https://www.linkedin.com/in/dhruv-sharma2299/" target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn</a>
            <a href="https://github.com/Dhruv10-hw"                  target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
            <a href="/Dhruv-Sharma-Resume.pdf"                        target="_blank"                  className="btn-ghost">Resume</a>
          </div>
        </div>

        <div className="hero-stats au6" style={{ position:"absolute",right:72,bottom:100,zIndex:2,display:"flex",flexDirection:"column",gap:28,textAlign:"right" }}>
          {[["$24M+","Revenue Influenced"],["12%","Conversion Lift"],["40%","Reporting Saved"]].map(([n,l])=>(
            <div key={l}>
              <div style={{ fontFamily:DISP,fontSize:"2.8rem",color:"#fff",lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:".72rem",letterSpacing:".15em",textTransform:"uppercase",color:MUTED,marginTop:2 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ padding:"60px 0 40px" }} id="projects">
        <div className="row-wrap" style={{ padding:"0 48px",marginBottom:20,display:"flex",alignItems:"baseline",gap:20 }}>
          <span style={{ fontSize:".75rem",letterSpacing:".15em",textTransform:"uppercase",color:RED,fontWeight:600 }}>Original Series</span>
          <h2 style={{ fontFamily:DISP,fontSize:"1.6rem",letterSpacing:".08em",color:"#fff" }}>FEATURED PROJECTS</h2>
        </div>
        <div className="row-wrap" style={{ position:"relative",padding:"0 48px" }}>
          <button onClick={()=>scrollRow("c1",-1)} style={{ position:"absolute",left:4,top:"42%",zIndex:5,background:"rgba(0,0,0,.75)",border:"1px solid rgba(255,255,255,.2)",color:"#fff",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"1.3rem",borderRadius:2 }}>‹</button>
          <div id="c1" className="carousel-row">
            {projects.map(p=><ProjectCard key={p.id} project={p}/>)}
          </div>
          <button onClick={()=>scrollRow("c1",1)} style={{ position:"absolute",right:4,top:"42%",zIndex:5,background:"rgba(0,0,0,.75)",border:"1px solid rgba(255,255,255,.2)",color:"#fff",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"1.3rem",borderRadius:2 }}>›</button>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <div className="wide-wrap" style={{ padding:"80px 72px",borderTop:"1px solid rgba(255,255,255,.06)" }} id="experience">
        <SecTitle>EXPERIENCE</SecTitle>
        <div style={{ position:"relative",paddingLeft:28 }}>
          <div style={{ position:"absolute",left:0,top:8,bottom:0,width:1,background:`linear-gradient(to bottom,${RED},transparent)` }}/>
          <TLItem period="Echelon India — 2023–2024" role="Data Analyst — Sales Operations"
            company="Real Estate & Project Launches · Sole Analyst supporting 12+ Sales Representatives"
            points={[
              <><strong>$24M+ in project launches</strong> supported through data-driven market analysis, lead scoring models, and pipeline visibility dashboards</>,
              <>Increased conversion rates by <strong>12%</strong> via funnel analysis; optimized marketing ROI by <strong>15%</strong> through targeted segmentation</>,
              <>Reduced manual reporting effort by <strong>40%</strong> through SQL and Python automation</>,
              <>Partnered directly with executives to deliver weekly decision-ready insights and strategic recommendations</>,
            ]}/>
          <TLItem period="ENC Network — 2021–2023" role="Data Analyst"
            company="Digital Media & Marketing Analytics"
            points={[
              <>A/B testing and statistical modeling that increased campaign conversions by <strong>15%</strong></>,
              <>Improved data quality by <strong>30%</strong> through cross-functional data governance and validation pipelines</>,
              <>Built audience segmentation models to optimize ad targeting, content strategy, and budget allocation</>,
              <>Defined KPIs with marketing and product teams; built the reporting infrastructure to track them</>,
            ]}/>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div className="wide-wrap" style={{ padding:"80px 72px",borderTop:"1px solid rgba(255,255,255,.06)" }} id="about">
        <SecTitle>ABOUT ME</SecTitle>
        <div className="about-cols" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"start" }}>
          <div>
            <div style={{ fontSize:".72rem",letterSpacing:".25em",textTransform:"uppercase",color:RED,fontWeight:700,marginBottom:12 }}>Who I Am</div>
            <div style={{ fontFamily:DISP,fontSize:"2.5rem",letterSpacing:".04em",lineHeight:.95,color:"#fff",marginBottom:20 }}>
              BUSINESS<br/>PARTNER,<br/>NOT JUST<br/>AN ANALYST
            </div>
            <p className="abt-p">I am a <strong>Data Analyst with 2+ years of professional experience</strong> supporting sales, marketing, and executive stakeholders across real estate and digital platforms. I specialize in transforming messy operational data into structured insights that drive measurable business impact.</p>
            <p className="abt-p">At Echelon India, I served as the sole Sales Operations Data Analyst, supporting 12+ sales representatives and contributing to $24M+ project launches. My dashboards improved pipeline visibility, increased conversion rates by 12%, and optimized marketing ROI by 15%. I reduced manual reporting effort by 40% through SQL and Python automation.</p>
            <p className="abt-p">Previously at ENC Network, I executed A/B testing, statistical modeling, and cross-functional analytics that increased campaign conversions by 15% and improved data quality by 30%.</p>
            <p className="abt-p">I see myself not just as a data producer, but as a <strong>business partner</strong>. I own the full analytical lifecycle — from problem framing and data modeling to executive storytelling and recommendation delivery.</p>
            <div style={{ marginTop:28,display:"flex",gap:16,flexWrap:"wrap" }}>
              <a href="https://www.linkedin.com/in/dhruv-sharma2299/" target="_blank" rel="noreferrer" className="btn-red">Connect on LinkedIn</a>
              <a href="https://github.com/Dhruv10-hw" target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:2 }}>
            {[["2+","Years Experience"],["$24M+","Revenue Influenced"],["12%","Conversion Lift"],["40%","Reporting Saved"],["15%","Campaign Lift"],["30%","Data Quality Gain"]].map(([n,l])=>(
              <div key={l} style={{ background:SURF,padding:"26px 18px",textAlign:"center" }}>
                <div style={{ fontFamily:DISP,fontSize:"2.2rem",color:RED }}>{n}</div>
                <div style={{ fontSize:".68rem",letterSpacing:".12em",textTransform:"uppercase",color:MUTED,marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BEYOND ANALYTICS ── */}
      <div className="wide-wrap" style={{ padding:"80px 72px",borderTop:"1px solid rgba(255,255,255,.06)" }}>
        <SecTitle>BEYOND ANALYTICS</SecTitle>
        <div style={{ background:SURF,borderLeft:`3px solid ${RED}`,padding:"32px 36px",marginTop:28,maxWidth:820 }}>
          <p className="edge-p">A <strong>former state-level professional football player for five years</strong>, I bring discipline, team-first thinking, and high-performance standards into my analytical work. The same rigor that made me competitive on the pitch shapes how I approach data problems — with precision, urgency, and a bias for action.</p>
          <p className="edge-p">During COVID-19, I launched a <strong>hyperlocal quick-commerce initiative</strong> delivering essential goods and healthy beverages within my locality. Profits were distributed to household staff and essential workers, reinforcing my belief that impact should extend beyond business.</p>
          <p className="edge-p">I am driven by <strong>meaningful decision-making</strong> — analytics that changes outcomes, not just reports that sit unused.</p>
        </div>
      </div>

      {/* ── STACK ── */}
      <div className="wide-wrap" style={{ padding:"80px 72px",borderTop:"1px solid rgba(255,255,255,.06)" }} id="stack">
        <SecTitle>TECHNICAL STACK</SecTitle>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))",gap:2,marginTop:32 }}>
          {stackItems.map(s=>(
            <div key={s.name} className="stack-cell">
              <div style={{ fontSize:"1.5rem" }}>{s.icon}</div>
              <div>
                <div style={{ fontWeight:600,fontSize:".86rem",letterSpacing:".04em",color:"#ddd" }}>{s.name}</div>
                <div style={{ fontSize:".66rem",letterSpacing:".1em",textTransform:"uppercase",color:RED,marginTop:2 }}>{s.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="wide-wrap" style={{ borderTop:"1px solid rgba(255,255,255,.06)",padding:"48px 72px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20 }}>
        <div style={{ fontFamily:DISP,fontSize:"1.5rem",color:RED,letterSpacing:".1em" }}>DS.</div>
        <ul style={{ display:"flex",gap:28,listStyle:"none" }}>
          <li><a href="https://github.com/Dhruv10-hw"                  target="_blank" rel="noreferrer" className="fl">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/dhruv-sharma2299/"  target="_blank" rel="noreferrer" className="fl">LinkedIn</a></li>
          <li><a href="/Dhruv-Sharma-Resume.pdf"                        target="_blank"                  className="fl">Resume</a></li>
        </ul>
        <div style={{ fontSize:".72rem",color:"rgba(255,255,255,.2)",letterSpacing:".05em" }}>© 2025 Dhruv Sharma</div>
      </footer>

    </main>
  );
}

/* ─── SECTION TITLE ─── */
function SecTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily:DISP,fontSize:"1.6rem",letterSpacing:".1em",marginBottom:36,display:"flex",alignItems:"center",gap:16,color:"#fff" }}>
      {children}
      <span style={{ flex:1,height:1,background:"linear-gradient(to right,rgba(229,9,20,.4),transparent)" }}/>
    </div>
  );
}

/* ─── TIMELINE ITEM ─── */
function TLItem({ period, role, company, points }: {
  period: string; role: string; company: string; points: React.ReactNode[];
}) {
  return (
    <div style={{ position:"relative",marginBottom:36 }}>
      <div style={{ position:"absolute",left:-32,top:8,width:9,height:9,borderRadius:"50%",background:RED,boxShadow:"0 0 12px rgba(229,9,20,.6)" }}/>
      <div style={{ fontSize:".72rem",letterSpacing:".15em",textTransform:"uppercase",color:RED,fontWeight:600,marginBottom:4 }}>{period}</div>
      <div style={{ fontFamily:DISP,fontSize:"1.3rem",letterSpacing:".05em",color:"#fff" }}>{role}</div>
      <div style={{ color:MUTED,fontSize:".85rem",marginBottom:10 }}>{company}</div>
      <ul className="tl-li" style={{ paddingLeft:0 }}>
        {points.map((pt,i)=><li key={i}>{pt}</li>)}
      </ul>
    </div>
  );
}

/* ─── PROJECT CARD ─── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.link} className="nf-card">
      {/* ✅ KEY FIX: explicit width+height so Next.js Image fills correctly */}
      <div style={{ position:"relative", width:"100%", height:210, overflow:"hidden" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="thumb-img"
          style={{ objectFit:"cover" }}
          sizes="360px"
        />
        {/* overlay */}
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 30%,rgba(0,0,0,.92))",zIndex:1 }}/>
        {/* genre label */}
        <span style={{ position:"absolute",bottom:14,left:14,zIndex:2,fontSize:".65rem",letterSpacing:".18em",textTransform:"uppercase",color:RED,fontWeight:700,background:"rgba(0,0,0,.55)",padding:"4px 10px",borderLeft:`2px solid ${RED}` }}>
          {project.genre}
        </span>
      </div>

      <div style={{ padding:"18px 20px 0" }}>
        <div style={{ fontFamily:DISP,fontSize:"1.3rem",letterSpacing:".05em",color:"#fff" }}>{project.title}</div>
        <div style={{ fontSize:".82rem",color:MUTED,marginTop:8,lineHeight:1.65 }}>{project.desc}</div>
        <div style={{ marginTop:10,display:"flex",gap:6,flexWrap:"wrap" }}>
          {project.pills.map(p=><span key={p} className="nf-pill">{p}</span>)}
        </div>
      </div>

      <div style={{ display:"flex",gap:10,padding:"14px 20px 20px" }}>
        <span className="cbtn-play">▶ View Project</span>
        <span className="cbtn-info">+ Details</span>
      </div>
    </Link>
  );
}