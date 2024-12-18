import React from 'react';

interface HeaderProps {
  total: number;
  completed: number;
}

export function Header({ total, completed }: HeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo List</h1>
      <p className="text-gray-600">
        {completed} of {total} tasks completed
      </p>
    </div>
  );
}