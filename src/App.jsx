import { useEffect, useState } from "react";
import "./index.css";
import SchoolLogo from "../src/Assets/cu-logo.png";
import Portrait from "../src/Assets/portrait2.png";
import Photo1 from "../src/Assets/a.jpeg";
import Photo2 from "../src/Assets/b.jpeg";
import Photo3 from "../src/Assets/c.jpeg";
import Photo4 from "../src/Assets/d.jpeg";
import Photo5 from "../src/Assets/e.jpeg";

/* =====================================================
   EDIT YOUR DETAILS HERE
   ===================================================== */
const EVENT = {
  school: "Chrisland University, Abeokuta, Ogun State",
  schoolAddress: "Ajebo Road after FMC, Abeokuta, Ogun State.",
  schoolLine2: "Abeokuta, Ogun State",
  ceremony: "Convocation Ceremony",
  ceremonySub: "& Induction into the Nursing Profession",  // shown in italics
  firstName: "Ayomide",              // shown in gold script
  fullName: "Ayomide Precious Sobowale",        // shown in bold
  degree: "RN, RM, BNSC",
  venue: "Chrisland University Campus",
  address: " Ajebo Road after FMC, Abeokuta, Ogun State.",
  dateTop: "28th Oct.",
  dateBottom: "2026",
  timeTop: "10am",
  timeBottom: "[WAT]",
  startISO: "2026-10-28T10:00:00+01:00", // used by countdown and calendar
  durationHours: 3,
  badge: "8th",
  badgeText: "Convocation",
  portrait: Portrait,                        // e.g. "/me.jpg" (put the file in /public). Leave "" to use the illustration
  note: "Five years of lectures, sleepless nights, clinical postings, difficult exams, countless challenges, silent tears, prayers, and moments when giving up felt easier have finally led me to this beautiful day. What began as a dream has become a journey of resilience, growth, sacrifice, and grace. Through every long night, every demanding clinical experience, every examination, and every obstacle, I kept going—and today, I am proud to say I made it. This journey was never mine alone. Your love, prayers, encouragement, and unwavering support carried me through some of the hardest moments, and I would be truly honoured to have you beside me as I celebrate this milestone. Five years. One incredible journey. One dream fulfilled. A lifetime of purpose ahead. Come celebrate with me as I officially close this chapter and step into the beautiful calling of Nursing. 💜🩺🎓",
  mapQuery: "Chrisland University Abeokuta",
  rsvpWhatsApp: "2349131576638",                    // e.g. "2348012345678" (no + or spaces). Leave "" to hide the RSVP button
  footer: "Chrisland University, Ajebo Road after FMC, Abeokuta, Ogun State",
};

const SCHEDULE = [
  { title: "Arrival and seating", text: "8:30am. Guests are welcomed and shown to their seats.", bg: "#FFC9E3", icon: <><path d="M3 21h18M5 21V9l7-5 7 5v12M10 21v-6h4v6"/></> },
  { title: "Convocation ceremony", text: "10:00am. Degrees are conferred and the oath is taken.", bg: "#F2B544", icon: <><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.500V17c3 2 9 2 12 0v-5.500"/></> },
  { title: "Photos and reception", text: "1:00pm. Time to celebrate, eat together and take pictures.", bg: "#C9B6FF", icon: <><path d="M8 21h8M12 15v6M7 3h10v6a5 5 0 01-10 0zM7 5H4v2a3 3 0 003 3M17 5h3v2a3 3 0 01-3 3"/></> },
];

/* Add your photos to /public and set src, e.g. src: "/photos/1.jpg". Leave src "" to show the illustration. */
const GALLERY = [
  { caption: "Project Defense", src: Photo4, art: <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice"><rect width="400" height="320" fill="#7A3FD1"/><circle cx="200" cy="170" r="120" fill="#F2B544" opacity=".35"/><g fill="#1A0B2E"><path d="M90 90l40-14 40 14-40 14z"/><path d="M230 60l40-14 40 14-40 14z" transform="rotate(14 270 60)"/><path d="M150 40l40-14 40 14-40 14z" transform="rotate(-10 190 40)"/></g><g fill="#FF6B8B"><circle cx="70" cy="60" r="6"/><circle cx="340" cy="120" r="8"/></g><path d="M60 320c10-70 60-100 140-100s130 30 140 100z" fill="#1A0B2E"/><circle cx="200" cy="200" r="40" fill="#8D5A3B"/></svg> },
  { caption: "Choir", src: Photo2, art: <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice"><rect width="200" height="150" fill="#FFC9E3"/><path d="M30 150V70l70-40 70 40v80z" fill="#fff"/><path d="M80 150v-50a20 20 0 0140 0v50z" fill="#7A3FD1"/><circle cx="100" cy="60" r="10" fill="#F2B544"/></svg> },
  { caption: "With Simi", src: Photo1, art: <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice"><rect width="200" height="150" fill="#F2B544"/><g fill="#2B1247"><circle cx="60" cy="60" r="16"/><circle cx="100" cy="50" r="18"/><circle cx="145" cy="62" r="15"/><path d="M30 150c0-4₀ 14-6₀ 3₀-6₀s3₀ 2₀ 3₀ 6₀zM76 15₀c₀-4₆ ₁₂-7₀ ₂₄-7₀s₂₆ ₂₄ ₂₆ 7₀zM₁₂₀ 15₀c₀-4₀ ₁₂-5₈ ₂₆-5₈s₂₆ ₁₈ ₂₆ 5₈z"/></g></svg> },
  { caption: "The Trios", src: Photo3, art: <svg viewBox="0 0 2００ １５０" preserveAspectRatio="xMidYMid slice"><rect width="４００" height="100" fill="#１７Ｂ３Ａ３"/><rect x="１１０" y="３４" width="１８０" height="８２" rx="８" fill="#fff"/><path d="Ｍ１３０ ６２h１４０M１３０ ８０h１１０" stroke="#２Ｂ１２４７" strokeWidth="６" strokeLinecap="round"/><circle cx="２７０" cy="１０４" r="１６" fill="#Ｆ２Ｂ５４４"/></svg> },
];

/* ===================================================== */

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
);

const pad = (n) => String(n).padStart(2, "0");
const gcal = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

function useCountdown(iso) {
  const target = new Date(iso).getTime();
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()));
  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);
  const s = Math.floor(left / 1000);
  return {
    d: Math.floor(s / 86400),
    h: pad(Math.floor((s % 86400) / 3600)),
    m: pad(Math.floor((s % 3600) / 60)),
    s: pad(s % 60),
  };
}

