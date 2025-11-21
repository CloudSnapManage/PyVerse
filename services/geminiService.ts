import { GoogleGenAI, Type, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { CodeEvaluation } from "../types";

export const evaluateCodeWithAI = async (
  topic: string, 
  challenge: string, 
  userCode: string,
  apiKey?: string
): Promise<CodeEvaluation> => {
  try {
    // Strict: User must provide a key. No build-time fallback.
    const keyToUse = apiKey;

    if (!keyToUse) {
      throw new Error("API Key missing. Please provide a Gemini API Key in the settings.");
    }

    // Initialize client with the selected key
    const ai = new GoogleGenAI({ apiKey: keyToUse });

    const prompt = `
      Role: Python Interpreter & Tutor.
      Topic: ${topic}
      Challenge: ${challenge}
      
      User Code to Evaluate:
      ${userCode}

      Task:
      1. Mentally execute the user's code.
      2. Determine if it solves the challenge correctly.
      3. Provide the simulated Standard Output (stdout). If there is an error, provide the error message.
      4. Provide brief, encouraging feedback.

      Output must be valid JSON.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isCorrect: { type: Type.BOOLEAN },
            output: { type: Type.STRING },
            feedback: { type: Type.STRING },
          },
          required: ['isCorrect', 'output', 'feedback'],
        },
        // Prevent safety filters from blocking code evaluation
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ],
      }
    });

    const text = response.text;
    
    if (!text) {
      console.warn("Gemini returned empty response:", response);
      throw new Error("No evaluation generated");
    }

    return JSON.parse(text) as CodeEvaluation;

  } catch (error) {
    console.error("Gemini Eval Error:", error);
    return {
      isCorrect: false,
      output: "Connection Error: Verification Failed.",
      feedback: `Could not connect to Neural Core (AI). ${error instanceof Error ? error.message : 'Check API Key.'}`
    };
  }
};

export const getHintFromAI = async (
  topic: string,
  challenge: string,
  type: 'concept' | 'solution',
  apiKey: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey });
    
    let prompt = "";
    if (type === 'concept') {
      prompt = `
        Role: Python Tutor. 
        Topic: ${topic}
        Challenge: ${challenge}
        
        Task: Explain the concept required to solve this challenge in detail. 
        - Provide a clear conceptual explanation.
        - Show a SIMILAR example, but DO NOT provide the exact solution code for the challenge.
        - Encourage the user to try again.
        - Keep it concise (under 100 words).
      `;
    } else {
      prompt = `
        Role: Python Tutor.
        Topic: ${topic}
        Challenge: ${challenge}
        
        Task: Provide the EXACT solution code to solve this challenge.
        - Briefly explain why this code works.
        - Format the code clearly.
      `;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "AI Tutor signal lost. Try again.";

  } catch (error) {
    console.error("Gemini Hint Error:", error);
    return "Error: Could not retrieve hint from AI. Please check your API Key or connection.";
  }
};