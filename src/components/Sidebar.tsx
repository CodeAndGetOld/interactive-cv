import React from 'react';
import { MapPin, Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

interface LanguageSkill {
  name: string;
  level: number;
}

const languages: LanguageSkill[] = [
  { name: 'English', level: 95 },
  { name: 'French', level: 50 },
];

export function Sidebar() {
  return (
    <aside className="bg-card-dark p-4 md:p-8 mb-4 md:mb-8 flex flex-col items-center">
      <img
        src={profileImage}
        alt="Profile"
        className="w-24 md:w-32 h-24 md:h-32 rounded-full mx-auto mb-4 md:mb-6 border-2 border-primary"
      />
      <h1 className="text-xl md:text-2xl font-bold mb-1">Tudor Hotea</h1>
      <div className="text-base md:text-lg text-gray-400 mb-4 md:mb-6 text-center">
        <div>Senior Software Engineer</div>
        <div>UI/UX Developer</div>
        <div>Co-Founder</div>
      </div>

      <div className="w-full space-y-4 md:space-y-6">
        <div>
          <p className="text-gray-400 mb-1 md:mb-2">Residence:</p>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span>Bucharest, RO</span>
          </div>
        </div>

        <div>
          <p className="text-gray-400 mb-1 md:mb-2">Languages:</p>
          {languages.map((lang, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between text-sm md:text-base mb-1">
                <span>{lang.name}</span>
                <span>{lang.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${lang.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          <p className="text-gray-400 mb-1 md:mb-2">Programming</p>
          <ul className="list-none space-y-1">
            {tools.map((tool, index) => (
              <li key={index} className="flex items-center text-sm md:text-base">
                <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                {tool}
              </li>
            ))}
          </ul>
        </div> */}

        <button className="btn-primary w-full flex items-center justify-center">
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </button>
      </div>
    </aside>
  );
}
