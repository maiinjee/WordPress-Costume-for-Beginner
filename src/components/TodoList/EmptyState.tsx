import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <CheckCircle2 className="mx-auto text-gray-400 mb-4" size={48} />
      <p className="text-gray-500">No todos yet. Add one above!</p>
    </div>
  );
}