export default function App() {
  const t = useCountdown(EVENT.startISO);
  const start = new Date(EVENT.startISO);
  const end = new Date(start.getTime() + EVENT.durationHours * 3600 * 1000);

  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(EVENT.ceremony + " - " + EVENT.school)}` +
    `&dates=${gcal(start)}/${gcal(end)}` +
    `&location=${encodeURIComponent(EVENT.venue + ", " + EVENT.address)}`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT.mapQuery)}`;

  const shareText = `You are invited to my ${EVENT.ceremony} at ${EVENT.school}, ${EVENT.dateTop} ${EVENT.dateBottom}, ${EVENT.timeTop} ${EVENT.timeBottom}. ${window.location.href}`;
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const rsvpUrl = EVENT.rsvpWhatsApp
    ? `https://wa.me/${EVENT.rsvpWhatsApp}?text=${encodeURIComponent("Hello " + EVENT.firstName + ", I will be attending your " + EVENT.ceremony + ".")}`
    : "";

  return (
    <>
      <svg className="hex" aria-hidden="true"><defs><pattern id="hx" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(1.6)"><path d="M28 0l28 16v32L28 64 0 48V16zM0 97V65l28-17M56 97V65L28 48" fill="none" style={{ stroke: "var(--hex)" }} strokeWidth="2"/></pattern></defs><rect width="100%" height="100%" fill="url(#hx)"/></svg>
      <main>
        <div className="stage">
          <div className="panel">
            <div className="school">
              <img src={SchoolLogo} alt={EVENT.school} />
              {/* <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 2l18 6v14c0 12-8 21-18 24C14 43 6 34 6 22V8z" fill="#2B1247"/><path d="M24 13l-12 5 12 5 12-5z" fill="#F2B544"/><path d="M17 22v6c4 3 10 3 14 0v-6" fill="none" stroke="#fff" strokeWidth="2"/></svg> */}
              <span>{EVENT.school}</span>
            </div>
            <p className="lead">You are cordially invited to my Induction into the Nursing Profession &</p>
            {/* <p className="sub">{EVENT.ceremonySub}</p> */}
            <h1>{EVENT.ceremony.toUpperCase()}</h1>
            <div className="bar" />
            <div className="name">
              <span className="script">{EVENT.firstName}</span>
              <b>{EVENT.fullName}</b>
              <span>{EVENT.degree}</span>
            </div>

            <div className="pill">
              <div className="pl">
                <svg viewBox="0 0 24 24"><path d="M12 22s7-6.200 7-12a7 7 0 10-14 0c0 5.800 7 12 7 12z"/><circle cx="12" cy="10" r="2.500"/></svg>
                <span>{EVENT.venue}<small>{EVENT.address}</small></span>
              </div>
              <i />
              <div><span>{EVENT.dateTop}<small>{EVENT.dateBottom}</small></span></div>
              <i />
              <div><span>{EVENT.timeTop}<small>{EVENT.timeBottom}</small></span></div>
            </div>
          </div>

          <div className="figure">
            <div className="tag"><span><b>{EVENT.badge}</b>{EVENT.badgeText}</span></div>
            {EVENT.portrait ? <img src={EVENT.portrait} alt={EVENT.fullName} /> : (
              <svg className="float" viewBox="0 0 420 520" role="img" aria-label="Illustration of a graduate in a gown and cap holding a certificate">
<circle cx="215" cy="270" r="190" fill="#F2B544" opacity=".3"/>
<path d="M70 520C80 390 140 336 215 336s135 54 145 184z" fill="#1A0B2E"/>
<path d="M186 340l-26 180h42l16-172z" fill="#F2B544"/><path d="M244 340l26 180h-42l-16-172z" fill="#F2B544"/>
<path d="M178 400l-10 120h20l10-118zM252 400l10 120h-20l-10-118z" fill="#7A3FD1"/>
<path d="M195 336l20 40 20-40z" fill="#fff"/>
<rect x="203" y="300" width="24" height="42" rx="8" fill="#8D5A3B"/>
<ellipse cx="164" cy="252" rx="8" ry="13" fill="#7A4A2E"/><ellipse cx="266" cy="252" rx="8" ry="13" fill="#7A4A2E"/>
<ellipse cx="215" cy="250" rx="52" ry="60" fill="#8D5A3B"/>
<path d="M170 222c4-26 24-36 45-36s41 10 45 36c-10-12-26-18-45-18s-35 6-45 18z" fill="#1A0B2E"/>
<path d="M168 190v30q47 22 94 0v-30z" fill="#2B1247"/>
<path d="M112 188l103-38 103 38-103 36z" fill="#1A0B2E"/>
<path d="M215 188l92 4v48" stroke="#F2B544" strokeWidth="4" fill="none" strokeLinecap="round"/><circle cx="307" cy="246" r="8" fill="#F2B544"/><path d="M307 250v16" stroke="#F2B544" strokeWidth="4" strokeLinecap="round"/>
<circle cx="196" cy="258" r="4" fill="#1A0B2E"/><circle cx="234" cy="258" r="4" fill="#1A0B2E"/>
<path d="M198 278q17 14 34 0" stroke="#1A0B2E" strokeWidth="4" fill="none" strokeLinecap="round"/>
<g transform="rotate(-16 300 440)"><rect x="236" y="426" width="140" height="30" rx="15" fill="#fff"/><rect x="292" y="426" width="14" height="30" fill="#FF6B8B"/></g>
<circle cx="250" cy="452" r="16" fill="#8D5A3B"/><circle cx="348" cy="418" r="16" fill="#8D5A3B"/>
<g fill="#F2B544"><path d="M60 120l6 14 14 6-14 6-6 14-6-14-14-6 14-6z"/><path d="M350 110l5 11 11 5-11 5-5 11-5-11-11-5 11-5z"/></g>
<circle cx="86" cy="330" r="8" fill="#FF6B8B"/><circle cx="366" cy="330" r="6" fill="#7A3FD1"/><circle cx="110" cy="76" r="5" fill="#fff"/>
</svg>
            )}
          </div>
        </div>

        <section id="countdown">
          <h2>The big day is coming</h2>
          <div className="count" role="timer" aria-live="off">
            <div><b>{t.d}</b><span>Days</span></div>
            <div><b>{t.h}</b><span>Hours</span></div>
            <div><b>{t.m}</b><span>Minutes</span></div>
            <div><b>{t.s}</b><span>Seconds</span></div>
          </div>
        </section>

        <section>
          <h2>How the day will go</h2>
          <div className="day">
            {SCHEDULE.map((s) => (
              <div className="step" key={s.title}>
                <i style={{ background: s.bg }}><Icon>{s.icon}</Icon></i>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>A note from me</h2>
          <p className="note">{EVENT.note}</p>
        </section>

        <section>
          <h2>Moments to remember</h2>
          <div className="gal">
            {GALLERY.map((g) => (
              <figure key={g.caption}>
                {g.src ? <img src={g.src} alt={g.caption} /> : g.art}
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section>
          <h2>Will you join me?</h2>
          <div className="cta">
            {rsvpUrl && <a className="btn g" href={rsvpUrl} target="_blank" rel="noopener noreferrer">RSVP on WhatsApp</a>}
            <a className={rsvpUrl ? "btn" : "btn g"} href={calendarUrl} target="_blank" rel="noopener noreferrer">Add to calendar</a>
            <a className="btn" href={mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            <a className="btn o" href={shareUrl} target="_blank" rel="noopener noreferrer">Share on WhatsApp</a>
          </div>
        </section>

        <footer>{EVENT.footer}</footer>
      </main>
    </>
  );
}
