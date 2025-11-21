export enum NodeStatus {
  LOCKED = 'LOCKED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}

export enum TopicCategory {
  BASICS = 'Basics',
  CONTROL_FLOW = 'Control Flow',
  DATA_STRUCTURES = 'Data Structures',
  FUNCTIONS = 'Functions',
  OOP = 'OOP',
  ADVANCED = 'Advanced',
  MASTERY = 'Mastery'
}

export interface LevelNodeData {
  id: number;
  title: string;
  category: TopicCategory;
  position: [number, number, number];
  description: string;
}

export interface LessonContent {
  theory: string;
  tutorial: string; // New field for in-depth explanation
  challenge: string;
  starterCode: string;
  // New fields for static grading
  validationRegex: string; 
  expectedOutput: string;
  // New fields for hints
  hint: string;
  solutionCode: string;
}

export interface CodeEvaluation {
  isCorrect: boolean;
  output: string; // The simulated stdout
  feedback: string; // AI advice
}