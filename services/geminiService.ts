import { GoogleGenAI } from "@google/genai";
import type { StorySegment } from "@/types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = "gemini-2.5-flash-preview-04-17";

const systemInstruction = `Você é o narrador de um jogo de mistério de Sherlock Holmes. Você descreverá cenas e eventos em um estilo literário rico da era vitoriana, reminiscente de Sir Arthur Conan Doyle. O jogador é Sherlock Holmes.
- Seu objetivo é apresentar um mistério envolvente.
- Ao final de cada resposta, você DEVE fornecer exatamente 3 escolhas distintas para o jogador fazer.
- Você DEVE formatar sua resposta como um objeto JSON válido.
- O objeto JSON deve ter duas chaves: "scene" (uma string com a narrativa) e "choices" (um array de 3 strings).
- Se uma cena revelar uma nova evidência, inclua uma terceira chave: "clue" (uma string descrevendo a pista de forma concisa). Não inclua a chave "clue" se nenhuma nova evidência for encontrada.
- O mistério deve ser solucionável em 10-15 passos.
`;

const parseJsonResponse = (text: string): StorySegment | null => {
    let jsonStr = text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
        jsonStr = match[2].trim();
    }

    try {
        const parsedData = JSON.parse(jsonStr);
        if (parsedData.scene && Array.isArray(parsedData.choices) && parsedData.choices.length > 0) {
            return parsedData as StorySegment;
        }
        return null;
    } catch (e) {
        console.error("Failed to parse JSON response:", e);
        console.error("Original text:", text);
        return null;
    }
};


export const getInitialScene = async (): Promise<StorySegment> => {
    const prompt = "Comece um novo mistério. Um novo cliente acaba de chegar em 221B Baker Street. Descreva o cliente e seu problema para Sherlock Holmes (o jogador). Crie uma cena de abertura envolvente.";
    
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            systemInstruction,
            responseMimeType: "application/json",
            temperature: 0.8,
            topK: 40,
        },
    });

    const storySegment = parseJsonResponse(response.text || "");
    if (!storySegment) {
        throw new Error("Failed to get a valid initial scene from the API.");
    }
    return storySegment;
};

export const getNextScene = async (currentHistory: string, choice: string): Promise<StorySegment> => {
    const prompt = `A história até agora é: \n---\n${currentHistory}\n---\nSherlock Holmes (o jogador) escolheu: "${choice}". O que acontece a seguir? Descreva a cena e forneça as próximas 3 escolhas.`;
    
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            systemInstruction,
            responseMimeType: "application/json",
            temperature: 0.8,
            topK: 40,
        },
    });

    const storySegment = parseJsonResponse(response.text || "");
    if (!storySegment) {
        throw new Error("Failed to get a valid next scene from the API.");
    }
    return storySegment;
};