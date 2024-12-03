import React from 'react';

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'Python', level: 40 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'React Native', level: 50 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Syled-Components', level: 85 },
      { name: 'Material-UI', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 85 },
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
