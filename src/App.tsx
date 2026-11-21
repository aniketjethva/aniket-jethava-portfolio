import { useEffect, useState } from 'react';
import { profile, stats, technologies, experience, projects } from './data/portfolioData';

const sections = [
  ['home', 'Home'],
  ['about', 'About'],
  ['tech', 'Technologies'],
  ['exp', 'Experience'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
] as const;

const codeSample = `class ShippingRate extends AbstractCarrier
{
    public function collectRates(
        RateRequest $request
    ) {
        // custom shipping logic
        $zip = $request->getDestPostcode();
        $rate = $this->rateFactory->create();
        $rate->setPrice($this->calc($zip));
        return $result->append($rate);
    }

    // Authorize.Net gateway
    // cron: scheduled email templates
    // REST API: third-party integration
}`;

const phrases = [
  'Magento 2 modules & custom shipping',
  'REST APIs & payment integrations',
  'MERN stack web applications',
  'smooth, fast checkout experiences',
];

function Typewriter() {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0, j = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const w = phrases[i];
      j += del ? -1 : 1;
      setText(w.slice(0, j));
      let d = del ? 28 : 65;
      if (!del && j === w.length) { del = true; d = 1500; }
      else if (del && j === 0) { del = false; i = (i + 1) % phrases.length; d = 350; }
      t = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(t);
  }, []);
  return <p className="typed">I build <span>{text}</span><em /></p>;
}

export default function App() {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s));
    const rv = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 },
    );
    document.querySelectorAll('.rv').forEach((el) => rv.observe(el));
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      rv.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div id="bar" style={{ width: `${progress}%` }} />
      <header>
        <div className="wrap">
          <a className="logo" href="#home">{profile.name}</a>
          <nav>
            {sections.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="code" aria-hidden="true">{codeSample}</div>
          <div className="wrap">
            <h1>{profile.name}<i>.</i></h1>
            <p className="tag">
              {profile.tagline.map((t, i) => (
                <span key={t}>{i > 0 && <b>▪</b>}{t}{' '}</span>
              ))}
            </p>
            <Typewriter />
            <p className="quote">“{profile.quote}”</p>
            <div className="btns">
              <a className="btn p" href="#projects">View My Work →</a>
              <a className="btn" href="#contact">Contact Me</a>
              <a className="btn" href={profile.resume} download>Download Resume</a>
            </div>
            <div className="soc">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${profile.email}`}>✉ Email</a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>☎ Call</a>
            </div>
          </div>
        </section>

        <section className="s" id="about">
          <div className="wrap">
            <h2 className="rv">About</h2>
            <p className="lead">{profile.about}</p>
            <div className="stats">
              {stats.map((s) => (
                <div className="card rv" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="s" id="tech">
          <div className="wrap">
            <h2 className="rv">Technologies</h2>
            <div className="grid">
              {technologies.map((g) => (
                <div className="card rv" key={g.title}>
                  <h3>{g.title}</h3>
                  <div className="chips">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="s" id="exp">
          <div className="wrap">
            <h2 className="rv">Experience</h2>
            <div className="tl">
              {experience.map((j) => (
                <div className="job rv" key={j.title}>
                  <h3>{j.title}</h3>
                  <small>{j.period}</small>
                  <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="s" id="projects">
          <div className="wrap">
            <h2 className="rv">Projects</h2>
            <div className="grid">
              {projects.map((p) => {
                const body = (
                  <>
                    <h3>{p.name}</h3>
                    <p className="lead" style={{ margin: 0, fontSize: '.95rem' }}>{p.desc}</p>
                  </>
                );
                return p.url ? (
                  <a key={p.name} className="card rv" style={{ textDecoration: 'none', color: 'inherit' }} href={p.url} target="_blank" rel="noopener noreferrer">{body}</a>
                ) : (
                  <div key={p.name} className="card rv">{body}</div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="s" id="contact">
          <div className="wrap">
            <h2 className="rv">Contact</h2>
            <p className="lead">Have a project or an opportunity in mind? Let’s talk.</p>
            <div className="cta">
              <a className="btn p" href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>© 2026 {profile.name} · Ahmedabad, India</footer>
    </>
  );
}
