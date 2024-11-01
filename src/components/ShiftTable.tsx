import React from 'react';
import { Clock, Shield, Car, Plane, Building2 } from 'lucide-react';

const positions = [
  { id: 'vigie', name: 'Vigie', icon: Building2 },
  { id: 'renfort', name: 'Renfort', icon: Shield },
  { id: 'parking', name: 'Protection Parking', icon: Car },
  { id: 'piste', name: 'Protection Piste', icon: Plane },
];

const generateTimeSlots = () => {
  const slots = [];
  let currentHour = 7;
  let minutes = 30;

  for (let i = 0; i < 8; i++) {
    const startTime = `${String(currentHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    currentHour = (currentHour + 3) % 24;
    slots.push({
      start: startTime,
      end: `${String(currentHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
    });
  }
  return slots;
};

export default function ShiftTable() {
  const timeSlots = generateTimeSlots();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-3 bg-gray-50 border"></th>
            {positions.map((position) => (
              <th
                key={position.id}
                className="p-3 bg-gray-50 border text-gray-700 font-semibold"
              >
                <div className="flex items-center justify-center space-x-2">
                  <position.icon className="w-5 h-5" />
                  <span>{position.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 border">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">
                    {slot.start} - {slot.end}
                  </span>
                </div>
              </td>
              {positions.map((position) => (
                <td key={position.id} className="p-3 border">
                  <div className="min-h-[60px] rounded-lg border-2 border-dashed border-gray-200 p-2">
                    <div className="flex flex-col space-y-1">
                      <input
                        type="text"
                        placeholder="Pompier 1"
                        className="w-full px-2 py-1 text-sm rounded border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      />
                      <input
                        type="text"
                        placeholder="Pompier 2"
                        className="w-full px-2 py-1 text-sm rounded border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}