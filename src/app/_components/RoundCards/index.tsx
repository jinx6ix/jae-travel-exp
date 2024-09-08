import React from 'react';
import './index.scss';

interface CardProps {
  frontContent: string;
  backContent: string;
  cardIndex: number;
}

const Card: React.FC<CardProps> = ({ frontContent, backContent, cardIndex }) => {
  return (
    <div className="col">
      <div className="card">
        <div className={`card__side card__side--front card__side--front-${cardIndex + 1}`}>
          <div className="frame">
            <p>{frontContent}</p>
          </div>
        </div>
        <div className={`card__side card__side--back card__side--back-${cardIndex + 1}`}>
          <div className="frame">
            <p>{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;