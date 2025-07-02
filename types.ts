
export enum GameState {
  START,
  LOADING,
  PLAYING,
  ERROR,
}

export interface StorySegment {
  scene: string;
  choices: string[];
  clue?: string;
}

export interface HistoryItem {
    id: number;
    type: 'scene' | 'choice';
    text: string;
}
