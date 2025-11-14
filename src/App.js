import React, { useState, useEffect } from "react";
import "./LandingStudent.css";

const Landing = () => {
  // Datos
  const profile = {
    nombre: "Johan Santana",
    edad: 22,
    github: "https://github.com/santcodex",
    github2: "https://github.com/bufferring",
    email: "johanrjosue@gmail.com",
    avatar: "/foto.jpg",
  };

  const habilidades = {
    lenguajes: [
      { name: "JavaScript", level: "Avanzado" },
      { name: "Python", level: "Avanzado" },
      { name: "Java", level: "Intermedio" },
      { name: "C++", level: "Intermedio" },
      { name: "SQL", level: "Intermedio" },
      { name: "HTML/CSS", level: "Avanzado" },
    ],
    idiomas: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Intermedio" },
    ],
  };

  // Estado para noticias
  const [showNews, setShowNews] = useState(false);
  const [articles, setArticles] = useState([]);

  // Cargar noticias al activar
  useEffect(() => {
    if (showNews) {
      const fetchNews = async () => {
        try {
          const res = await fetch(
            `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=5&apiKey=5cd6a2ccd7294d5fbe924e9ce00fa6ee`
          );
          const data = await res.json();
          setArticles(data.articles || []);
        } catch (error) {
          console.error("Error al cargar noticias:", error);
        }
      };
      fetchNews();
    }
  }, [showNews]);

  return (
    <div className="container">
      {/* Panel lateral con foto y contacto */}
      <aside className="card">
        <figure className="avatar">
          <img src={profile.avatar} alt={`${profile.nombre} foto`} />
        </figure>

        <div className="name" aria-label="Nombre">{profile.nombre}</div>
        <div className="meta">
          <div><strong>Edad:</strong> {profile.edad}</div>
        </div>

        <div className="contact-list" aria-label="Contacto">
          <div className="contact-item">
            <strong>GitHub personal</strong>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">perfil</a>
          </div>
          <div className="contact-item">
            <strong>GitHub (Buffer Ring)</strong>
            <a href={profile.github2} target="_blank" rel="noopener noreferrer">perfil</a>
          </div>
          <div className="contact-item">
            <strong>Email</strong>
            <span>{profile.email}</span>
          </div>
        </div>

        <div className="actions" style={{ marginTop: 18 }}>
          <button className="btn btn-secondary" onClick={() => setShowNews(!showNews)}>
            {showNews ? "Ocultar noticias" : "Ver noticias de tecnología"}
          </button>
          <a className="btn btn-primary" href={profile.github} target="_blank" rel="noopener noreferrer">Ver GitHub</a>
          <a className="btn btn-ghost" href={profile.github2} target="_blank" rel="noopener noreferrer">Ver GitHub (Buffer Ring)</a>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main">
        <header className="header">
          <div>
            <h1>{profile.nombre} — Estudiante de Ingeniería de Sistemas y CEO de Car Fix</h1>
            <p>Apasionado por el desarrollo de software, arquitectura de sistemas y soluciones escalables.</p>
          </div>
        </header>

        <section className="section" aria-labelledby="tech-title">
          <h3 id="tech-title">Lenguajes de programación y tecnologías</h3>
          <div className="tech-grid">
            {habilidades.lenguajes.map((t) => (
              <div className="tech" key={t.name}>
                <span>{t.name}</span>
                <span className="level">{t.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="lang-title">
          <h3 id="lang-title">Idiomas</h3>
          <div className="lang-list">
            {habilidades.idiomas.map((l) => (
              <span className="lang" key={l.name}>{l.name} — {l.level}</span>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="about-title">
          <h3 id="about-title">Sobre mí</h3>
          <p style={{ color: "#374151" }}>
            Soy estudiante de Ingeniería de Sistemas con interés en backend y APIs. He participado en proyectos como Car Fix y formo parte de la empresa de desarrollo de software Buffer Ring
          </p>
        </section>

        <section className="section" aria-labelledby="contact-title">
          <h3 id="contact-title">Contáctame</h3>
          <form className="contact-form" action="https://formsubmit.co/johanrjosue@gmail.com" method="POST" target="_blank">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portafolio" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="name" placeholder="Tu nombre" required className="contact-input" />
            <input type="email" name="email" placeholder="Tu correo" required className="contact-input" />
            <textarea name="message" rows="5" placeholder="Tu mensaje" required className="contact-textarea"></textarea>
            <button type="submit" className="btn btn-primary contact-btn">Enviar mensaje</button>
          </form>
        </section>

        {showNews && (
          <section className="section" aria-labelledby="news-title">
            <h3 id="news-title">Últimas noticias de tecnología</h3>
            <ul className="news-list">
              {articles.map((article, index) => (
                <li key={index} className="news-item">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <strong>{article.title}</strong>
                  </a>
                  <p>{article.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default Landing;



