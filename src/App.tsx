import React from 'react';
import { useMemoryGame } from './hooks/useMemoryGame';
import { GameBoard } from './components/Game/GameBoard';
import { GameStats } from './components/Game/GameStats';

function App() {
  const { gameState, flipCard, resetGame } = useMemoryGame();
  const { cards, moves, score, bestScore, isWon } = gameState;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Abdulrahman First Game</h1>
        <GameStats
          moves={moves}
          score={score}
          bestScore={bestScore}
          isWon={isWon}
          onReset={resetGame}
        />
        <GameBoard cards={cards} onCardFlip={flipCard} />
      </div>
    </div>
  );
}

export default App;