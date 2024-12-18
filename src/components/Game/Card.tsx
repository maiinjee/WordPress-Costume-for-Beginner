import React from 'react';
import { Card as CardType } from '../../types/game';

interface CardProps {
  card: CardType;
  onFlip: (id: number) => void;
}

export function Card({ card, onFlip }: CardProps) {
  return (
    <button
      onClick={() => onFlip(card.id)}
      className={`w-24 h-24 rounded-lg transition-all duration-300 transform cursor-pointer
        ${card.isFlipped || card.isMatched
          ? 'rotate-0 bg-white'
          : 'rotate-y-180 bg-blue-500 hover:bg-blue-600'
        }
        ${card.isMatched ? 'opacity-75' : 'opacity-100'}
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
      disabled={card.isFlipped || card.isMatched}
      aria-label={card.isFlipped ? `Card ${card.emoji}` : 'Hidden card'}
    >
      <span className={`text-4xl ${card.isFlipped || card.isMatched ? 'block' : 'hidden'}`}>
        {card.emoji}
      </span>
    </button>
  );
}