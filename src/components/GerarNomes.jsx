import { useState } from "react";

export default function GeradorDeNomes() {
  const [nome, setNome] = useState("Clique em Gerar");

  const nomes = ["Leandro", "Paulo", "Miguel", "Gui", "Gabriel"];
  const adjetivos = [
    "Doido da Cabeça",
    "Esquecido",
    "Maluco",
    "Dorminhoco",
    "Festeiro",
  ];

  const gerarNome = () => {
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)]; // nome aleatório do array
    const adjAleatorio = adjetivos[Math.floor(Math.random() * adjetivos.length)]; // adjetivo aleatório do array
    setNome(`${nomeAleatorio} ${adjAleatorio}`);
  };

  return (
    <div>
      <h3>Gerador de Nomes</h3>
      <p>{nome}</p>
      <button onClick={gerarNome}>Gerar</button>
    </div>
  );
}
