import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { LevelNodeData, LessonContent } from '../types';
import { getLesson } from '../data/staticLessons';
import { evaluateCodeWithAI, getHintFromAI } from '../services/geminiService';
import { Loader } from './Loader';

interface LessonModalProps {
  node: LevelNodeData;
  onClose: () => void;
  onComplete: () => void;
  userApiKey: string;
  onHintTaken: (levelId: number, hintLevel: number) => void;
}

const LessonModal: React.FC<LessonModalProps> = ({ node, onClose, onComplete, userApiKey, onHintTaken }) => {
  const [content, setContent] = useState<LessonContent | null>(null);
  const [userCode, setUserCode] = useState('');
  const [evaluating, setEvaluating] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string>('Ready to execute...');
  const [feedback, setFeedback] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState(false);
  
  // Hint State: 0 = No Hint, 1 = Concept, 2 = Solution
  const [currentHintLevel, setCurrentHintLevel] = useState(0);
  const [fetchingHint, setFetchingHint] = useState(false);

  // AI Config State: Default to true ONLY if key exists
  const [useAI, setUseAI] = useState(!!userApiKey);

  // Mobile Tab State: 'brief' | 'code'
  const [mobileTab, setMobileTab] = useState<'brief' | 'code'>('brief');

  useEffect(() => {
    // Load Static Content
    const data = getLesson(node.id);
    setContent(data);
    setUserCode(data.starterCode);
    setCurrentHintLevel(0);
  }, [node]);

  const handleHint = async () => {
    if (!content || fetchingHint || currentHintLevel >= 2) return;
    
    setFetchingHint(true);
    const nextLevel = currentHintLevel + 1;
    
    // Switch to code tab on mobile to see output
    setMobileTab('code');
    
    let hintText = "";
    setTerminalOutput(nextLevel === 1 ? "Initializing Tutor Protocol..." : "Decrypting Solution Archive...");

    if (useAI && userApiKey) {
      hintText = await getHintFromAI(
        node.title,
        content.challenge,
        nextLevel === 1 ? 'concept' : 'solution',
        userApiKey
      );
    } else {
      // Offline Mode
      await new Promise(r => setTimeout(r, 800)); // Simulate processing
      if (nextLevel === 1) {
        hintText = `[OFFLINE TUTOR]\nHint: ${content.hint}`;
      } else {
        hintText = `[OFFLINE ARCHIVE]\nSolution:\n${content.solutionCode}`;
      }
    }

    setFeedback(hintText);
    setTerminalOutput(`--- HINT LEVEL ${nextLevel} RECEIVED ---`);
    setCurrentHintLevel(nextLevel);
    onHintTaken(node.id, nextLevel);
    setFetchingHint(false);
  };

  const handleRun = async () => {
    if (!content) return;
    
    // Ensure we are on code tab to see result
    setMobileTab('code');
    
    setEvaluating(true);
    setTerminalOutput("Initializing Runtime Environment...");
    setFeedback("");

    // Double check key presence if useAI is true
    if (useAI && userApiKey) {
      // --- AI Grading Path ---
      setTerminalOutput("Transmitting to Neural Core (Gemini)...");
      const result = await evaluateCodeWithAI(node.title, content.challenge, userCode, userApiKey);
      setTerminalOutput(result.output);
      setFeedback(result.feedback);
      setIsCorrect(result.isCorrect);
      
      // Fallback suggestion if AI fails
      if (result.output.includes("Connection Error")) {
         setUseAI(false); // Auto-switch to offline
      }
    } else {
      // --- Static/Regex Grading Path ---
      if (useAI && !userApiKey) {
        setTerminalOutput("Error: Neural Link Offline. No API Key detected.");
        setFeedback("Switching to local pattern matching protocol...");
        setUseAI(false);
        await new Promise(r => setTimeout(r, 1000)); 
      }

      const normalizedCode = userCode.replace(/\r\n/g, "\n");
      const regex = new RegExp(content.validationRegex, 's'); 
      
      const match = regex.test(normalizedCode);
      
      await new Promise(r => setTimeout(r, 600)); 

      if (match) {
        setTerminalOutput(content.expectedOutput);
        setFeedback("Pattern match confirmed. Local execution successful.");
        setIsCorrect(true);
      } else {
        setTerminalOutput("Error: Code pattern mismatch.");
        setFeedback("Your code does not match the required solution pattern.\n\nTip: Check variable names, spacing, or use the Hint button.");
        setIsCorrect(false);
      }
    }
    
    setEvaluating(false);
  };

  if (!content) return <Loader />;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0a0a0a] border border-gray-800 w-full max-w-6xl h-[95vh] md:h-[85vh] rounded-xl flex flex-col md:flex-row overflow-hidden shadow-2xl relative">
        
        {/* Mobile Tab Navigation */}
        <div className="flex md:hidden border-b border-gray-800 bg-[#111]">
          <button 
            onClick={() => setMobileTab('brief')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              mobileTab === 'brief' ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-gray-500'
            }`}
          >
            Mission Brief
          </button>
          <button 
            onClick={() => setMobileTab('code')}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              mobileTab === 'code' ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-gray-500'
            }`}
          >
            Code Terminal
          </button>
        </div>

        {/* Left Panel: Theory & Challenge (Hidden on mobile if code tab active) */}
        <div className={`
          w-full md:w-1/3 border-r border-gray-800 flex-col bg-gray-900/50
          ${mobileTab === 'code' ? 'hidden md:flex' : 'flex'} h-full md:h-auto
        `}>
          <div className="p-4 md:p-6 border-b border-gray-800">
            <div className="flex items-center justify-between mb-2">
               <span className="text-xs font-mono text-cyan-500 bg-cyan-900/30 px-2 py-1 rounded">{node.category}</span>
               <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">✕ ESC</button>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{node.title}</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar text-gray-300 text-sm leading-relaxed pb-20 md:pb-6">
             <div>
               <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                 <span className="w-1 h-4 bg-cyan-500 block"></span>
                 Theory
               </h3>
               <div className="prose prose-invert prose-sm max-w-none">
                 <ReactMarkdown>{content.theory}</ReactMarkdown>
               </div>
             </div>

             <div className="bg-blue-900/20 border border-blue-800/50 p-4 rounded-lg">
                <h3 className="text-blue-300 font-bold mb-2 flex items-center gap-2">
                 <span className="text-lg">⚡</span>
                 Challenge
               </h3>
               <div className="prose prose-invert prose-sm max-w-none text-blue-100">
                 <ReactMarkdown>{content.challenge}</ReactMarkdown>
               </div>
             </div>
             
             {/* Mobile switch suggestion */}
             <button 
               className="md:hidden w-full py-3 mt-4 bg-cyan-900/30 border border-cyan-800 text-cyan-400 rounded text-xs font-bold"
               onClick={() => setMobileTab('code')}
             >
               GO TO TERMINAL ➜
             </button>
          </div>
        </div>

        {/* Right Panel: Editor & Terminal (Hidden on mobile if brief tab active) */}
        <div className={`
          w-full md:w-2/3 flex-col bg-[#0d0d0d]
          ${mobileTab === 'brief' ? 'hidden md:flex' : 'flex'} h-full md:h-auto
        `}>
          {/* Editor Toolbar */}
          <div className="flex flex-wrap items-center justify-between px-3 py-2 bg-[#1a1a1a] border-b border-gray-800 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-500 hidden sm:inline">main.py</span>
              <button 
                onClick={() => {
                   if (!userApiKey && !useAI) {
                      alert("Please enter an API Key in the main menu to enable AI features.");
                      return;
                   }
                   setUseAI(!useAI);
                }}
                title={!userApiKey ? "API Key Required" : useAI ? "Switch to Basic Grading (Regex)" : "Switch to AI Grading (Gemini)"}
                className={`text-[10px] px-2 md:px-3 py-1 rounded-full border transition-all font-bold flex items-center gap-1 whitespace-nowrap
                  ${useAI 
                    ? 'border-green-500/50 text-green-400 bg-green-900/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]' 
                    : 'border-gray-600 text-gray-400 hover:text-gray-200 bg-gray-800/50'}`}
              >
                {useAI ? 'AI ONLINE' : 'OFFLINE MODE'}
              </button>
            </div>
            <div className="flex items-center gap-2 ml-auto">
               {/* HINT BUTTON */}
               <button
                 onClick={handleHint}
                 disabled={fetchingHint || currentHintLevel >= 2 || isCorrect}
                 className={`px-2 md:px-3 py-1.5 rounded text-[10px] md:text-xs font-bold font-mono transition-all flex items-center gap-1 whitespace-nowrap
                   ${currentHintLevel >= 2 
                     ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                     : currentHintLevel === 1
                       ? 'bg-orange-900/50 text-orange-400 border border-orange-500/50 hover:bg-orange-900/80'
                       : 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-900/50'}
                 `}
               >
                 {fetchingHint ? 'SCANNING...' : 
                  currentHintLevel === 0 ? '💡 HINT' :
                  currentHintLevel === 1 ? '🔥 ANSWER' :
                  '🔓 UNLOCKED'}
               </button>

               <button 
                 onClick={handleRun}
                 disabled={evaluating || isCorrect}
                 className={`px-3 md:px-4 py-1.5 rounded text-[10px] md:text-xs font-bold font-mono transition-all whitespace-nowrap
                   ${evaluating ? 'bg-yellow-600 text-white cursor-wait' : 
                     isCorrect ? 'bg-green-600 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'}
                 `}
               >
                 {evaluating ? '...' : isCorrect ? 'DONE' : 'RUN ▶'}
               </button>
               {isCorrect && (
                 <button 
                   onClick={onComplete}
                   className="px-3 py-1.5 rounded text-[10px] md:text-xs font-bold font-mono bg-gray-700 hover:bg-gray-600 text-white transition-all whitespace-nowrap"
                 >
                   NEXT →
                 </button>
               )}
            </div>
          </div>

          {/* Code Editor Area */}
          <div className="flex-1 relative min-h-[200px]">
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full h-full bg-[#0d0d0d] text-gray-200 font-mono p-4 resize-none focus:outline-none text-sm leading-6"
              spellCheck="false"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              style={{ tabSize: 4 }}
            />
          </div>

          {/* Terminal / Feedback Area */}
          <div className="h-1/3 min-h-[150px] bg-[#050505] border-t border-gray-800 flex flex-col">
            <div className="flex items-center justify-between px-4 py-1 bg-[#111] border-b border-gray-800">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Terminal Output</span>
              {currentHintLevel > 0 && (
                <span className="text-[10px] font-mono text-yellow-600 uppercase">Hint Level {currentHintLevel}/2</span>
              )}
            </div>
            <div className="flex-1 p-4 font-mono text-xs overflow-y-auto custom-scrollbar pb-10">
              <div className="mb-2">
                <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> python3 main.py
              </div>
              <pre className="whitespace-pre-wrap text-gray-300 mb-4">{terminalOutput}</pre>
              
              {feedback && (
                <div className={`p-3 rounded border-l-2 ${
                  currentHintLevel > 0 && !isCorrect 
                    ? 'bg-yellow-900/10 border-yellow-500' 
                    : isCorrect 
                      ? 'bg-green-900/20 border-green-500' 
                      : 'bg-red-900/10 border-red-500'
                }`}>
                  <p className={`font-bold mb-1 ${
                    currentHintLevel > 0 && !isCorrect 
                      ? 'text-yellow-400' 
                      : isCorrect 
                        ? 'text-green-400' 
                        : 'text-red-400'
                  }`}>
                    {currentHintLevel > 0 && !isCorrect ? 'System Assistance:' : isCorrect ? 'Status: Success' : 'Status: Failed'}
                  </p>
                  <div className="text-gray-400 italic whitespace-pre-wrap">
                    <ReactMarkdown>{feedback}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;