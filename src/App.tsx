import React from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { TechnicalSkills } from './components/TechnicalSkills';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-8">
          <div>
            <Sidebar />
            <TechnicalSkills />
          </div>
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
