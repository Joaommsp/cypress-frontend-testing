import { useState } from "react";
import "./App.css";

function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mostrarSucesso, setMostrarSucesso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarSucesso(true);
    setNome("");
    setEmail("");
    setMensagem("");

    setTimeout(() => {
      setMostrarSucesso(false);
    }, 3000);
  };

  return (
    <>
      <div className="formulario-container">
        <h2 className="formulario-titulo">Entre em Contato</h2>

        <form onSubmit={handleSubmit} className="">
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              id="nome"
              type="text"
              name="nome"
              data-cy="nome"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              data-cy="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              data-cy="mensagem"
              placeholder="Sua mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" data-cy="btn-enviar">
            Enviar Mensagem
          </button>
        </form>

        {mostrarSucesso && (
          <div className="mensagem-sucesso">
            Formulário enviado com sucesso!
          </div>
        )}
      </div>
    </>
  );
}

export default App;
