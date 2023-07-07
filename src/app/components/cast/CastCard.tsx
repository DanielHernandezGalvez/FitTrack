import React from "react";

interface CardProps {
  id: number;
  name: string;
  profile_path: string;
}

const CastCard: React.FC<CardProps> = ({ id, name, profile_path }) => {
  return (
    <div className="actor-card">
      <img src={profile_path} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default CastCard;
