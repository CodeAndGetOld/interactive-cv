import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2016 - 2018",
    details: [
      "Specialization in Machine Learning",
      "GPA: 3.9/4.0",
      "Research Assistant - AI Lab",
      "Teaching Assistant for Data Structures"
    ]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    period: "2012 - 2016",
    details: [
      "Dean's List all semesters",
      "Senior Project: Distributed Systems",
      "President of Computing Society"
    ]
  }
];

export function Education() {
  return (
    <section className="card mb-8">
      <h2 className="text-xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{edu.degree}</h3>
                <div className="flex items-center text-gray-400 text-sm">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>{edu.institution}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{edu.period}</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}