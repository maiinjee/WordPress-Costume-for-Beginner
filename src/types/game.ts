export interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  score: number;
  bestScore: number;
  moves: number;
  isWon: boolean;
}