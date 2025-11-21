import React, { useState, useEffect } from 'react';
import GameScene from './components/GameScene';
import UIOverlay from './components/UIOverlay';
import LessonModal from './components/LessonModal';
import IntroScreen from './components/IntroScreen';
import { DebugMenu } from './components/DebugMenu';
import { LEVELS } from './constants';
import { LevelNodeData } from './types';

const App: React.FC = () => {
  // Game Phase State
  const [gameStarted, setGameStarted] = useState(false);

  // API Key State
  const [userApiKey, setUserApiKey] = useState<string>('');

  // Progression State
  const [unlockedIds, setUnlockedIds] = useState<number[]>([1]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  
  // Hint Tracking State: levelId -> max hint level used (1 or 2)
  const [hintsTaken, setHintsTaken] = useState<Record<number, number>>({});
  
  // UI State
  const [activeNode, setActiveNode] = useState<LevelNodeData | null>(null);

  // Load Persistence (Progress & API Key & Hints)
  useEffect(() => {
    const savedProgress = localStorage.getItem('pyverse_progress');
    const savedKey = localStorage.getItem('pyverse_api_key');
    const savedHints = localStorage.getItem('pyverse_hints');

    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setUnlockedIds(parsed.unlocked || [1]);
        setCompletedIds(parsed.completed || []);
      } catch (e) {
        console.error("Failed to parse saved progress", e);
        setUnlockedIds([1]);
        setCompletedIds([]);
      }
    }

    if (savedKey) {
      setUserApiKey(savedKey);
    }

    if (savedHints) {
      try {
        setHintsTaken(JSON.parse(savedHints));
      } catch (e) {
        console.error("Failed to parse saved hints", e);
      }
    }
  }, []);

  // Save Persistence
  useEffect(() => {
    localStorage.setItem('pyverse_progress', JSON.stringify({
      unlocked: unlockedIds,
      completed: completedIds
    }));
  }, [unlockedIds, completedIds]);

  useEffect(() => {
    localStorage.setItem('pyverse_hints', JSON.stringify(hintsTaken));
  }, [hintsTaken]);

  const handleApiKeyChange = (key: string) => {
    setUserApiKey(key);
    localStorage.setItem('pyverse_api_key', key);
  };

  const handleNodeClick = (id: number) => {
    const node = LEVELS.find(l => l.id === id);
    if (node) {
      setActiveNode(node);
    }
  };

  const handleCompleteLevel = () => {
    if (!activeNode) return;

    if (!completedIds.includes(activeNode.id)) {
      const newCompleted = [...completedIds, activeNode.id];
      setCompletedIds(newCompleted);

      // Unlock next level logic
      // Assuming IDs are sequential 1, 2, 3...
      const nextId = activeNode.id + 1;
      const nextLevelExists = LEVELS.find(l => l.id === nextId);
      
      if (nextLevelExists && !unlockedIds.includes(nextId)) {
        setUnlockedIds([...unlockedIds, nextId]);
      }
    }
    
    setActiveNode(null);
  };

  const handleHintTaken = (levelId: number, level: number) => {
    setHintsTaken(prev => {
      const current = prev[levelId] || 0;
      if (level > current) {
        return { ...prev, [levelId]: level };
      }
      return prev;
    });
  };

  const getCurrentCategory = () => {
    if (activeNode) return activeNode.category;
    const highestUnlocked = Math.max(...unlockedIds);
    const level = LEVELS.find(l => l.id === highestUnlocked);
    return level ? level.category : "Basics";
  };

  // --- Debug / Admin Handlers ---
  
  const handleDebugUnlockAll = () => {
    const allIds = LEVELS.map(l => l.id);
    setUnlockedIds(allIds);
  };

  const handleDebugCompleteAll = () => {
    const allIds = LEVELS.map(l => l.id);
    setUnlockedIds(allIds);
    setCompletedIds(allIds);
  };

  const handleDebugReset = () => {
    if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      setUnlockedIds([1]);
      setCompletedIds([]);
      setHintsTaken({});
      setActiveNode(null);
      localStorage.removeItem('pyverse_progress');
      localStorage.removeItem('pyverse_hints');
    }
  };

  if (!gameStarted) {
    return (
      <IntroScreen 
        onStart={() => setGameStarted(true)}
        onApiKeyChange={handleApiKeyChange}
        currentApiKey={userApiKey}
      />
    );
  }

  return (
    // Fixed position ensures full height on mobile browsers with dynamic address bars
    <div className="fixed inset-0 overflow-hidden bg-[#050505] text-white">
      
      {/* Game Scene Container with conditional Blur */}
      <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeNode ? 'blur-sm brightness-[0.4] scale-105' : ''}`}>
        <GameScene 
          unlockedIds={unlockedIds}
          completedIds={completedIds}
          onNodeClick={handleNodeClick}
          isModalOpen={!!activeNode}
        />
      </div>

      <UIOverlay 
        progress={completedIds.length} 
        total={LEVELS.length}
        currentCategory={getCurrentCategory()}
      />

      {activeNode && (
        <LessonModal 
          node={activeNode} 
          onClose={() => setActiveNode(null)}
          onComplete={handleCompleteLevel}
          userApiKey={userApiKey}
          onHintTaken={handleHintTaken}
        />
      )}

      <DebugMenu 
        onUnlockAll={handleDebugUnlockAll}
        onCompleteAll={handleDebugCompleteAll}
        onReset={handleDebugReset}
      />
    </div>
  );
};

export default App;