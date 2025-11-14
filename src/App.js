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

  // Estado para videos de YouTube
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchYoutubePlaylist = async () => {
      const playlistId = "TU_PLAYLIST_ID"; // Reemplaza con tu ID de playlist
      const apiKey = "TU_API_KEY"; // Reemplaza con tu clave de API

      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${playlistId}&key=${apiKey}`
        );
        const data = await res.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error al cargar videos de YouTube:", error);
      }
    };

    fetchYoutubePlaylist();
  }, []);

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

        <section className="section" aria-labelledby="youtube-title">
          <h3 id="youtube-title">🎵 Mis canciones favoritas en YouTube</h3>
          <ul className="youtube-list">
            {videos.map((video, index) => (
              <li key={index} className="youtube-item">
                <a
                  href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    width="100%"
                    style={{ borderRadius: "8px" }}
                  />
                  <p style={{ marginTop: "8px", fontWeight: "600" }}>
                    {video.snippet.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Landing;





