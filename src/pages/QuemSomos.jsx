export default function QuemSomos() {
  return (
    <div>

      <section style={{ marginTop: "60px" }}>
        <h1 data-aos="fade-up">Quem Somos</h1>

        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            marginTop: "40px",
            flexWrap: "wrap"
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
            alt="Eng. Antunes"
            style={{
              width: "380px",
              height: "380px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
            data-aos="zoom-in"
          />

          <p style={{ fontSize: "20px", maxWidth: "600px" }} data-aos="fade-up">
            A Antunes Automação é liderada por profissionais com mais de 20 anos de
            experiência em engenharia industrial. Atendemos projetos de automação,
            instrumentação, comissionamento e supervisão técnica em indústrias de grande porte.
          </p>
        </div>

      </section>

    </div>
  );
}
