import React from 'react';
import { Award, Scroll, Heart } from 'lucide-react';

const achievements = {
  certifications: [
    "AWS Certified Solutions Architect Professional",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer Associate"
  ],
  awards: [
    "Best Technical Innovation Award 2022",
    "Outstanding Team Lead Award 2021",
    "Hackathon Winner - AI Category 2020"
  ],
  volunteer: [
    "Tech Mentor at Code.org",
    "Open Source Contributor - React",
    "STEM Education Volunteer"
  ]
};

export function Achievements() {
  return (
    <section className="card mb-8">
      <h2 className="text-xl font-bold mb-6">Additional Achievements</h2>
      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-4">
            <Scroll className="w-5 h-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Certifications</h3>
          </div>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {achievements.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="flex items-center mb-4">
            <Award className="w-5 h-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Awards</h3>
          </div>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {achievements.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="flex items-center mb-4">
            <Heart className="w-5 h-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">Volunteer Work</h3>
          </div>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {achievements.volunteer.map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}