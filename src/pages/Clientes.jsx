export default function Clientes() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558325735-43e4b4c2ea4a')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "60px", textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
          Clientes
        </h1>
      </section>

      {/* SETORES */}
      <section style={{ marginTop: "80px" }}>
        <h2>Setores Atendidos</h2>

        <ul style={{ fontSize: "20px", lineHeight: "1.8", marginTop: "25px", opacity: 0.85 }}>
          <li>✔ Mineração</li>
          <li>✔ Siderurgia</li>
          <li>✔ Energia</li>
          <li>✔ Construção industrial</li>
          <li>✔ Indústrias de processo</li>
        </ul>
      </section>

      {/* CLIENTES LIST */}
      <section style={{ marginTop: "80px" }}>
        <h2>Empresas Atendidas</h2>
        <p style={{ marginTop: "20px", fontSize: "20px", opacity: 0.85 }}>
          Atuação em projetos para grandes companhias nacionais e internacionais.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "25px",
            marginTop: "40px"
          }}
        >
          <div className="card">🏭 Vale</div>
          <div className="card">🏭 Gerdau</div>
          <div className="card">🏭 Anglo American</div>
          <div className="card">🏭 Usiminas</div>
          <div className="card">🏭 ArcelorMittal</div>
          <div className="card">🏭 CSN</div>
        </div>
      </section>

    </div>
  );
}
