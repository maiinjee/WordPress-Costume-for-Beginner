import { useState, useEffect } from 'react';
import { Card, GameState } from '../types/game';
import { createDeck, calculateScore } from '../utils/gameUtils';
import { getBestScore, saveBestScore } from '../utils/storage';

export function useMemoryGame() {
  const [gameState, setGameState] = useState<GameState>({
    cards: createDeck(),
    score: 0,
    bestScore: getBestScore(),
    moves: 0,
    isWon: false,
  });

  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = gameState.cards[firstId];
      const secondCard = gameState.cards[secondId];

      if (firstCard.emoji === secondCard.emoji) {
        setGameState(prev => ({
          ...prev,
          cards: prev.cards.map(card =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatched: true }
              : card
          ),
          moves: prev.moves + 1,
        }));
      } else {
        setTimeout(() => {
          setGameState(prev => ({
            ...prev,
            cards: prev.cards.map(card =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card
            ),
            moves: prev.moves + 1,
          }));
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards]);

  useEffect(() => {
    const allMatched = gameState.cards.every(card => card.isMatched);
    if (allMatched && !gameState.isWon) {
      const finalScore = calculateScore(gameState.moves);
      saveBestScore(finalScore);
      setGameState(prev => ({
        ...prev,
        score: finalScore,
        bestScore: Math.max(finalScore, prev.bestScore),
        isWon: true,
      }));
    }
  }, [gameState.cards]);

  const flipCard = (id: number) => {
    if (
      flippedCards.length === 2 ||
      gameState.cards[id].isFlipped ||
      gameState.cards[id].isMatched
    ) {
      return;
    }

    setGameState(prev => ({
      ...prev,
      cards: prev.cards.map(card =>
        card.id === id ? { ...card, isFlipped: true } : card
      ),
    }));
    setFlippedCards(prev => [...prev, id]);
  };

  const resetGame = () => {
    setGameState({
      cards: createDeck(),
      score: 0,
      bestScore: gameState.bestScore,
      moves: 0,
      isWon: false,
    });
    setFlippedCards([]);
  };

  return {
    gameState,
    flipCard,
    resetGame,
  };
}