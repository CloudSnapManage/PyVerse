import React, { useState } from 'react';

interface DebugMenuProps {
  onUnlockAll: () => void;
  onCompleteAll: () => void;
  onReset: () => void;
}

export const DebugMenu: React.FC<DebugMenuProps> = ({ onUnlockAll, onCompleteAll, onReset }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "pyverse.v1") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="absolute bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {isOpen && (
        <div className="mb-4 p-4 bg-black/90 border border-cyan-900/50 rounded-lg backdrop-blur-md w-64 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <h4 className="text-cyan-500 text-xs font-mono font-bold mb-3 border-b border-gray-800 pb-2 flex justify-between items-center">
            <span>// SYSTEM OVERRIDE</span>
            <span className="text-[10px] text-gray-600">ADMIN</span>
          </h4>
          
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="space-y-2">
              <p className="text-[10px] text-gray-400 font-mono">Enter Admin Credentials:</p>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
                className={`w-full bg-gray-900 border rounded px-2 py-1 text-xs font-mono text-white focus:outline-none ${error ? 'border-red-500' : 'border-gray-700 focus:border-cyan-500'}`}
                autoFocus
              />
              {error && <p className="text-[10px] text-red-500 font-mono">Access Denied</p>}
              <button 
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white text-xs font-mono py-1 rounded border border-gray-600"
              >
                AUTHENTICATE
              </button>
            </form>
          ) : (
            <div className="space-y-2">
              <button 
                onClick={onUnlockAll}
                className="w-full text-left px-3 py-2 rounded bg-gray-800/50 hover:bg-cyan-900/30 text-xs font-mono text-gray-300 hover:text-cyan-400 transition-colors border border-transparent hover:border-cyan-800/50 flex items-center gap-2 group"
              >
                <span className="text-gray-600 group-hover:text-cyan-500">🔓</span> UNLOCK ALL NODES
              </button>
              
              <button 
                onClick={onCompleteAll}
                className="w-full text-left px-3 py-2 rounded bg-gray-800/50 hover:bg-green-900/30 text-xs font-mono text-gray-300 hover:text-green-400 transition-colors border border-transparent hover:border-green-800/50 flex items-center gap-2 group"
              >
                <span className="text-gray-600 group-hover:text-green-500">✅</span> COMPLETE ALL
              </button>
              
              <div className="h-px bg-gray-800 my-2"></div>

              <button 
                onClick={onReset}
                className="w-full text-left px-3 py-2 rounded bg-red-900/10 hover:bg-red-900/30 text-xs font-mono text-red-400 hover:text-red-300 transition-colors border border-red-900/30 hover:border-red-500/50 flex items-center gap-2 group"
              >
                 <span className="text-red-800 group-hover:text-red-500">⚠️</span> FACTORY RESET
              </button>

              <div className="mt-2 pt-2 border-t border-gray-800 text-center">
                <span className="text-[10px] text-green-500 font-mono tracking-wider">ACCESS GRANTED</span>
              </div>
            </div>
          )}
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full border shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-cyan-900/80 border-cyan-500 text-cyan-400 rotate-90' 
            : 'bg-gray-900/80 border-gray-700 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
        }`}
        aria-label="Debug Menu"
        title="Admin Access"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
    </div>
  );
};