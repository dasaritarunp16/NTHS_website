export default function Home() {
  const news = [
    { id: 1, date: "Aug 12, 2025", title: "Welcome Back!", text: "School year kickoff information and resources." },
    { id: 2, date: "Aug 10, 2025", title: "Parking Permits", text: "How to purchase and where to pick up." },
    { id: 3, date: "Aug 8, 2025",  title: "Club Applications", text: "Find your community—apply to join a club." },
  ];

  const events = [
    { id: 1, day: "20", month: "Aug", title: "Parent Night 6–8 PM" },
    { id: 2, day: "22", month: "Aug", title: "Varsity Football vs. Rivals" },
    { id: 3, day: "28", month: "Aug", title: "Club Fair (Commons)" },
  ];

  return (
    <>
      <section className="hero">
        <div className = "overlay">
          <h1
            className = "hero-title">NTHS
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Announcements & News</h2>
          <a className="btn" href="#">View all</a>
        </div>
        <div className="grid-3">
          {news.map(n => (
            <article key={n.id} className="card">
              <div className="eyebrow">{n.date}</div>
              <h3 style={{margin:'4px 0 8px', fontSize:'1rem'}}>{n.title}</h3>
              <p>{n.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <a className="btn" href="#">Calendar</a>
        </div>
        <ul className="event-list">
          {events.map(e => (
            <li key={e.id} className="event-item">
              <div className="event-date">
                <div className="event-day">{e.day}</div>
                <div className="event-month">{e.month}</div>
              </div>
              <div className="event-title">{e.title}</div>
              <a className="event-link" href="#">Details</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
