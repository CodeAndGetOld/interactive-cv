import React from 'react';

interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'CSS/Tailwind', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 50 },
      { name: 'Express', level: 50 },
      { name: 'SQL', level: 80 },
    ],
  },
];

export function Skills() {
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
