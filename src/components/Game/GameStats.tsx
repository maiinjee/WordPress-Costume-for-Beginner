import React from 'react';
import { Trophy, RotateCw } from 'lucide-react';

interface GameStatsProps {
  moves: number;
  score: number;
  bestScore: number;
  isWon: boolean;
  onReset: () => void;
}

export function GameStats({ moves, score, bestScore, isWon, onReset }: GameStatsProps) {
  return (
    <div className="text-center mb-6">
      <div className="flex justify-center items-center space-x-8 mb-4">
        <div>
          <p className="text-gray-600">Moves</p>
          <p className="text-2xl font-bold">{moves}</p>
        </div>
        <div>
          <p className="text-gray-600">Score</p>
          <p className="text-2xl font-bold">{score}</p>
        </div>
        <div className="flex items-center">
          <Trophy className="text-yellow-500 mr-2" />
          <div>
            <p className="text-gray-600">Best</p>
            <p className="text-2xl font-bold">{bestScore}</p>
          </div>
        </div>
      </div>
      {isWon && (
        <div className="mb-4">
          <p className="text-2xl font-bold text-green-500">Congratulations! 🎉</p>
          <p className="text-gray-600">You completed the game in {moves} moves!</p>
        </div>
      )}
      <button
        onClick={onReset}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
          transition-colors flex items-center gap-2 mx-auto"
      >
        <RotateCw size={20} />
        New Game
      </button>
    </div>
  );
}