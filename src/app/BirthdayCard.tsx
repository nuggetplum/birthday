import React from 'react';
import './BirthdayCard.css';

const BirthdayCard: React.FC = () => {
  return (
    <div className="birthday-card">
      <div className="message">Happy Birthday!</div>
      <img src="/assets/images/birthday-image.png" alt="Birthday" className="slide-up" />
      <audio autoPlay loop>
        <source src="/assets/audio/birthday-song.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default BirthdayCard;