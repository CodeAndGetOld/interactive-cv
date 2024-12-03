import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-2">John Doe</h1>
      <h2 className="text-xl mb-4">Senior Software Engineer</h2>
      <div className="flex justify-center items-center space-x-6">
        <a href="https://github.com" className="hover:text-blue-200 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com" className="hover:text-blue-200 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:john@example.com" className="hover:text-blue-200 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <span className="flex items-center">
          <MapPin className="w-5 h-5 mr-1" />
          San Francisco, CA
        </span>
      </div>
    </header>
  );
}