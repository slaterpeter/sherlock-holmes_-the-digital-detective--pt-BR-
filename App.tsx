import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState } from '@/types';
import type { HistoryItem } from '@/types';
import { getInitialScene, getNextScene } from '@/services/geminiService';
import LoadingSpinner from '@/components/LoadingSpinner';
import CluePanel from '@/components/CluePanel';

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.START);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [choices, setChoices] = useState<string[]>([]);
    const [clues, setClues] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const storyContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (storyContainerRef.current) {
            storyContainerRef.current.scrollTop = storyContainerRef.current.scrollHeight;
        }
    }, [history]);
    
    const startGame = useCallback(async () => {
        setGameState(GameState.LOADING);
        setError(null);
        setHistory([]);
        setChoices([]);
        setClues([]);
        try {
            const initialSegment = await getInitialScene();
            setHistory([{ id: Date.now(), type: 'scene', text: initialSegment.scene }]);
            setChoices(initialSegment.choices);
            if (initialSegment.clue) {
                setClues([initialSegment.clue]);
            }
            setGameState(GameState.PLAYING);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'Um erro desconhecido ocorreu.');
            setGameState(GameState.ERROR);
        }
    }, []);

    const handleChoice = useCallback(async (choice: string) => {
        setGameState(GameState.LOADING);
        const newHistory : HistoryItem[] = [...history, { id: Date.now(), type: 'choice', text: choice }];
        setHistory(newHistory);
        setChoices([]);

        const storyContext = history.map(h => `${h.type === 'scene' ? 'Cena:' : 'Minha Escolha:'} ${h.text}`).join('\n');

        try {
            const nextSegment = await getNextScene(storyContext, choice);
            setHistory(prev => [...prev, { id: Date.now(), type: 'scene', text: nextSegment.scene }]);
            setChoices(nextSegment.choices);
            if (nextSegment.clue) {
                setClues(prev => [...prev, nextSegment.clue!]);
            }
            setGameState(GameState.PLAYING);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'A narrativa encontrou um obstáculo.');
            setGameState(GameState.ERROR);
        }
    }, [history]);

    const renderContent = () => {
        // This variable is defined outside the switch to avoid TypeScript type narrowing issues.
        const isLoading = gameState === GameState.LOADING;

        switch (gameState) {
            case GameState.START:
                return (
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold font-serif-display text-amber-100 drop-shadow-lg mb-4">Sherlock Holmes</h1>
                        <h2 className="text-2xl md:text-3xl font-serif-display text-amber-200 mb-8">O Detetive Digital</h2>
                        <p className="max-w-2xl mx-auto mb-10 text-amber-100/80">
                            Uma névoa espessa paira sobre as ruas iluminadas a gás de Londres, e um novo mistério aguarda em 221B Baker Street. O jogo começou!
                        </p>
                        <button
                            onClick={startGame}
                            className="bg-amber-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                        >
                            Começar a Investigação
                        </button>
                    </div>
                );
            case GameState.LOADING:
                 return (
                    <>
                        <div ref={storyContainerRef} className="flex-grow w-full space-y-6 overflow-y-auto pr-4 mb-6">
                            {renderHistory()}
                        </div>
                        <LoadingSpinner />
                    </>
                );
            case GameState.PLAYING:
                 return (
                    <>
                        <div ref={storyContainerRef} className="flex-grow w-full space-y-6 overflow-y-auto pr-4 mb-6 custom-scrollbar">
                           {renderHistory()}
                        </div>
                        <div className="w-full flex-shrink-0">
                           <h3 className="font-serif-display text-xl text-amber-200 mb-4">O que você fará?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {choices.map((choice, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleChoice(choice)}
                                        disabled={isLoading}
                                        className="bg-stone-700/80 border border-amber-700/60 text-amber-100 p-4 rounded-lg hover:bg-amber-800 hover:border-amber-500 transition-all duration-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {choice}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                );
            case GameState.ERROR:
                 return (
                    <div className="text-center p-8 bg-red-900/50 border border-red-500 rounded-lg">
                        <h2 className="text-3xl font-serif-display text-red-200 mb-4">Um Beco Sem Saída!</h2>
                        <p className="text-red-200/90 mb-6">{error}</p>
                        <button
                            onClick={startGame}
                            className="bg-amber-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-700 transition-colors"
                        >
                            Começar um Novo Caso
                        </button>
                    </div>
                );
        }
    };
    
    const renderHistory = () => {
        return history.map(item => (
            <div key={item.id} className={`p-4 rounded-lg animate-fade-in ${item.type === 'scene' ? 'bg-black/20' : 'bg-amber-900/30 text-right ml-auto max-w-xl'}`}>
                {item.type === 'scene' ? (
                     <p className="font-serif text-lg text-amber-100/90 leading-relaxed whitespace-pre-wrap">{item.text}</p>
                ) : (
                    <p className="font-serif text-md italic text-amber-200/80">Você decidiu: "{item.text}"</p>
                )}
            </div>
        ));
    };


    return (
        <div className="bg-stone-900 text-amber-100 min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #44403c; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #d97706; border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #b45309; }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
            `}</style>
            <main className="w-full max-w-7xl flex flex-col md:flex-row gap-8 flex-grow">
                {/* Left/Main Panel for Story */}
                <div className="flex-grow flex flex-col bg-stone-800/50 p-6 rounded-lg shadow-2xl border border-amber-900/50">
                   {renderContent()}
                </div>

                {/* Right Panel for Clues */}
                {gameState !== GameState.START && (
                    <aside className="w-full md:w-auto md:flex-shrink-0 animate-fade-in">
                        <CluePanel clues={clues} />
                    </aside>
                )}
            </main>
            <footer className="text-center p-4 text-amber-600/70 text-sm mt-auto">
                Um mistério da Agência de Detetives Digitais. Por Peter Slater. 
            </footer>
        </div>
    );
};

export default App;