import React, { useState } from 'react';
import { Clock, Shield, Car, Plane, Building2 } from 'lucide-react';
import ShiftTable from './components/ShiftTable';
import Header from './components/Header';

function App() {
  const [currentDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Planning des Gardes
            </h2>
            <div className="text-gray-600">
              {currentDate.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          
          <ShiftTable />
        </div>
      </main>
    </div>
  );
}

export default App;