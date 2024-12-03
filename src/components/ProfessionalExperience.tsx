import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: "Tech Corp",
    location: "San Francisco, CA",
    title: "Senior Software Engineer",
    period: "2020 - Present",
    achievements: [
      "Led development of microservices architecture serving 1M+ users",
      "Reduced API response time by 40% through optimization",
      "Mentored 5 junior developers and conducted 200+ code reviews",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    company: "StartUp Inc",
    location: "New York, NY",
    title: "Full Stack Developer",
    period: "2018 - 2020",
    achievements: [
      "Built real-time collaboration features using WebSocket",
      "Increased test coverage from 45% to 85%",
      "Developed mobile-responsive dashboard used by 50K+ users",
      "Optimized database queries reducing load times by 30%"
    ]
  }
];

export function ProfessionalExperience() {
  return (
    <section className="card mb-8">
      <h2 className="text-xl font-bold mb-6">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <div className="flex items-center text-gray-400 text-sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span>{exp.company} - {exp.location}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}