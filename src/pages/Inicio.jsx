export default function Inicio() {
  return (
    <div>

      {/* HERO COM IMAGEM E PARALLAX */}
      <section className="hero">
        <div>
          <h1>Automação Industrial Premium</h1>
          <p>
            Engenharia moderna com foco em eficiência, segurança e alta performance para indústrias.
          </p>
        </div>
      </section>

      {/* SERVIÇOS COM ICONES */}
      <section style={{ marginTop: "100px" }}>
        <h2>Nossas Soluções</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "35px",
          marginTop: "40px"
        }}>

          <div className="card">
            <div className="icon">⚡</div>
            <h3>Projetos Elétricos</h3>
            <p>Documentação completa, diagramas, listas técnicas e plantas industriais.</p>
          </div>

          <div className="card">
            <div className="icon">🛠️</div>
            <h3>Instrumentação</h3>
            <p>Instalação, calibração e integração de instrumentos de processo.</p>
          </div>

          <div className="card">
            <div className="icon">🤖</div>
            <h3>Automação & CLP</h3>
            <p>Programação, lógica, IHMs, otimização e integração industrial.</p>
          </div>

          <div className="card">
            <div className="icon">📡</div>
            <h3>Comissionamento</h3>
            <p>Testes, ajustes, operação assistida e validação completa.</p>
          </div>
        </div>
      </section>

      {/* SECAO DIFERENCIAL */}
      <section style={{ marginTop: "100px" }}>
        <h2>Diferenciais Antunes</h2>

        <ul style={{ marginTop: "25px", fontSize: "20px", lineHeight: "1.8", opacity: 0.85 }}>
          <li>✔ Expertise de mais de 20 anos</li>
          <li>✔ Engenharia baseada em normas e segurança</li>
          <li>✔ Alta precisão técnica</li>
          <li>✔ Soluções personalizadas</li>
        </ul>
      </section>

    </div>
  );
}
