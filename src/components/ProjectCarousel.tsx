import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import startUpRoImage from '../assets/StartUpRo.png';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

interface MobilePreviewProps {
  url: string;
  onClose: () => void;
}

const MobilePreview = ({ url, onClose }: MobilePreviewProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative">
        {/* iPhone frame */}
        <div className="relative w-[420px] h-[860px] bg-gradient-to-br from-gray-950 via-gray-800 to-gray-600 rounded-[60px] p-4 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[34px] bg-gradient-to-b from-gray-950 to-gray-800 rounded-b-3xl" />
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[45px] overflow-hidden">
            <iframe src={url} className="w-full h-full border-0" title="Mobile Preview" />
          </div>
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const openInMobilePreview = (url: string) => {
  // Create a container for the modal if it doesn't exist
  let container = document.getElementById('mobile-preview-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'mobile-preview-container';
    document.body.appendChild(container);
  }

  // Render the MobilePreview component
  const root = createRoot(container);
  root.render(
    <MobilePreview
      url={url}
      onClose={() => {
        root.unmount();
        container?.remove();
      }}
    />,
  );
};

const projects: Project[] = [
  {
    title: 'Digital Interactive Service Platform',
    description: 'A full-stack digital interactive service platform built with React and Node.js',
    image: startUpRoImage,
    technologies: [
      'React',
      'Context API',
      'Rest API',
      'Typescript',
      'Javascript',
      'Node.js',
      'Google Cloud Platform',
      'Serverless',
      'TailwindCSS',
      'Stripe',
      'Styled-Components',
      'Socket.io',
    ],
    link: 'https://digital-menu.app/nuria-coffee-studio',
  },
  {
    title: 'Process Workbench',
    description: 'Low-code graphical environment for process automation',
    image:
      'https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80',
    technologies: [
      'React',
      'Redux Toolkit',
      'Context API',
      'Rest API',
      'TypeScript',
      'Material UI',
      'AG Grid',
      'SASS',
      'Jest',
      'React Testing Library',
    ],
    link: 'https://www.aeratechnology.com/process-builder',
  },
  {
    title: 'Control Room Dashboard',
    description: 'Centralized Command for Enhanced Decision Intelligence',
    image:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80',
    technologies: [
      'React',
      'Context API',
      'Rest API',
      'TypeScript',
      'Jest',
      'React Testing Library',
      'SASS',
    ],
    link: 'https://www.aeratechnology.com/aera-control-room',
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
      {/* Carousel content */}
      <div
        className="absolute w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex h-full" style={{ width: `${projects.length * 100}%` }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-full h-full"
              style={{ width: `${100 / projects.length}%` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover blur-sm brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.title.toLowerCase() === 'digital interactive service platform' ? (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      openInMobilePreview(project.link);
                    }}
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project →
                  </a>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
