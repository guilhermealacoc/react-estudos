import { useState } from "react";
import axios from "axios";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
    };

    console.log("Payload do formulário:", payload);

    try {
      // Enviar dados para o endpoint
      const response = await axios.post(
        `http://localhost:8080/create/${nome}`,
        payload
      );

      console.log(response.data); // Lidar com a resposta do servidor, se necessário
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
