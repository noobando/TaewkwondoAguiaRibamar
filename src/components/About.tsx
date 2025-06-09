import React from "react";

const Sobre: React.FC = () => {
  const achievements = [
    "Faixa Preta 5º Dan em Taekwondo",
    "Mais de 20 anos de experiência em ensino",
    "Ex-Técnico da Seleção Regional",
    "Medalista em Campeonatos Nacionais",
    "Instrutor Master Certificado",
  ];

  return (
    <section id="Sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/7045391/pexels-photo-7045391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mestre Riba ensinando"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre o Mestre Riba
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Com mais de duas décadas de experiência em Taekwondo, Mestre Riba
              dedicou sua vida ao domínio e ensino desta arte marcial coreana.
              Sua jornada começou aos 7 anos e o levou através de competições
              internacionais, treinamento avançado e anos de ensino para alunos
              de todas as idades.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A filosofia de ensino do Mestre Riba concentra-se no
              desenvolvimento não apenas das habilidades físicas, mas também da
              disciplina mental, confiança e respeito. Ele acredita que o
              Taekwondo é um caminho para o crescimento pessoal que se estende
              muito além do dojang (sala de treinamento).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Conquistas & Credenciais
            </h3>
            <ul className="space-y-2 mb-8">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>

            <blockquote className="italic border-l-4 border-red-600 pl-4 py-2 text-gray-600">
              "Minha missão é ajudar cada aluno a descobrir seu potencial
              através dos princípios e da prática do Taekwondo, criando corpos e
              mentes mais fortes para um futuro melhor."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
