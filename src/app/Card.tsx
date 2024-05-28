// src/app/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  club: string;
  description: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, club, description, icon }) => {
  return (
    <div key={title} className="bg-[#1e1e24] text-white p-4 rounded-lg shadow-md m-2 flex flex-col items-center text-center">
      <img src={icon} alt={`${title} Icon`} className="w-16 h-16 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{club}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
