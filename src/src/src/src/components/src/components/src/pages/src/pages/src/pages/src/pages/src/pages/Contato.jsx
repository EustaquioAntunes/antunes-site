export default function Contato() {
  return (
    <div>
      <h1>Contato</h1>

      <p>
        <strong>Eng. Responsável:</strong> Eustaquio Antunes Ferreira<br />
        <strong>Empresa:</strong> Antunes Automação de Sistemas Industriais Ltda<br />
        <strong>Endereço:</strong> Rua Ônix 30, Lagoa Mansões – Lagoa Santa, MG<br />
        <strong>CEP:</strong> 33236-752<br />
        <strong>Telefone:</strong> (31) 9 8260-7665<br />
        <strong>E-mail:</strong>{" "}
        <a href="mailto:eustaquioasi@gmail.com">eustaquioasi@gmail.com</a>
      </p>

      <h2>Envie uma mensagem</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Mensagem enviada! (simulação)");
        }}
      >
        <input type="text" placeholder="Nome" required />
        <br /><br />

        <input type="email" placeholder="E-mail" required />
        <br /><br />

        <textarea placeholder="Mensagem" rows="5" required></textarea>
        <br /><br />

        <button>Enviar</button>
      </form>
    </div>
  );
}
