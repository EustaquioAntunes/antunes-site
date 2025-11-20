export default function Historia() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "40px"
        }}
      >
        <h1 style={{ fontSize: "60px", textShadow: "0 4px 18px rgba(0,0,0,0.4)" }}>
          Nossa História
        </h1>
      </section>

      {/* SOBRE */}
      <section style={{ marginTop: "80px" }}>
        <h2>Uma Trajetória de Excelência</h2>
        <p style={{ fontSize: "20px", opacity: 0.85, marginTop: "20px" }}>
          Fundada há mais de duas décadas, a Antunes Automação construiu uma trajetória sólida
          no setor industrial, marcada por inovação, precisão técnica e compromisso com resultados.
        </p>
      </section>

      {/* TIMELINE */}
      <section style={{ marginTop: "80px" }}>
        <h2>Linha do Tempo</h2>

        <div style={{ marginTop: "40px", lineHeight: "1.8", fontSize: "20px", opacity: 0.85 }}>
          <p>📌 <strong>2000</strong> — Início das atividades com foco em projetos elétricos industriais.</p>
          <p>📌 <strong>2005</strong> — Expansão para instrumentação e automação.</p>
          <p>📌 <strong>2012</strong> — Participação em grandes projetos de mineração e siderurgia.</p>
          <p>📌 <strong>2020</strong> — Modernização e padronização de operações avançadas.</p>
          <p>📌 <strong>Hoje</strong> — Referência nacional em engenharia industrial.</p>
        </div>
      </section>

    </div>
  );
}
