import React from 'react';
import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-red-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield size={32} className="text-yellow-300" />
            <div>
              <h1 className="text-2xl font-bold">Gestion des Gardes</h1>
              <p className="text-red-100">Service d'Incendie et de Secours</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <button className="hover:text-yellow-300 transition-colors">
              Planning
            </button>
            <button className="hover:text-yellow-300 transition-colors">
              Personnel
            </button>
            <button className="hover:text-yellow-300 transition-colors">
              Rapports
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}