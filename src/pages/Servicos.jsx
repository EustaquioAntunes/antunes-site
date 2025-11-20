export default function Servicos() {
  return (
    <div>

      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Nossos Serviços</h1>
      <p style={{ fontSize: "20px", opacity: 0.85, marginBottom: "40px" }}>
        Soluções completas em automação industrial, com foco em engenharia, segurança
        e desempenho operacional.
      </p>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>

        <div className="card">
          <h2>Projetos Elétricos</h2>
          <p>Elaboração de diagramas, plantas, listas técnicas e documentação detalhada.</p>
        </div>

        <div className="card">
          <h2>Instrumentação Industrial</h2>
          <p>Especificação, instalação e calibração de instrumentos industriais.</p>
        </div>

        <div className="card">
          <h2>Automação & CLPs</h2>
          <p>Integração de sistemas, programação, otimização e testes de controle.</p>
        </div>

        <div className="card">
          <h2>Comissionamento</h2>
          <p>Testes, conferências, ajustes e colocação em operação com excelência.</p>
        </div>

        <div className="card">
          <h2>Supervisão de Montagem</h2>
          <p>Inspeção completa de montagem elétrica e de instrumentação.</p>
        </div>

        <div className="card">
          <h2>Consultoria Técnica</h2>
          <p>Suporte especializado para análise e melhoria de processos industriais.</p>
        </div>

      </section>

    </div>
  );
}
