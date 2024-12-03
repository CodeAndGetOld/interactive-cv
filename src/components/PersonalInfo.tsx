import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function PersonalInfo() {
  return (
    <section className="card mb-8">
      <div className="text-center mb-6">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
          alt="John Doe"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-primary"
        />
        <h1 className="text-2xl font-bold mb-1">John Doe</h1>
        <h2 className="text-lg text-gray-400">Senior Software Engineer</h2>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-3 text-primary" />
          <a href="mailto:john.doe@example.com" className="text-gray-400 hover:text-primary">
            john.doe@example.com
          </a>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-3 text-primary" />
          <span className="text-gray-400">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-3 text-primary" />
          <span className="text-gray-400">San Francisco, CA</span>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <a href="https://github.com/johndoe" className="text-primary hover:text-primary/80">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/johndoe" className="text-primary hover:text-primary/80">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}