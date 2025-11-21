import React from 'react';

export const Loader: React.FC<{ text?: string }> = ({ text = "Initializing..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-cyan-400 font-mono text-sm animate-pulse">{text}</p>
    </div>
  );
};
