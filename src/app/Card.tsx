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
    <div className="card">
      <div className="icon">
        <i className={`icon-${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <h4>{club}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
