import { LevelNodeData, TopicCategory } from './types';

export const LEVELS: LevelNodeData[] = [
  // --- CORE SECTOR (Basics) ---
  { id: 1, title: "Hello World", category: TopicCategory.BASICS, position: [0, 0, 0], description: "Your first step into the digital void." },
  { id: 2, title: "Variables", category: TopicCategory.BASICS, position: [2, 0.5, 1.5], description: "Storing data in containers." },
  { id: 3, title: "Data Types", category: TopicCategory.BASICS, position: [3.5, 1, 0], description: "Strings, Integers, and Booleans." },
  
  // --- LOGIC GATE (Control Flow) ---
  { id: 4, title: "If Statements", category: TopicCategory.CONTROL_FLOW, position: [3, 2, -2], description: "Making decisions in code." },
  { id: 5, title: "Loops (For)", category: TopicCategory.CONTROL_FLOW, position: [1, 2.5, -3.5], description: "Iterating over sequences." },
  { id: 6, title: "Loops (While)", category: TopicCategory.CONTROL_FLOW, position: [-1.5, 3, -3], description: "Repeating until a condition is met." },

  // --- DATA CLUSTER (Structures) ---
  { id: 7, title: "Lists", category: TopicCategory.DATA_STRUCTURES, position: [-3.5, 4, -1], description: "Ordered collections of items." },
  { id: 8, title: "Dictionaries", category: TopicCategory.DATA_STRUCTURES, position: [-4, 4.5, 2], description: "Key-value pairs mapping." },

  // --- FUNCTIONAL ARM (Functions) ---
  { id: 9, title: "Functions", category: TopicCategory.FUNCTIONS, position: [-2.5, 5.5, 4], description: "Reusable blocks of code." },
  { id: 10, title: "Scope", category: TopicCategory.FUNCTIONS, position: [0, 6, 5], description: "Global vs Local variables." },

  // --- OBJECT RING (OOP) ---
  { id: 11, title: "Classes", category: TopicCategory.OOP, position: [3, 7, 4.5], description: "Blueprints for objects." },
  { id: 12, title: "Inheritance", category: TopicCategory.OOP, position: [5, 8, 2], description: "Sharing behavior between classes." },

  // --- STRATOSPHERE (Advanced) ---
  { id: 13, title: "Decorators", category: TopicCategory.ADVANCED, position: [5.5, 9, -1], description: "Modifying function behavior." },
  { id: 14, title: "Generators", category: TopicCategory.ADVANCED, position: [4, 10, -4], description: "Lazy evaluation and yield." },
  { id: 15, title: "Async/Await", category: TopicCategory.ADVANCED, position: [1, 11, -5.5], description: "Asynchronous programming." },

  // --- ASCENSION (Mastery I) ---
  { id: 16, title: "Try/Except", category: TopicCategory.MASTERY, position: [-2, 12, -5], description: "Handling errors gracefully." },
  { id: 17, title: "List Comprehensions", category: TopicCategory.MASTERY, position: [-5, 13, -3], description: "Syntactic sugar for lists." },
  { id: 18, title: "Lambda Functions", category: TopicCategory.MASTERY, position: [-6, 14, 0], description: "Anonymous inline functions." },
  { id: 19, title: "Sets", category: TopicCategory.MASTERY, position: [-5, 15, 3], description: "Unique item collections." },
  { id: 20, title: "Modules", category: TopicCategory.MASTERY, position: [-2, 16, 5], description: "Importing external power." },

  // --- THE COSMIC SPIRAL (Levels 21-30) ---
  { id: 21, title: "Tuples", category: TopicCategory.DATA_STRUCTURES, position: [0, 17.5, 6], description: "Immutable data sequences." },
  { id: 22, title: "Slicing", category: TopicCategory.DATA_STRUCTURES, position: [3, 18.5, 5], description: "Precision data extraction." },
  { id: 23, title: "f-Strings", category: TopicCategory.BASICS, position: [5, 19.5, 2], description: "Advanced string formatting." },
  { id: 24, title: "*args & **kwargs", category: TopicCategory.FUNCTIONS, position: [6, 20.5, -2], description: "Flexible function arguments." },
  { id: 25, title: "Context Managers", category: TopicCategory.ADVANCED, position: [4, 21.5, -5], description: "The 'with' statement resource handling." },
  { id: 26, title: "Enumerate & Zip", category: TopicCategory.CONTROL_FLOW, position: [0, 22.5, -7], description: "Parallel iteration mastery." },
  { id: 27, title: "Map & Filter", category: TopicCategory.MASTERY, position: [-4, 23.5, -5], description: "Functional programming paradigms." },
  { id: 28, title: "Magic Methods", category: TopicCategory.OOP, position: [-6, 24.5, -2], description: "Customizing object behavior (__str__)." },
  { id: 29, title: "Type Hinting", category: TopicCategory.MASTERY, position: [-5, 25.5, 2], description: "Static typing in a dynamic world." },
  { id: 30, title: "Recursion", category: TopicCategory.MASTERY, position: [0, 28, 0], description: "The infinite loop of self-reference." },

  // --- THE STANDARD ORBIT (Levels 31-40) ---
  { id: 31, title: "Datetime", category: TopicCategory.BASICS, position: [3, 30, 3], description: "Temporal manipulation." },
  { id: 32, title: "JSON Handling", category: TopicCategory.DATA_STRUCTURES, position: [5, 31, 0], description: "Universal data serialization." },
  { id: 33, title: "Regex (re)", category: TopicCategory.ADVANCED, position: [4, 32, -4], description: "Advanced pattern matching." },
  { id: 34, title: "Counter", category: TopicCategory.DATA_STRUCTURES, position: [0, 33, -6], description: "High-performance counting containers." },
  { id: 35, title: "DefaultDict", category: TopicCategory.DATA_STRUCTURES, position: [-4, 34, -4], description: "Dictionaries with default values." },
  { id: 36, title: "@property", category: TopicCategory.OOP, position: [-6, 35, 0], description: "Getters and setters the Pythonic way." },
  { id: 37, title: "Class Methods", category: TopicCategory.OOP, position: [-4, 36, 4], description: "@classmethod vs @staticmethod." },
  { id: 38, title: "Named Tuples", category: TopicCategory.DATA_STRUCTURES, position: [0, 37, 6], description: "Lightweight object alternatives." },
  { id: 39, title: "Abstract Classes", category: TopicCategory.OOP, position: [4, 38, 4], description: "Enforcing interface blueprints." },
  { id: 40, title: "Multiple Inheritance", category: TopicCategory.OOP, position: [6, 39, 0], description: "Mixing DNA from multiple parents." },

  // --- THE EVENT HORIZON (Levels 41-50) ---
  { id: 41, title: "Partials", category: TopicCategory.FUNCTIONS, position: [4, 42, -4], description: "Pre-configuring function arguments." },
  { id: 42, title: "Memoization", category: TopicCategory.ADVANCED, position: [0, 44, -6], description: "Caching expensive results." },
  { id: 43, title: "Iterators", category: TopicCategory.ADVANCED, position: [-4, 46, -4], description: "Custom traversal protocols." },
  { id: 44, title: "Decorators w/ Args", category: TopicCategory.ADVANCED, position: [-6, 48, 0], description: "Meta-functions with configuration." },
  { id: 45, title: "Walrus Operator", category: TopicCategory.MASTERY, position: [-4, 50, 4], description: "Assignment expressions (:=)." },
  { id: 46, title: "Asserts", category: TopicCategory.MASTERY, position: [0, 52, 6], description: "Defensive coding and testing." },
  { id: 47, title: "Generics", category: TopicCategory.MASTERY, position: [4, 54, 4], description: "Advanced type hinting (List[T])." },
  { id: 48, title: "Dataclasses", category: TopicCategory.OOP, position: [5, 56, 0], description: "Automating class boilerplate." },
  { id: 49, title: "Async Contexts", category: TopicCategory.ADVANCED, position: [2, 58, -3], description: "Asynchronous resource management." },
  { id: 50, title: "Zen of Python", category: TopicCategory.MASTERY, position: [0, 62, 0], description: "The philosophy of the PyVerse." },
];