import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Line, Sparkles, Environment, Html } from '@react-three/drei';
import { LEVELS } from '../constants';
import LevelNode from './LevelNode';
import { NodeStatus } from '../types';
import * as THREE from 'three';
import { Loader } from './Loader';

interface GameSceneProps {
  unlockedIds: number[];
  completedIds: number[];
  onNodeClick: (id: number) => void;
  isModalOpen: boolean;
}

const ConnectionLines = ({ levels, unlockedIds }: { levels: typeof LEVELS, unlockedIds: number[] }) => {
  const points = levels.map(l => new THREE.Vector3(...l.position));
  
  return (
    <Line
      points={points}
      color="#0e7490" // Cyan 700
      lineWidth={2}
      dashed={false}
      opacity={0.3}
      transparent
    />
  );
};

const SceneContent: React.FC<GameSceneProps> = ({ unlockedIds, completedIds, onNodeClick, isModalOpen }) => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={3} color="#22d3ee" distance={50} decay={2} />
      <pointLight position={[-10, -5, -10]} intensity={2} color="#a855f7" distance={50} decay={2} />
      <pointLight position={[0, 20, 0]} intensity={1} color="#ffffff" />

      {/* Environment for reflections on nodes */}
      <Environment preset="city" />

      {/* Environment Background */}
      <Stars radius={150} depth={50} count={7000} factor={4} saturation={0} fade speed={0.5} />
      <Sparkles count={500} scale={60} size={4} speed={0.4} opacity={0.6} color="#06b6d4" />
      <Sparkles count={300} scale={40} size={2} speed={0.2} opacity={0.4} color="#a855f7" />
      
      {/* Connections */}
      <ConnectionLines levels={LEVELS} unlockedIds={unlockedIds} />

      {/* Nodes */}
      {LEVELS.map((level) => {
        let status = NodeStatus.LOCKED;
        if (completedIds.includes(level.id)) status = NodeStatus.COMPLETED;
        else if (unlockedIds.includes(level.id)) status = NodeStatus.ACTIVE;

        return (
          <LevelNode
            key={level.id}
            data={level}
            status={status}
            onClick={onNodeClick}
            showLabel={!isModalOpen}
          />
        );
      })}
      
      {/* Grid Floor */}
      <group position={[0, -8, 0]}>
         <gridHelper args={[100, 50, 0x1e293b, 0x020617]} />
      </group>
    </>
  );
};

const GameScene: React.FC<GameSceneProps> = (props) => {
  return (
    <div className="w-full h-full">
      <Canvas 
        dpr={[1, 2]} // Optimize pixel ratio for mobile (prevents rendering at 3x/4x)
        gl={{ 
          antialias: true, 
          toneMapping: THREE.ReinhardToneMapping, 
          toneMappingExposure: 1.5,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[20, 15, 25]} fov={50} />
        <OrbitControls 
          makeDefault
          enablePan={true} 
          enableDamping={true}
          dampingFactor={0.05}
          target={[0, 20, 0]} // Center camera higher up on the tower
          minDistance={5} 
          maxDistance={120} // Allow zooming out further to see top levels
          maxPolarAngle={Math.PI / 1.8}
          autoRotate={!props.isModalOpen}
          autoRotateSpeed={0.5}
        />
        
        <Suspense fallback={
          <Html center>
            <div className="w-64">
              <Loader text="Loading Simulation..." />
            </div>
          </Html>
        }>
          <SceneContent {...props} />
        </Suspense>

        <fog attach="fog" args={['#020202', 20, 140]} />
      </Canvas>
    </div>
  );
};

export default GameScene;