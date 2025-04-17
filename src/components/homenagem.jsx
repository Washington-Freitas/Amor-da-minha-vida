import React from 'react';
import './homenagem.css';

const frases = [
  "Te amo mais a cada dia ❤️",
  "Com você, tudo faz sentido 🌹",
  "Você é o meu lugar favorito no mundo 🌍",
];

const legendas = [
  "Nosso primeiro sorriso juntos 😄",
  "Momentos que não esquecerei 💖",
  "Você, minha melhor escolha ✨",
  "O amor mora nesse olhar 👀",
  "Dias incríveis ao seu lado ☀️",
  "Meu porto seguro 🫶",
  "Cada dia mais apaixonado 😍",
  "Meu presente da vida 🎁",
  "Inesquecível, como você 💫",
  "Nossos passos lado a lado 👣",
  "Te amo mais a cada dia ❤️"
];

const fotos = [
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
  '/6.jpeg',
  '/7.jpeg',
  '/8.jpeg',
  '/9.jpeg',
  '/10.jpeg',
  '/11.jpeg',
];

function Homenagem() {
  return (
    <div className="homenagem-container">

      <div className="card">

      <div className="coracoes-flutuantes">
  {[...Array(20)].map((_, i) => (
    <span
      key={i}
      className="coracao"
      style={{
        left: `${Math.random() * 100}%`,
        fontSize: `${20 + Math.random() * 20}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      }}
    >
      ❤️
    </span>
  ))}
</div>


        <h1 className="titulo">Minha Homenagem pra Você 💕</h1>

        <div className="frases">
          {frases.map((frase, index) => (
            <p
              key={index}
              className="frase fade-in"
              style={{ animationDelay: `${index * 0.8}s` }}
            >
              {frase}
            </p>
          ))}
        </div>

        <div className="galeria">
        {fotos.map((foto, index) => (
        <div key={index} className="moldura animated" style={{ animationDelay: `${index * 0.2}s` }}>
        <img
        src={foto}
        alt={`Foto ${index + 1}`}
        className="foto"
        />
        <p className="legenda">{legendas[index]}</p>
    </div>
  ))}
</div>



        <div className="qr-code">
          <p>Escaneie o QR Code com amor 💖</p>
          <img src="/qr/qr-code.png" alt="QR Code" className="qr-img" />
        </div>
        <div className="player-container">
        <audio controls autoPlay loop>
        <source src="/msc.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio :(
        </audio>
</div>

      </div>
    </div>
  );
}

export default Homenagem;
