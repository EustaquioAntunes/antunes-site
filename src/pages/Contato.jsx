export default function Contato() {
  return (
    <div>

      <h1 style={{ fontSize: "48px", marginBottom: "30px" }}>Contato</h1>

      <p style={{ fontSize: "20px", opacity: 0.85, marginBottom: "40px" }}>
        Entre em contato para solicitar orçamentos, consultoria ou informações técnicas.
        Será um prazer atender você.
      </p>

      <div className="card" style={{ padding: "30px" }}>
        <h2>Informações de Contato</h2>

        <ul style={{ fontSize: "20px", lineHeight: 1.8, opacity: 0.85 }}>
          <li><strong>Telefone:</strong> (31) 98888-8888</li>
          <li><strong>E-mail:</strong> contato@antunesautomacao.com.br</li>
          <li><strong>Localização:</strong> Belo Horizonte - MG</li>
        </ul>
      </div>

      <section style={{ marginTop: "60px", padding: "50px", background: "#f5f5f5", borderRadius: "16px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Precisa de suporte técnico?</h2>
        <p style={{ fontSize: "20px", opacity: 0.85, marginBottom: "20px" }}>
          Envie uma mensagem e retornaremos rapidamente.
        </p>
        <a
          href="mailto:contato@antunesautomacao.com.br"
          style={{
            padding: "18px 40px",
            background: "#111",
            color: "white",
            borderRadius: "50px",
            fontSize: "22px",
            textDecoration: "none"
          }}
        >
          Enviar e-mail
        </a>
      </section>

    </div>
  );
}
