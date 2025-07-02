
import React from 'react';

interface CluePanelProps {
  clues: string[];
}

const ClueIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 inline-block text-amber-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-4V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);


const CluePanel: React.FC<CluePanelProps> = ({ clues }) => {
  return (
    <div className="bg-amber-50 bg-opacity-90 p-6 rounded-lg shadow-inner border border-amber-700/50 w-full md:w-80 lg:w-96">
      <h2 className="font-serif-display text-2xl font-bold text-stone-800 border-b-2 border-amber-700/50 pb-2 mb-4">Pistas e Evidências</h2>
      {clues.length === 0 ? (
        <p className="text-stone-600 italic">Nenhuma pista coletada ainda. Fique de olhos abertos.</p>
      ) : (
        <ul className="space-y-3">
          {clues.map((clue, index) => (
            <li key={index} className="text-stone-700 leading-relaxed flex items-start">
              <ClueIcon />
              <span>{clue}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CluePanel;