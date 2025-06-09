import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              Master Kim's <span className="text-red-500">Taekwondo</span>
            </h3>
            <p className="max-w-xs text-gray-400 mb-4">
              Empowering lives through the ancient art of Taekwondo since 2003.
              Building stronger bodies and minds for a better future.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "Início",
                  "Classes",
                  "Sobre",
                  "Schedule",
                  "Gallery",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                {[
                  "Little Tigers",
                  "Junior Program",
                  "Teen Program",
                  "Adult Program",
                  "Private Lessons",
                ].map((program) => (
                  <li key={program}>
                    <a
                      href="#classes"
                      className="text-gray-400 hover:text-white transition duration-200"
                    >
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                <p className="mb-2">123 Martial Arts Way</p>
                <p className="mb-2">Atlanta, GA 30303</p>
                <p className="mb-2">Phone: (555) 123-4567</p>
                <p>Email: info@masterkim.com</p>
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Mestre Riba Taekwondo Academia. Todos os
            direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            {/* <ul className="flex space-x-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-200">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Termos de Serviços</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
