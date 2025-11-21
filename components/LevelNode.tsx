import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float } from '@react-three/drei';
import { Vector3, Mesh, Group } from 'three';
import { LevelNodeData, NodeStatus, TopicCategory } from '../types';

// Declare intrinsic elements to fix TypeScript errors when types are missing
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      cylinderGeometry: any;
      meshBasicMaterial: any;
      torusGeometry: any;
    }
  }
}

interface LevelNodeProps {
  data: LevelNodeData;
  status: NodeStatus;
  onClick: (id: number) => void;
  showLabel: boolean;
}

const LevelNode: React.FC<LevelNodeProps> = ({ data, status, onClick, showLabel }) => {
  const meshRef = useRef<Mesh>(null);
  const ring1Ref = useRef<Mesh>(null);
  const ring2Ref = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      // Pulse scale for active nodes
      if (status === NodeStatus.ACTIVE) {
        const scale = 1 + Math.sin(t * 2) * 0.1;
        meshRef.current.scale.set(scale, scale, scale);
      }
      
      // Rotation
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }

    if (ring1Ref.current && status !== NodeStatus.LOCKED) {
       ring1Ref.current.rotation.x = t * 0.5;
       ring1Ref.current.rotation.y = t * 0.2;
    }
    
    if (ring2Ref.current && status !== NodeStatus.LOCKED) {
       ring2Ref.current.rotation.x = -t * 0.3;
       ring2Ref.current.rotation.z = t * 0.1;
    }
  });

  const getColor = () => {
    switch (status) {
      case NodeStatus.COMPLETED: return "#10b981"; // Emerald 500
      case NodeStatus.ACTIVE: return "#06b6d4"; // Cyan 500
      case NodeStatus.LOCKED: return "#1f2937"; // Gray 800
      default: return "#374151";
    }
  };

  const getEmissive = () => {
    if (status === NodeStatus.LOCKED) return "#000000";
    if (hovered) return "#ffffff";
    return status === NodeStatus.ACTIVE ? "#06b6d4" : "#10b981";
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (status !== NodeStatus.LOCKED) {
      onClick(data.id);
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={new Vector3(...data.position)}>
        {/* Main Core */}
        <mesh
          ref={meshRef}
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered && status !== NodeStatus.LOCKED ? 1.3 : 1}
        >
          <icosahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial
            color={getColor()}
            emissive={getEmissive()}
            emissiveIntensity={status === NodeStatus.ACTIVE ? 2 : status === NodeStatus.COMPLETED ? 1 : 0}
            roughness={0.1}
            metalness={0.9}
            wireframe={status === NodeStatus.LOCKED}
          />
        </mesh>

        {/* Outer Rings for Active/Completed */}
        {status !== NodeStatus.LOCKED && (
          <>
            <mesh ref={ring1Ref}>
              <torusGeometry args={[0.8, 0.02, 16, 100]} />
              <meshStandardMaterial 
                color={status === NodeStatus.ACTIVE ? "#22d3ee" : "#34d399"} 
                emissive={status === NodeStatus.ACTIVE ? "#22d3ee" : "#34d399"}
                emissiveIntensity={0.5}
                transparent
                opacity={0.6}
              />
            </mesh>
            <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[1.1, 0.01, 16, 100]} />
              <meshStandardMaterial 
                 color={status === NodeStatus.ACTIVE ? "#0891b2" : "#059669"}
                 transparent
                 opacity={0.4}
              />
            </mesh>
          </>
        )}

        {/* Label - Only rendered if showLabel is true */}
        {showLabel && (
          <Html position={[0, 1.2, 0]} center distanceFactor={12} style={{ pointerEvents: 'none' }}>
            <div className={`
              px-3 py-1.5 rounded-lg backdrop-blur-md transition-all duration-300 border whitespace-nowrap flex flex-col items-center
              ${status === NodeStatus.LOCKED 
                ? 'opacity-30 bg-gray-900/50 border-gray-700 scale-90' 
                : hovered 
                  ? 'opacity-100 bg-black/80 border-cyan-400 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                  : 'opacity-90 bg-black/60 border-cyan-500/30 scale-100'}
            `}>
              <span className={`text-[10px] uppercase font-bold tracking-wider mb-0.5 ${
                status === NodeStatus.LOCKED ? 'text-gray-500' : 'text-cyan-500'
              }`}>
                {data.category}
              </span>
              <span className={`text-xs font-bold font-mono ${
                status === NodeStatus.LOCKED ? 'text-gray-400' : 'text-white'
              }`}>
                {data.id}. {data.title}
              </span>
            </div>
          </Html>
        )}
        
        {/* Vertical tether to 'ground' */}
        <mesh position={[0, -data.position[1]/2 - 10, 0]}>
           <cylinderGeometry args={[0.01, 0.01, data.position[1] + 20, 4]} />
           <meshBasicMaterial color="#1f2937" transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

export default LevelNode;