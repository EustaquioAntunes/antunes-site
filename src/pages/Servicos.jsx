export default function Servicos() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091012184-5c7b3962f3c9')",
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
          Serviços
        </h1>
      </section>

      {/* SERVIÇOS */}
      <section style={{ marginTop: "80px" }}>
        <h2>Soluções Especializadas</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "35px",
            marginTop: "40px"
          }}
        >
          <div className="card">
            <div className="icon">⚡</div>
            <h3>Projetos Elétricos</h3>
            <p>Diagramas, plantas, listas técnicas e documentação industrial completa.</p>
          </div>

          <div className="card">
            <div className="icon">🛠️</div>
            <h3>Instrumentação</h3>
            <p>Instalação, calibração, laudos e integração de instrumentos de processo.</p>
          </div>

          <div className="card">
            <div className="icon">🤖</div>
            <h3>Automação</h3>
            <p>Programação, CLPs, IHMs, redes industriais e otimização de processos.</p>
          </div>

          <div className="card">
            <div className="icon">📡</div>
            <h3>Comissionamento</h3>
            <p>Testes, ajustes, inspeções e operação assistida com rigor técnico.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
