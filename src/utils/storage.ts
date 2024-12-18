export const getBestScore = (): number => {
  const saved = localStorage.getItem('bestScore');
  return saved ? parseInt(saved, 10) : 0;
};

export const saveBestScore = (score: number): void => {
  const currentBest = getBestScore();
  if (score > currentBest) {
    localStorage.setItem('bestScore', score.toString());
  }
};