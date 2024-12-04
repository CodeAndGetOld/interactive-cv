import React from 'react';
import { Code } from 'lucide-react';
import { ProjectCarousel } from './ProjectCarousel';
import { Experience } from './Experience';
import { motion } from 'framer-motion';

interface ServiceCard {
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    title: 'Web Development',
    description:
      'Creating modern and responsive websites using the latest technologies and best practices.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces with focus on user experience.',
  },
  {
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications using React Native.',
  },
];

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '15+', label: 'Tech Stack Mastered' },
  { value: '1', label: 'Startup Founded' },
];

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function MainContent() {
  return (
    <main className="space-y-8 md:space-y-12">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="relative rounded-2xl overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Mountains"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative bg-gradient-to-r from-card-dark/90 to-card-dark/70 p-4 md:p-12">
          <div className="w-full">
            <h1 className="text-xl md:text-4xl font-bold mb-4">
              Software Developer
              <br className="hidden md:block" /> with an Eye for Design
            </h1>
            <div className="flex items-start space-x-2 text-primary">
              <code className="text-[11px] leading-relaxed md:text-base">
                I'm a React.js front-end developer and co-founder of a software development company,
                where I blend the creativity of my graphic design roots with the power of code to
                craft engaging web platforms. I thrive on challenges that demand logical thinking
                and problem-solving—and the occasional dose of caffeine.
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                When I'm not debugging or brainstorming, I'm probably thinking about my next big
                project… or dogs. Definitely dogs.
              </code>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <ProjectCarousel />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Experience />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {stats.map((stat, index) => (
          <div key={index} className="card text-center p-4 md:p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</h3>
            <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="card p-4 md:p-6 h-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
