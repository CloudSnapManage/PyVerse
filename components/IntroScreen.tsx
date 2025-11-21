import React, { useState, useEffect } from 'react';

interface IntroScreenProps {
  onStart: () => void;
  onApiKeyChange: (key: string) => void;
  currentApiKey: string;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart, onApiKeyChange, currentApiKey }) => {
  const [keyInput, setKeyInput] = useState(currentApiKey);

  useEffect(() => {
    setKeyInput(currentApiKey);
  }, [currentApiKey]);

  const handleSaveKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setKeyInput(val);
    onApiKeyChange(val);
  };

  return (
    <div className="relative w-full h-screen bg-[#050505] text-white overflow-y-auto custom-scrollbar flex flex-col items-center justify-center p-4 md:p-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[50px] md:blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/10 rounded-full blur-[50px] md:blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* GitHub Credit Badge - Top Right */}
      <a
        href="https://github.com/CloudSnapManage/PyVerse"
        target="_blank"
        rel="noreferrer"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex flex-col items-center gap-2 bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:border-cyan-500 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8 fill-white group-hover:fill-cyan-400 transition-colors"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <span className="text-[10px] md:text-xs font-mono text-gray-300 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
          Shrijan Paudel
        </span>
      </a>

      <div className="relative z-10 max-w-4xl w-full bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 md:p-12 shadow-2xl my-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-sans mb-2 md:mb-4 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            PYVERSE
          </h1>
          <p className="text-sm md:text-xl text-cyan-100/80 font-mono tracking-widest uppercase">
            // 3D Interactive Python Odyssey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Mission Brief */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1 h-5 md:h-6 bg-cyan-500 block"></span>
              Mission Brief
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Welcome, Cadet. You are entering the <span className="text-cyan-400 font-bold">Constellation of Code</span>.
              Your objective is to traverse the neural network of Python knowledge, unlocking nodes from basic variables to advanced metaprogramming.
            </p>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400 font-mono">
              <li className="flex items-center gap-3">
                <span className="text-green-500">➜</span> 50+ Interactive Levels
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">➜</span> AI-Powered Code Tutor
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">➜</span> Real-time Grading
              </li>
            </ul>
          </div>

          {/* Configuration */}
          <div className="bg-black/40 border border-gray-800 rounded-xl p-4 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <span className="text-lg">🔑</span>
                Neural Link Configuration
              </h3>
              <p className="text-[10px] md:text-xs text-gray-300 mb-4 leading-relaxed">
                <span className="text-cyan-400 font-bold">OFFLINE MODE ACTIVE:</span> By default, the system uses internal pattern matching to grade your code.
                <br /><br />
                To enable <span className="text-purple-400 font-bold">AI Grading</span>, detailed explanations, and dynamic feedback, you must connect your own Neural Core.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] md:text-xs font-mono text-cyan-500 uppercase">Gemini API Key (Optional)</label>
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-cyan-400 underline hover:text-cyan-300"
                  >
                    Get API Key ↗
                  </a>
                </div>
                <input
                  type="password"
                  value={keyInput}
                  onChange={handleSaveKey}
                  placeholder="Enter Key for AI Features..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm font-mono text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <p className="text-[10px] text-gray-500">
                  Key is stored locally. Leave blank to use basic Offline Mode.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          <button
            onClick={onStart}
            className="group relative px-8 md:px-12 py-3 md:py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-base md:text-lg tracking-wider rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 overflow-hidden w-full md:w-auto text-center"
          >
            <span className="relative z-10">INITIALIZE SEQUENCE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>

          <div className="text-[10px] md:text-xs text-gray-600 font-mono">
            v1.0.5 // System Stable
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;