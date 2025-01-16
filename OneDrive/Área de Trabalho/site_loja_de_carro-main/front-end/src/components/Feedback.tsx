import '../styles/Feedback.css'

export function Feedback() {
  const feedbacks = [
    {
      frase: "Excelente atendimento, recomendo para todos!",
      cidade: "Porto Alegre",
    },
    {
      frase: "Carros de qualidade e atendimento de primeira.",
      cidade: "Caxias do Sul",
    },
    {
      frase: "Fui atendido com muita atenção, recomendo!",
      cidade: "Santa Maria",
    },
    {
      frase: "Ótimos veículos e profissionais altamente capacitados.",
      cidade: "Pelotas",
    },
  ];

  return (
    <section className="feedback">
      <h1 className="feedback-title">Feedback</h1>
      <div className="feedback-cards">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <p className="feedback-text">{feedback.frase}</p>
            <p className="feedback-city">{feedback.cidade}</p>
          </div>
        ))}
      </div>

      <div className="bolinhas-controle">
        {feedbacks.map((_, index) => (
          <div key={index} className="bolinha"></div>
        ))}
      </div>
    </section>
    
  );
}

