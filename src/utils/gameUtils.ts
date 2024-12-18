import { Card } from '../types/game';

const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

export const createDeck = (): Card[] => {
  const pairs = [...EMOJIS, ...EMOJIS];
  return pairs
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
};

export const calculateScore = (moves: number): number => {
  const baseScore = 1000;
  const penalty = moves * 10;
  return Math.max(baseScore - penalty, 0);
}