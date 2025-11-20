export default function Contato() {
  return (
    <div>

      {/* HERO */}
      <section
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092334670-bf4b9af724ce')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "60px", textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
          Contato
        </h1>
      </section>

      {/* BLOCO DE CONTATO */}
      <section style={{ marginTop: "80px" }}>
        <h2>Fale Conosco</h2>

        <div className="card" style={{ marginTop: "20px", padding: "35px" }}>
          <ul style={{ fontSize: "20px", lineHeight: 1.8, opacity: 0.85 }}>
            <li><strong>Telefone:</strong> (31) 98888-8888</li>
            <li><strong>E-mail:</strong> contato@antunesautomacao.com.br</li>
            <li><strong>Localização:</strong> Belo Horizonte — MG</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          marginTop: "80px",
          padding: "70px",
          background: "#f5f5f5",
          borderRadius: "16px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Precisa de suporte técnico?
        </h2>
        <p style={{ fontSize: "20px", opacity: 0.85, marginBottom: "30px" }}>
          Envie uma mensagem, teremos prazer em ajudar.
        </p>

        <a
          href="mailto:contato@antunesautomacao.com.br"
          style={{
            display: "inline-block",
            padding: "18px 45px",
            borderRadius: "45px",
            background: "#111",
            color: "#fff",
            fontSize: "22px",
            textDecoration: "none",
            transition: "0.3s"
          }}
        >
          Enviar E-mail
        </a>
      </section>

    </div>
  );
}
