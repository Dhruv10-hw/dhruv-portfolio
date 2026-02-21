"use client";
import Link from "next/link";
import Image from "next/image";

const R = "#E50914", BG = "#0a0a0a", S = "#141414", S2 = "#1f1f1f", M = "#888";
const D = "var(--font-display,'Bebas Neue',sans-serif)";

const heuristics = [
  { num: "01", name: "Playlist Co-Occurrence", type: "Behavioral Signal", desc: "Identifies tracks appearing alongside anchor songs in real user playlists across 1M+ playlist entries" },
  { num: "02", name: "Tempo & Key Matching", type: "Musical Compatibility", desc: "Filters tracks within harmonic and BPM proximity — optimal danceability cluster found at 90–120 BPM" },
  { num: "03", name: "Artist Affinity Expansion", type: "Artist Network", desc: "Extends candidate pool within anchor artist ecosystems to preserve creative coherence" },
  { num: "04", name: "Acoustic Feature Similarity", type: "Feature Distance Scoring", desc: "Minimizes deviation across danceability, energy, and acousticness using distance scoring" },
  { num: "05", name: "Emotional Continuity", type: "Mood Stability", desc: "Filters by valence proximity and loudness proximity to maintain a consistent emotional arc" },
];

export default function SpotifyProject() {
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
        .h-card{background:${S2};padding:20px;border-top:2px solid rgba(229,9,20,.4);transition:border-color .2s}
        .h-card:hover{border-color:${R}}
        .h-num{font-family:${D};font-size:2rem;color:rgba(229,9,20,.3);line-height:1}
        .h-name{font-weight:700;font-size:.9rem;color:#fff;margin:6px 0 4px;letter-spacing:.04em}
        .h-type{font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:${R};margin-bottom:8px}
        .h-desc{font-size:.8rem;color:${M};line-height:1.6}
        .funnel{background:${S2};border:1px solid rgba(229,9,20,.2);padding:20px 24px;text-align:center;border-radius:2px}
        .funnel .fn{font-family:${D};font-size:1.8rem;color:${R}}
        .funnel .fl{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:${M};margin-top:2px}
        .funnel .fa{font-size:.75rem;color:rgba(229,9,20,.5);margin:8px 0 4px}
        @media(max-width:860px){.two-col{grid-template-columns:1fr !important}.stat-row{grid-template-columns:1fr 1fr !important}.h-grid{grid-template-columns:1fr !important}}
      `}</style>

      {/* HERO */}
      <div style={{ position:"relative", height:"60vh", minHeight:420, overflow:"hidden" }}>
        <Image src="/spotify.jpg" alt="Spotify Recommendation Engine" fill style={{ objectFit:"cover", objectPosition:"center" }} sizes="100vw"/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(0,0,0,.3) 0%,rgba(10,10,10,1) 100%)" }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(0,0,0,.85),transparent 55%)" }}/>
        <div style={{ position:"absolute", top:0, left:0, right:0, padding:"24px 48px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Link href="/" style={{ fontFamily:D, fontSize:"1.8rem", color:R, letterSpacing:".1em", textDecoration:"none" }}>DS<span style={{color:"#fff"}}>.</span></Link>
          <Link href="/" className="bl">← Back to Portfolio</Link>
        </div>
        <div style={{ position:"absolute", bottom:48, left:48, right:"38%" }}>
          <div style={{ fontSize:".72rem", letterSpacing:".25em", textTransform:"uppercase", color:R, fontWeight:700, marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ width:24, height:2, background:R, display:"inline-block" }}/>
            R · dplyr · ggplot2 · Quarto · GitHub Pages
          </div>
          <h1 style={{ fontFamily:D, fontSize:"clamp(2.2rem,6vw,5rem)", lineHeight:.92, color:"#fff", marginBottom:16 }}>
            HUSTLE & HEART<br/><span style={{color:R}}>SPOTIFY ENGINE</span>
          </h1>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {["R","dplyr / tidyr","ggplot2","jsonlite","Quarto","GitHub Pages"].map(t=>(
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px 48px" }}>

        {/* STATS */}
        <div className="stat-row" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:2, marginBottom:60 }}>
          {[["50,684","Unique Tracks"],["9,609","Unique Artists"],["1M+","Playlist Entries"],["12","Final Curated Tracks"]].map(([n,l])=>(
            <div key={l} className="sb">
              <div style={{ fontFamily:D, fontSize:"2rem", color:R }}>{n}</div>
              <div style={{ fontSize:".68rem", letterSpacing:".12em", textTransform:"uppercase", color:M, marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>

        <div className="two-col" style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:32 }}>
          <div>

            <div className="sc">
              <h3>PROJECT OVERVIEW — HUSTLE & HEART</h3>
              <p>A scalable, heuristic-based Spotify playlist recommendation system that builds a <strong style={{color:"#ccc"}}>transparent, feature-driven recommendation pipeline</strong> using large-scale Spotify data. Rather than relying on black-box ML models, the system leverages interpretable heuristics across audio features, playlist co-occurrence patterns, and artist affinity to generate a cohesive 12-track playlist.</p>
              <p>The result is a reproducible recommendation pipeline capable of scaling to tens of thousands of tracks and millions of playlist interactions — published as an interactive Quarto report on GitHub Pages.</p>
              <div style={{ marginTop:16 }}>
                <a href="https://dhruvhw-10.github.io/STA9750-2025-SPRING/mp03.html" target="_blank" rel="noreferrer" className="br" style={{ fontSize:".8rem", padding:"10px 20px" }}>
                  🔗 View Live Project
                </a>
              </div>
            </div>

            <div className="sc">
              <h3>DATASET & SCALE</h3>
              <ul>
                <li><strong>Spotify Song Feature Dataset</strong> — audio feature data for 50,684 unique tracks across 9,609 unique artists</li>
                <li><strong>Spotify Million Playlist Dataset (MPD)</strong> — 1M+ real user playlist entries providing behavioral co-occurrence signals</li>
                <li><strong>Temporal span:</strong> Multi-decade coverage from 1920s to 2020s</li>
                <li><strong>Audio features used:</strong> Danceability, Energy, Valence, Tempo, Loudness, Acousticness, Key, Duration, Popularity</li>
              </ul>
            </div>

            {/* 5 HEURISTICS */}
            <div className="sc">
              <h3>5-HEURISTIC RECOMMENDATION ENGINE</h3>
              <p>Instead of collaborative filtering or deep learning, this system uses a hybrid scoring framework across 5 interpretable signals:</p>
              <div className="h-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginTop:12 }}>
                {heuristics.map(h=>(
                  <div key={h.num} className="h-card">
                    <div className="h-num">{h.num}</div>
                    <div className="h-name">{h.name}</div>
                    <div className="h-type">{h.type}</div>
                    <div className="h-desc">{h.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CANDIDATE FUNNEL */}
            <div className="sc">
              <h3>CANDIDATE REDUCTION FUNNEL</h3>
              <div style={{ display:"flex", alignItems:"center", gap:12, flexWrap:"wrap", marginTop:8 }}>
                <div className="funnel">
                  <div className="fn">5,157</div>
                  <div className="fl">Initial Heuristic Pool</div>
                </div>
                <div style={{ color:"rgba(229,9,20,.6)", fontSize:"1.5rem" }}>→</div>
                <div className="funnel">
                  <div className="fn">≥70</div>
                  <div className="fl">Popularity Threshold</div>
                  <div className="fa">applied</div>
                </div>
                <div style={{ color:"rgba(229,9,20,.6)", fontSize:"1.5rem" }}>→</div>
                <div className="funnel" style={{ borderColor:"rgba(229,9,20,.6)" }}>
                  <div className="fn" style={{ fontSize:"2.5rem" }}>12</div>
                  <div className="fl">Final Curated Tracks</div>
                  <div className="fa">+ 2 anchor tracks retained</div>
                </div>
              </div>
            </div>

            {/* KEY FINDINGS */}
            <div className="sc">
              <h3>EXPLORATORY SIGNAL DISCOVERIES</h3>
              <ul>
                <li><strong>Popularity vs Playlist Appearances:</strong> Positive relationship with diminishing returns — exposure alone does not maximize popularity</li>
                <li><strong>Recency Bias:</strong> Post-2015 tracks dominate playlist ecosystems; platform growth strongly influences discovery trends</li>
                <li><strong>Tempo vs Danceability:</strong> Slight negative correlation (r ≈ -0.15); optimal groove cluster at 90–120 BPM — <em>Groove &gt; Speed</em></li>
                <li><strong>Structural Music Trends:</strong> Post-1970 steady increase in danceability; track durations tightly cluster at 2.5–4.5 minutes</li>
                <li><strong>Final playlist engineered for:</strong> Energy progression, emotional continuity, feature stability, genre cohesion, smooth transitions</li>
              </ul>
            </div>

          </div>

          {/* SIDEBAR */}
          <div>
            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>PROJECT DETAILS</div>
              {[["Language","R"],["Libraries","dplyr, tidyr, ggplot2"],["Data","jsonlite (JSON parsing)"],["Publish","Quarto + GitHub Pages"],["Tracks","50,684 unique"],["Status","Live Online"]].map(([k,v])=>(
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,.07)", fontSize:".82rem" }}>
                  <span style={{ color:M, textTransform:"uppercase", letterSpacing:".08em", fontSize:".72rem" }}>{k}</span>
                  <span style={{ color:"#ddd", fontWeight:600 }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28, marginBottom:16 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>WHAT THIS DEMONSTRATES</div>
              {["Scalable playlist modeling","Interpretable recommendation logic","Feature-based similarity scoring","Behavioral + content hybrid filtering","Data-to-product pipeline thinking","Large-scale semi-structured data processing"].map(s=>(
                <div key={s} style={{ fontSize:".8rem", color:M, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"flex-start", gap:8, lineHeight:1.5 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0, marginTop:5 }}/>{s}
                </div>
              ))}
            </div>

            <div style={{ background:S2, padding:28 }}>
              <div style={{ fontFamily:D, fontSize:"1.1rem", letterSpacing:".08em", color:"#fff", marginBottom:16 }}>SKILLS DEMONSTRATED</div>
              {["Large-Scale JSON Ingestion","Multi-Dataset Feature Joining","Heuristic Algorithm Design","Unsupervised Signal Discovery","ggplot2 Audio Visualization","Quarto Publishing Pipeline","GitHub Pages Deployment"].map(s=>(
                <div key={s} style={{ fontSize:".8rem", color:M, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0 }}/>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display:"flex", gap:16, marginTop:48, flexWrap:"wrap" }}>
          <a href="https://dhruvhw-10.github.io/STA9750-2025-SPRING/mp03.html" target="_blank" rel="noreferrer" className="br">🔗 Live Project</a>
          <a href="https://github.com/Dhruv10-hw/spotify-playlist-recommendation-engine" target="_blank" rel="noreferrer" className="bg">GitHub</a>
          <Link href="/" className="bg">← Back to Portfolio</Link>
        </div>
      </div>
    </main>
  );
}