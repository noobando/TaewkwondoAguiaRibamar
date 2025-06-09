import React from "react";

interface ClassProps {
  title: string;
  description: string;
  image: string;
  suitable: string;
}

const ClassCard: React.FC<ClassProps> = ({
  title,
  description,
  image,
  suitable,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-red-600 font-medium mb-4">
          Suitable for: {suitable}
        </p>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a
          href="#contact"
          className="text-red-700 font-medium hover:text-red-500 transition duration-300"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
};

const Classes: React.FC = () => {
  const classData: ClassProps[] = [
    {
      title: "Little Tigers",
      description:
        "An exciting program designed specifically for children aged 4-7. Focuses on developing basic motor skills, discipline, and confidence through fun activities.",
      image:
        "https://images.pexels.com/photos/8612284/pexels-photo-8612284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      suitable: "Ages 4-7",
    },
    {
      title: "Junior Program",
      description:
        "Perfect for children 8-12 years old. Develops strong foundations in Taekwondo techniques while teaching respect, focus, and self-discipline.",
      image:
        "https://images.pexels.com/photos/7045671/pexels-photo-7045671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      suitable: "Ages 8-12",
    },
    {
      title: "Teen Program",
      description:
        "Designed for teenagers to develop advanced techniques, physical fitness, mental resilience, and leadership skills in a supportive environment.",
      image:
        "https://images.pexels.com/photos/6253298/pexels-photo-6253298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      suitable: "Ages 13-17",
    },
    {
      title: "Adult Program",
      description:
        "Comprehensive training for adults of all fitness levels. Focus on self-defense, physical conditioning, stress reduction, and personal achievement.",
      image:
        "https://images.pexels.com/photos/7045623/pexels-photo-7045623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      suitable: "Ages 18+",
    },
  ];

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Classes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra o programa de Taekwondo perfeito para sua idade e nível de
            habilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classData.map((classItem, index) => (
            <ClassCard key={index} {...classItem} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#schedule"
            className="px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
          >
            View Class Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;
