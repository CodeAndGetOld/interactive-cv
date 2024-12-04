import React from 'react';
import { MapPin, Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import html2canvas from 'html2canvas';

interface LanguageSkill {
  name: string;
  level: number;
}

const languages: LanguageSkill[] = [
  { name: 'English', level: 95 },
  { name: 'French', level: 50 },
];

export function Sidebar() {
  const handleDownload = async () => {
    const content = document.getElementById('root');
    if (!content) return;

    try {
      const canvas = await html2canvas(content, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Enable if you have external images
        logging: false,
        backgroundColor: '#111827', // Match your dark background
      });

      // Convert to image and download
      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = 'Tudor-Hotea-CV.png';
      link.href = image;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

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

        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors mt-4 md:mt-6"
        >
          <Download className="w-4 h-4" />
          <span>DOWNLOAD CV</span>
        </button>
      </div>
    </aside>
  );
}
