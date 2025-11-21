import React from 'react';
import { TopicCategory } from '../types';

interface UIOverlayProps {
  progress: number;
  total: number;
  currentCategory: string | null;
}

const UIOverlay: React.FC<UIOverlayProps> = ({ progress, total, currentCategory }) => {
  return (
    <div className="absolute top-0 left-0 w-full p-4 md:p-6 pointer-events-none z-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
        {/* Title Section - Compact on mobile */}
        <div className="flex flex-row md:flex-col items-center md:items-start justify-between w-full md:w-auto">
          <div>
            <h1 className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-sans drop-shadow-lg">
              PYVERSE
            </h1>
            <p className="text-cyan-200/70 text-[10px] md:text-sm font-mono mt-0 md:mt-1">Simulation v1.0.5</p>
          </div>
          
          {/* Mobile Only Progress (Simple) */}
          <div className="md:hidden bg-black/60 backdrop-blur rounded-lg px-3 py-1 border border-cyan-900/30">
             <span className="text-xs font-bold text-cyan-400">{Math.round((progress / total) * 100)}%</span>
          </div>
        </div>

        {/* Desktop Status Panel */}
        <div className="hidden md:block bg-black/50 backdrop-blur-md border border-cyan-900/50 rounded-xl p-4 w-full max-w-[280px] shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">System Progress</span>
            <span className="text-xs font-bold text-white">{Math.round((progress / total) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
          <div className="flex justify-between items-end border-t border-gray-800 pt-2">
             <span className="text-xs text-gray-400 font-mono">Current Sector:</span>
             <span className="text-xs text-cyan-300 font-bold font-mono text-right ml-2 truncate">
               {currentCategory || 'Navigating...'}
             </span>
          </div>
        </div>
      </div>
      
      {/* Navigation Hints */}
      <div className="absolute bottom-8 left-6 max-w-sm hidden md:block">
        <div className="text-xs text-gray-500 font-mono space-y-1">
          <p>NAVIGATE: Click & Drag to Rotate</p>
          <p>ZOOM: Scroll</p>
          <p>SELECT: Click on Active Nodes</p>
        </div>
      </div>

      {/* Mobile Nav Hint */}
      <div className="absolute bottom-20 left-0 w-full text-center md:hidden">
        <span className="text-[10px] text-gray-500/80 font-mono bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
          TAP NODES TO START
        </span>
      </div>
    </div>
  );
};

export default UIOverlay;