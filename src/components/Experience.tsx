import React from 'react';
import { Building2, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  technologies: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Unitpay Systems',
    position: 'Co-Founder & Frontend Architect & UI/UX Designer',
    technologies:
      'React.js, Material-UI, Context API, React Spring, Node.js, Express.js, Tailwind CSS',
    period: '2020 - Present',
    description: [
      'Design UI/UX for an innovative web platform that focuses on the HoReCa industry',
      'Transforming the design into code in a pixel perfect manner',
      'Make use of React.js libraries such as Context, Material-UI, Spring to make a high-end looking interface',
      'Structured the project in a modular fashion (through components) for best ease-of-access',
    ],
  },
  {
    company: 'Aera Technology',
    position: 'Senior Software Engineer',
    technologies:
      'React.js, TypeScript, Material-UI, Jest, Redux Toolkit, Context API, JEST, CSS3, SASS, Git, REST APIs, AG Grid, Fusion Charts',
    period: '2022 - Present',
    description: [
      'Develop new features and components in our existing web application',
      'Optimize application for maximum speed and scalability',
      'Work with PM and UX designer to understand requirement and ensure the technical feasibility of UI/UX design',
      'Build reusable code and libraries for future use',
      'Collaborate with other team members and with crossfunctional teams and stakeholders across geographies',
      'Create and execute unit test cases and contribute to test automation',
      'Participate in design and code reviews',
    ],
  },
  {
    company: 'Smart-X Net Apps',
    position: 'Software Engineer',
    technologies: 'React.js, JavaScript, CSS3, SASS, REST APIs, JQuery, Git, Java',
    period: '2021 - 2022',
    description: [
      'Developing new user-facing features using React.js',
      'Building reusable components and front-end libraries for future use',
      'Translating designs and wireframes into high quality code',
      'Optimising components for maximum performance across a vast array of web-capable devices and browsers',
      'Write, audit, and improve test coverage',
      'Document and refactor frontend codebase',
      'Profile and improvefrontend performance',
    ],
  },
  {
    company: 'Freelance',
    position: 'UI Developer',
    technologies: 'React.js, HTML5, CSS3, Figma, Adobe XD',
    period: '2018 - 2021',
    description: [
      'Using React to build user-facing features',
      'Creating front-end libraries and reusable components',
      'After designing the wireframes (using Adobe XD or Figma), implement the code accordingly',
      "Optimizing app components and improving the product's performance",
      'Collaborating with software developers and designers',
    ],
  },
  {
    company: 'NetBet',
    position: 'UI/UX & Graphic Designer',
    technologies: 'Photoshop, Illustrator, Blender 3D, Adobe XD, Cinema 4D',
    period: '2019 - 2021',
    description: [
      'Design and maintain online media campaigns, websites, e-mail campaigns, social media and other materials as needed.',
      'UI/UX for web platforms using Adobe XD',
      'Collaborate with the marketing managers (CRM & Acquisition) to develop compelling design concepts, great artwork and layouts for multi-channel and integrated marketing projects.',
      'Using creativity in Photoshop and Illustrator to produce complex compositions that target the actual and potential customers in the casino environment',
      'Multi-tasking: the ability to work on multiple projects at the same time',
    ],
  },
];

export function Experience() {
  return (
    <section className="card mb-4 md:mb-8">
      <h2 className="text-xl font-bold mb-3 md:mb-4">Experience</h2>
      <div className="space-y-4 md:space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 md:p-6 bg-card-dark rounded-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white">{exp.position}</h3>
                <p className="text-xs md:text-sm text-primary mt-1 mb-2 md:mb-3">
                  {exp.technologies}
                </p>
                <div className="flex items-center text-gray-400">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span className="text-sm md:text-base">{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm md:text-base">{exp.period}</span>
              </div>
            </div>
            <ul className="space-y-2 text-gray-400">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
