import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="Início"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1579331844418-fcd67e29b3d6?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Descubra a Arte do <span className="text-red-500">Taekwondo</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Disciplina, Respeito e Excelência. Junte-se à Academia do Mestre Riba
          hoje.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
          >
            Aula Experimental Grátis
          </a>
          <a
            href="#classes"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Explorar Classes
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#classes" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
