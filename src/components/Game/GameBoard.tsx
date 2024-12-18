import React from 'react';
import { Card } from './Card';
import { Card as CardType } from '../../types/game';

interface GameBoardProps {
  cards: CardType[];
  onCardFlip: (id: number) => void;
}

export function GameBoard({ cards, onCardFlip }: GameBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {cards.map(card => (
        <Card key={card.id} card={card} onFlip={onCardFlip} />
      ))}
    </div>
  );
}