import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "Little Tigers",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "Little Tigers",
      });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "5561999999999"; // Replace with Master Riba's actual WhatsApp number
    const message = encodeURIComponent(
      "Olá Mestre Riba, gostaria de informações sobre as Classes de Taekwondo!"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comece sua jornada no Taekwondo hoje mesmo!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie uma Mensagem
              </h3>

              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Obrigado pela sua mensagem! Entraremos em contato em breve.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="interest"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Tenho Interesse Em
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="Little Tigers">
                        Little Tigers (4-7 anos)
                      </option>
                      <option value="Junior Program">
                        Programa Júnior (8-12 anos)
                      </option>
                      <option value="Teen Program">
                        Programa Teen (13-17 anos)
                      </option>
                      <option value="Adult Program">
                        Programa Adulto (18+)
                      </option>
                      <option value="Other">Outro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-red-700 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition duration-300"
                    >
                      Enviar Mensagem
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-500 transition duration-300"
                    >
                      Contato via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visite Nosso Dojang
              </h3>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Localização
                </h4>
                <p className="text-gray-700 mb-2">
                  QN 7D Conjunto 1 - Riacho Fundo II
                </p>
                <p className="text-gray-700 mb-2">Brasília - DF, 71880-010</p>

                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  Informações de Contato
                </h4>
                <p className="text-gray-700 mb-2">Mestre Riba</p>
                <p className="text-gray-700 mb-2">WhatsApp: (61) 99999-9999</p>
                <p className="text-gray-700 mb-2">
                  Email: mestre.riba@email.com
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  Horário de Funcionamento
                </h4>
                <p className="text-gray-700 mb-2">
                  Segunda a Sexta: 15:00 - 20:30
                </p>
                <p className="text-gray-700 mb-2">Sábado: 09:00 - 14:00</p>
                <p className="text-gray-700">Domingo: Fechado</p>
              </div>

              <div className="flex-grow rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8675869205407!2d-48.0566!3d-15.9012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzA0LjMiUyA0OMKwMDMnMjMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1647891234567!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
