import React from 'react';
import { MapPin, Download } from 'lucide-react';

interface LanguageSkill {
  name: string;
  level: number;
}

const languages: LanguageSkill[] = [
  { name: 'English', level: 95 },
  { name: 'French', level: 50 },
];

const tools = ['Bootstrap, Materialize', 'Sass, Less, Tailwind', 'Gulp, Webpack', 'Git Knowledge'];

export function Sidebar() {
  return (
    <aside className="bg-card-dark p-8 flex flex-col items-center">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQGiJv2QRGbeLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722893539330?e=1738195200&v=beta&t=qmNb7gTuDRWzsxKczAyf6W2XOkRGpg2eUYDaqwK0R4E"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-6 border-2 border-primary"
      />
      <h1 className="text-2xl font-bold mb-1">Tudor Hotea</h1>
      <h2 className="text-lg text-gray-400 mb-6">Senior UI Developer</h2>

      <div className="w-full space-y-6">
        <div>
          <p className="text-gray-400 mb-2">Residence:</p>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span>Bucharest, RO</span>
          </div>
        </div>

        <div>
          <p className="text-gray-400 mb-4">Languages</p>
          {languages.map((lang, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{lang.name}</span>
                <span>{lang.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${lang.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-gray-400 mb-4">Programming</p>
          <ul className="space-y-2">
            {tools.map((tool, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <button className="btn-primary w-full flex items-center justify-center">
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </button>
      </div>
    </aside>
  );
}
