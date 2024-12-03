import React from 'react';
import { Code } from 'lucide-react';
import { ProjectCarousel } from './ProjectCarousel';
import { Experience } from './Experience';

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

export function MainContent() {
  return (
    <main className="p-8 space-y-12">
      <section className="relative h-[300px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card-dark/90 to-card-dark/70 flex items-center p-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Discover my Amazing
              <br />
              Art Space!
            </h1>
            <div className="flex items-center space-x-2 text-primary">
              {/* <Code className="w-5 h-5" /> */}
              <code>
                {/* <Code className="w-5 h-5" /> */}
                I’m a React.js front-end developer and co-founder of a software development company,
                where I blend the creativity of my graphic design roots with the power of code to
                craft engaging web platforms. I thrive on challenges that demand logical thinking
                and problem-solving—and the occasional dose of caffeine.
                <br />
                <br />
                When I’m not debugging or brainstorming, I’m probably thinking about my next big
                project… or dogs. Definitely dogs.
              </code>
            </div>
          </div>
        </div>
      </section>

      <ProjectCarousel />
      <Experience />

      <section className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8">My Services</h2>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <button className="text-primary hover:underline">ORDER NOW →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
