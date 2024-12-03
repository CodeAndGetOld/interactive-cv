import React from 'react';

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'Python', level: 30 },
      { name: 'C#', level: 30 },
      { name: 'Java', level: 25 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'Sass/SCSS', level: 85 },
      { name: 'React.js', level: 95 },
      { name: 'Redux/Context API', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'React Native', level: 50 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Styled-Components', level: 85 },
      { name: 'Material-UI', level: 80 },
      { name: 'React Query', level: 85 },
      { name: 'React Hook Form', level: 90 },
    ],
  },
  {
    name: 'Development Tools',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Webpack/Vite', level: 85 },
      { name: 'Jest/React Testing Library', level: 80 },
      { name: 'NPM/Yarn', level: 90 },
      { name: 'ESLint/Prettier', level: 85 },
    ],
  },
  {
    name: 'Backend & APIs',
    skills: [
      { name: 'RESTful APIs', level: 90 },
      { name: 'Node.js', level: 40 },
      { name: 'Express', level: 40 },
      { name: 'PostgreSQL', level: 30 },
      { name: 'MongoDB', level: 30 },
    ],
  },
];

export function TechnicalSkills() {
  return (
    <section className="card mb-8">
      <h2 className="text-xl font-bold mb-6">Technical Skills</h2>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4 text-primary">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}