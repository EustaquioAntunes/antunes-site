export default function Inicio() {
  return (
    <div>

      {/* HERO SECTION */}
      <section style={{ padding: "100px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: "62px", fontWeight: "700", marginBottom: "20px" }}>
          Excelência em Automação Industrial
        </h1>
        <p style={{ fontSize: "22px", maxWidth: "800px", margin: "0 auto", opacity: 0.8 }}>
          Projetos, comissionamento e soluções de engenharia que impulsionam a eficiência
          e segurança operacional de indústrias em todo o Brasil.
        </p>
      </section>

      {/* SOBRE */}
      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>Sobre a Empresa</h2>
        <p style={{ fontSize: "20px", opacity: 0.85 }}>
          Com mais de duas décadas de experiência, atuamos no desenvolvimento e execução
          de projetos elétricos, instrumentação e automação industrial. Nossa missão é
          entregar modernização, confiança e desempenho técnico em cada operação.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>Soluções e Serviços</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
          <div className="card">
            <h3>Projetos Elétricos</h3>
            <p>Desenvolvimento completo de diagramas, plantas e documentação técnica.</p>
          </div>

          <div className="card">
            <h3>Automação Industrial</h3>
            <p>Integração de sistemas, CLPs, IHMs e otimização de processos industriais.</p>
          </div>

          <div className="card">
            <h3>Comissionamento</h3>
            <p>Testes, validação, ajustes e operação assistida de sistemas.</p>
          </div>

          <div className="card">
            <h3>Supervisão de Montagem</h3>
            <p>Acompanhamento técnico completo garantindo montagem precisa e segura.</p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>Nossos Diferenciais</h2>

        <ul style={{ fontSize: "20px", opacity: 0.85, lineHeight: "1.8" }}>
          <li>✔ 20+ anos de experiência na área industrial</li>
          <li>✔ Alta precisão técnica em cada projeto</li>
          <li>✔ Padrões rigorosos de segurança e qualidade</li>
          <li>✔ Suporte contínuo e acompanhamento especializado</li>
          <li>✔ Engenharia focada em eficiência operacional</li>
        </ul>
      </section>

      {/* CLIENTES */}
      <section style={{ marginTop: "80px" }}>
        <h2 style={{
