import React from 'react';
import { Shield, Heart, Brain, Trophy, Users, Target } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="text-red-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits: BenefitProps[] = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Self-Defense",
      description: "Learn practical and effective techniques to protect yourself and gain confidence in any situation."
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Physical Fitness",
      description: "Improve strength, flexibility, cardio endurance, and overall health through dynamic training."
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Mental Discipline",
      description: "Develop focus, self-control, and mental resilience that translates to success in all areas of life."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Community",
      description: "Join a supportive community that encourages personal growth and lifelong friendships."
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Goal Setting",
      description: "Progress through the belt system with clear goals and achievements that build self-confidence."
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Competition",
      description: "Test your skills in a variety of competitive formats from forms to sparring at local and national levels."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefícios do Taekwondo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como o treinamento de Taekwondo pode transformar sua vida fisicamente, mentalmente e socialmente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;