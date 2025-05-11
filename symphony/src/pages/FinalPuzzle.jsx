// import { useState, useEffect, useContext } from 'react';
// import { Clock, BookOpen, HelpCircle, Code, ArrowRight, ArrowLeft } from 'lucide-react';
// import { useNavigate, Link } from 'react-router-dom';
// import { GameContext } from '../GameContext';
// import { executeQuery, fetchPuzzle } from '../api';
// import QueryResults from '../components/QueryResults';
// import StoryBox from '../components/StoryBox';
// import RiddleComponent from '../components/RiddleComponent';
// import SQLQueryInterface from '../components/SQLQueryInterface';
// import Notebook from '../components/Notebook';
// import GameProgressBar from '../components/GameProgressBar';

// export default function FinalPuzzle() {
//   const navigate = useNavigate();
//   const { gameTime, deductTime, addNotebookEntry, updatePuzzle, notebookEntries } = useContext(GameContext);
//   const [isNotebookOpen, setIsNotebookOpen] = useState(false);
//   const [puzzleData, setPuzzleData] = useState(null);
//   const [selectedQuery, setSelectedQuery] = useState(null);
//   const [queryResult, setQueryResult] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hasQueryExecuted, setHasQueryExecuted] = useState(false);

//   useEffect(() => {
//     const loadPuzzle = async () => {
//       try {
//         const data = await fetchPuzzle('final'); // Or 4, depending on your backend route
//         setPuzzleData(data);
//       } catch (err) {
//         setError(err.message || 'Failed to load final puzzle data.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadPuzzle();
//   }, []);

//   const handleQuerySelect = (queryText) => setSelectedQuery(queryText);

//   const handleExecuteQuery = async () => {
//     if (!selectedQuery) return alert('Please select a query.');

//     setQueryResult({ loading: true, data: null, error: null });
//     setHasQueryExecuted(true);
//     try {
//       const result = await executeQuery(selectedQuery, 'final'); // Or 4
//       setQueryResult({ loading: false, data: result, error: null });

//       if (result?.notebookUpdate) {
//         addNotebookEntry({
//           title: `Final Puzzle – Symphony Key`,
//           content: result.notebookUpdate,
//         });
//       }

//       if (result?.timePenalty) {
//         deductTime(result.timePenalty);
//       }

//       if (!result?.table || result.table.length === 0) {
//         alert('No data fetched for this query.');
//       }
//     } catch (err) {
//       setQueryResult({ loading: false, data: null, error: err.message });
//       deductTime(30);
//     }
//   };

//   const handleProceed = () => {
//     navigate('/end-game'); // Navigate to the end game page irrespective of the query
//   };

//   const formatTime = (minutes) => {
//     const hours = Math.floor(minutes / 60);
//     const mins = minutes % 60;
//     return `${hours}:${mins < 10 ? '0' + mins : mins}`;
//   };

//   if (loading) return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading Final Puzzle...</div>;
//   if (error) return <div className="min-h-screen bg-gray-900 text-red-500 flex items-center justify-center">Error loading Final Puzzle: {error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
//       <div className="bg-gray-800 border-b border-gray-700 py-3 px-6 flex justify-between items-center">
//         <div className="flex items-center">
//           <Link to="/puzzle/3" className="flex items-center text-gray-400 hover:text-gray-300 mr-6">
//             <ArrowLeft className="w-5 h-5 mr-1" />
//             <span className="text-sm">Back to Puzzle 3</span>
//           </Link>
//           <h1 className="text-xl font-medium text-white">{puzzleData?.title || '🎼 Final Puzzle – Riddle Lock on Symphony Database'}</h1>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
//             <Clock className="w-4 h-4 text-indigo-300 mr-2" />
//             <span className="text-white font-medium">{formatTime(gameTime)}</span>
//           </div>
//           <button
//             onClick={() => setIsNotebookOpen(!isNotebookOpen)}
//             className={`flex items-center px-3 py-1 rounded-full transition-colors ${
//               isNotebookOpen ? 'bg-indigo-700 text-white' : 'bg-gray-700 text-gray-300'
//             }`}
//           >
//             <BookOpen className="w-4 h-4 mr-2" />
//             Notebook
//           </button>
//         </div>
//       </div>

//       <div className="flex min-h-[calc(100vh-56px)]">
//         <div className={`flex-grow transition-all ${isNotebookOpen ? 'mr-80' : ''} p-6`}>
//           <GameProgressBar current={4} total={4} />
//           <div className="space-y-6 mt-4">
//             {puzzleData?.riddle && (
//               <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//                 <h3 className="text-lg font-medium text-yellow-300 mb-2 flex items-center">
//                   <HelpCircle className="w-5 h-5 mr-2" />
//                   Riddle
//                 </h3>
//                 <p className="text-gray-300 italic mb-3">{puzzleData.riddle}</p>
//                 {puzzleData?.clue && <p className="text-gray-300 mb-3">Clue: {puzzleData.clue}</p>}
//               </div>
//             )}

//             {puzzleData?.queries && (
//               <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//                 <h3 className="text-lg font-medium text-indigo-300 mb-2 flex items-center">
//                   <Code className="w-5 h-5 mr-2" />
//                   SQL Query Interface
//                 </h3>
//                 <p className="text-gray-400 text-sm mb-3">
//                   Unlock the symphony's secret with the correct SQL query.
//                 </p>
//                 <SQLQueryInterface
//                   queries={puzzleData.queries.map(q => q.text)}
//                   onQuerySelect={handleQuerySelect}
//                 />
//                 <div className="mt-4 flex justify-end">
//                   <button
//                     onClick={handleExecuteQuery}
//                     className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg flex items-center"
//                   >
//                     Execute Query <ArrowRight className="w-4 h-4 ml-2" />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {queryResult && <QueryResults result={queryResult} />}

//             {hasQueryExecuted && (
//               <div className="mt-6 flex justify-end">
//                 <button
//                   onClick={handleProceed}
//                   className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
//                 >
//                   Proceed to End <ArrowRight className="w-4 h-4 ml-2" />
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <Notebook isOpen={isNotebookOpen} entries={notebookEntries} />
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useContext } from 'react';
import { BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../GameContext'; 
import { updatePuzzle } from '../api';

const FinalPuzzle = () => {
    const navigate = useNavigate();
    const { gameTime, notebookEntries, updatePuzzle } = useContext(GameContext);
    const [isNotebookOpen, setIsNotebookOpen] = useState(false);
    const [selectedSuspects, setSelectedSuspects] = useState({
        puzzle1: null,
        puzzle2: null,
        puzzle3: null,
    });
    const [isSelectionCorrect, setIsSelectionCorrect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [finalNarrative, setFinalNarrative] = useState('');
    const [error, setError] = useState(null); // Added state for error handling

    // Suspect options for each puzzle, based on the PDF
    const suspectOptions = {
        puzzle1: [
            { name: 'Lydia Crane, due to her unusual re-entry.', value: 'lydiaCrane' },
            { name: 'P1100, based on the later, unrecorded access.', value: 'p1100_phantom' },
            { name: 'Axel Borne, as he accessed the vault biometrically.', value: 'axelBorne' },
            { name: 'Grace Tanaka, given her unrestricted access.', value: 'graceTanaka' },
        ],
        puzzle2: [
            { name: 'Axel Borne, the audio technician assigned to the CCTV console.', value: 'axelBorne' },
            { name: 'Marcus Bell, the anxious stage manager seen near the Main Lobby.', value: 'marcusBell' },
            { name: 'Lydia Crane, perhaps trying to hide her movements.', value: 'lydiaCrane' },
            { name: 'P1100, if they somehow manipulated the system remotely.', value: 'p1100_phantom' },
        ],
        puzzle3: [
            { name: 'P1100, acting alone.', value: 'p1100' },
            { name: 'Grace Tanaka, who entered Room R-03 after P1100.', value: 'graceTanaka' },
            { name: 'Axel Borne, with his access to backstage systems.', value: 'axelBorne_tech' },
            { name: 'Marcus Bell, overseeing backstage personnel.', value: 'marcusBell' },
        ],
    };

    // Function to handle suspect selection
    const handleSuspectSelect = (puzzle, suspectValue) => {
        setSelectedSuspects((prev) => ({
            ...prev,
            [puzzle]: suspectValue,
        }));
    };

    // Function to check the final answer
    const handleCheckAnswer = async () => {
        setLoading(true);
        const correctAnswers = {
            puzzle1: 'lydiaCrane',
            puzzle2: 'axelBorne',
            puzzle3: 'p1100',
        };

        if (
            selectedSuspects.puzzle1 &&
            selectedSuspects.puzzle2 &&
            selectedSuspects.puzzle3
        ) {
            const isCorrect =
                selectedSuspects.puzzle1 === correctAnswers.puzzle1 &&
                selectedSuspects.puzzle2 === correctAnswers.puzzle2 &&
                selectedSuspects.puzzle3 === correctAnswers.puzzle3;

            setIsSelectionCorrect(isCorrect);

            try {
                const narrative = isCorrect
                    ? "Detective, your deductions have been flawless. You've successfully identified Lydia Crane, Axel Borne, and P1100 as the key figures in this intricate scheme. The Symphony of the Spheres has been recovered, and justice prevails. Case Closed."
                    : "Detective, your investigation has hit a snag. While some of your deductions show promise, crucial errors have led you down the wrong path. The true culprits remain at large, and the Symphony of the Spheres is still missing. The case remains open...";

                setFinalNarrative(narrative);
                if (isCorrect) {
                    updatePuzzle(null);
                }
            } catch (error) {
                console.error("Error fetching final narrative:", error);
                setError("Failed to fetch final results.");
            } finally {
                setLoading(false);
            }
        } else {
            alert('Please select a suspect for all three puzzles.');
            setLoading(false);
        }
    };

    const formatTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}:${mins < 10 ? '0' + mins : mins}`;
    };

    const handleProceed = () => {
        if (isSelectionCorrect !== null) {
            navigate('/end-game');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
            <div className="bg-gray-800 border-b border-gray-700 py-3 px-6 flex justify-between items-center">
                <h1 className="text-xl font-medium text-white">Final Puzzle: The Culprits</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-indigo-300 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 18a6 6 0 100-12 6 6 0 000 12z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-white font-medium">{formatTime(gameTime)}</span>
                    </div>
                    <button
                        onClick={() => setIsNotebookOpen(!isNotebookOpen)}
                        className={`flex items-center px-3 py-1 rounded-full transition-colors ${isNotebookOpen ? 'bg-indigo-700 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Notebook
                    </button>
                </div>
            </div>

            <div className={`flex min-h-[calc(100vh-56px)]`}>
                <div
                    className={`flex-grow transition-all ${isNotebookOpen ? 'mr-80' : ''} p-6 space-y-6`}
                >
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h2 className="text-xl font-semibold text-indigo-300 mb-4">
                            Identify the Culprits
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Detective, based on your investigation, select the most likely
                            culprit for each puzzle. Use your notebook to review the clues.
                        </p>

                        {/* Puzzle 1 Selection */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-300 mb-2">
                                Puzzle 1: Who accessed the vault last?
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {suspectOptions.puzzle1.map((suspect) => (
                                    <button
                                        key={suspect.value}
                                        onClick={() => handleSuspectSelect('puzzle1', suspect.value)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedSuspects.puzzle1 === suspect.value
                                            ? 'bg-indigo-700 text-white'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                            }`}
                                    >
                                        {suspect.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Puzzle 2 Selection */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-300 mb-2">
                                Puzzle 2: Who corrupted the footage?
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {suspectOptions.puzzle2.map((suspect) => (
                                    <button
                                        key={suspect.value}
                                        onClick={() => handleSuspectSelect('puzzle2', suspect.value)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedSuspects.puzzle2 === suspect.value
                                            ? 'bg-indigo-700 text-white'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                            }`}
                                    >
                                        {suspect.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Puzzle 3 Selection */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-300 mb-2">
                                Puzzle 3: Who was backstage with the unknown entity?
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {suspectOptions.puzzle3.map((suspect) => (
                                    <button
                                        key={suspect.value}
                                        onClick={() => handleSuspectSelect('puzzle3', suspect.value)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedSuspects.puzzle3 === suspect.value
                                            ? 'bg-indigo-700 text-white'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                            }`}
                                    >
                                        {suspect.name}
                                     </button>
                                 ))}
                            </div>
                        </div>

                        {/* Check Answer Button */}
                        <div className="mt-6">
                            <button
                                onClick={handleCheckAnswer}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center"
                                disabled={loading}
                            >
                                {loading ? (
                                    'Checking...'
                                ) : (
                                    'Check Answer'
                                )}
                            </button>
                        </div>

                        {/* Display result and narrative */}
                        {isSelectionCorrect !== null && (
                            <div className="mt-6 p-4 rounded-lg border">
                                {isSelectionCorrect ? (
                                    <>
                                        <div className="flex items-center gap-2 text-green-500 mb-2">
                                            <CheckCircle className="w-5 h-5" />
                                            <h4 className="font-semibold">Correct!</h4>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                                            {finalNarrative}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-2 text-red-500 mb-2">
                                            <XCircle className="w-5 h-5" />
                                            <h4 className="font-semibold">Incorrect.</h4>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                                            {finalNarrative}
                                        </p>
                                    </>
                                )}
                                {isSelectionCorrect !== null && (
                                    <div className="mt-6">
                                        <button
                                            onClick={handleProceed}
                                            className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center"
                                        >
                                            Proceed to End Game
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                        {error && (
                            <div className="mt-4 text-red-500">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className={`w-80 bg-gray-700 border-l border-gray-600 fixed top-0 bottom-0 right-0 p-6 overflow-y-auto transition-transform duration-300 transform ${isNotebookOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-indigo-300">
                            Detective's Notebook
                        </h2>
                        <button
                            onClick={() => setIsNotebookOpen(false)}
                            className="text-gray-400 hover:text-gray-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 011.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    {notebookEntries.length > 0 ? (
                        <ul className="space-y-2">
                            {notebookEntries.map((entry, index) => (
                                <li
                                    key={index}
                                    className="text-gray-400 text-sm border-b border-gray-600 pb-2"
                                >
                                    {entry}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-sm">No entries yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FinalPuzzle;


// import React, { useState, useEffect, useContext } from 'react';
// import { BookOpen, CheckCircle, XCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { GameContext } from '../GameContext';
// import { updatePuzzle } from '../api'; // Assuming you have an API utility

// const FinalPuzzle = () => {
//     const navigate = useNavigate();
//     const { gameTime, notebookEntries, updatePuzzle } = useContext(GameContext);
//     const [isNotebookOpen, setIsNotebookOpen] = useState(false);
//     const [selectedSuspects, setSelectedSuspects] = useState({
//         puzzle1: null,
//         puzzle2: null,
//         puzzle3: null,
//     });
//     const [isSelectionCorrect, setIsSelectionCorrect] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [finalNarrative, setFinalNarrative] = useState('');
//     const [error, setError] = useState(null);
//     const [puzzleData, setPuzzleData] = useState({});

//     useEffect(() => {
//         const fetchFinalPuzzleData = async () => {
//             try {
//                 const response = await fetch('/api/finalPuzzle/final-puzzle-data');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setPuzzleData(data);
//             } catch (error) {
//                 console.error("Error fetching final puzzle data:", error);
//                 setError("Failed to load final puzzle information.");
//             }
//         };

//         fetchFinalPuzzleData();
//     }, []);

//     const handleSuspectSelect = (puzzleId, suspectValue) => {
//         setSelectedSuspects((prev) => ({
//             ...prev,
//             [`puzzle${puzzleId}`]: suspectValue,
//         }));
//     };

//     const handleCheckAnswer = async () => {
//         setLoading(true);
//         const correctAnswers = {
//             1: 'lydiaCrane',
//             2: 'axelBorne',
//             3: 'p1100',
//         };

//         if (
//             selectedSuspects.puzzle1 &&
//             selectedSuspects.puzzle2 &&
//             selectedSuspects.puzzle3
//         ) {
//             const isCorrect =
//                 selectedSuspects.puzzle1 === correctAnswers[1] &&
//                 selectedSuspects.puzzle2 === correctAnswers[2] &&
//                 selectedSuspects.puzzle3 === correctAnswers[3];

//             setIsSelectionCorrect(isCorrect);

//             try {
//                 const narrative = isCorrect
//                     ? "Detective, your deductions have been flawless. You've successfully identified Lydia Crane, Axel Borne, and P1100 as the key figures in this intricate scheme. The Symphony of the Spheres has been recovered, and justice prevails. Case Closed."
//                     : "Detective, your investigation has hit a snag. While some of your deductions show promise, crucial errors have led you down the wrong path. The true culprits remain at large, and the Symphony of the Spheres is still missing. The case remains open...";

//                 setFinalNarrative(narrative);
//                 if (isCorrect) {
//                     updatePuzzle(null);
//                 }
//             } catch (error) {
//                 console.error("Error fetching final narrative:", error);
//                 setError("Failed to fetch final results.");
//             } finally {
//                 setLoading(false);
//             }
//         } else {
//             alert('Please select a suspect for all three puzzles.');
//             setLoading(false);
//         }
//     };

//     const formatTime = (minutes) => {
//         const hours = Math.floor(minutes / 60);
//         const mins = minutes % 60;
//         return `${hours}:${mins < 10 ? '0' + mins : mins}`;
//     };

//     const handleProceed = () => {
//         if (isSelectionCorrect !== null) {
//             navigate('/end-game');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
//             <div className="bg-gray-800 border-b border-gray-700 py-3 px-6 flex justify-between items-center">
//                 <h1 className="text-xl font-medium text-white">Final Puzzle: The Culprits</h1>
//                 <div className="flex items-center gap-4">
//                     <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                             className="w-4 h-4 text-indigo-300 mr-2"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 18a6 6 0 100-12 6 6 0 000 12z"
//                                 clipRule="evenodd"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 d="M12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                         <span className="text-white font-medium">{formatTime(gameTime)}</span>
//                     </div>
//                     <button
//                         onClick={() => setIsNotebookOpen(!isNotebookOpen)}
//                         className={`flex items-center px-3 py-1 rounded-full transition-colors ${isNotebookOpen ? 'bg-indigo-700 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
//                     >
//                         <BookOpen className="w-4 h-4 mr-2" />
//                         Notebook
//                     </button>
//                 </div>
//             </div>

//             <div className={`flex min-h-[calc(100vh-56px)]`}>
//                 <div
//                     className={`flex-grow transition-all ${isNotebookOpen ? 'mr-80' : ''} p-6 space-y-6`}
//                 >
//                     <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
//                         <h2 className="text-xl font-semibold text-indigo-300 mb-4">
//                             Final Puzzle: Identify the Culprits
//                         </h2>
//                         <p className="text-gray-400 leading-relaxed mb-4">
//                             Detective, based on your investigation, select the most likely
//                             culprit for each puzzle. Use your notebook to review the clues.
//                         </p>

//                         {Object.keys(puzzleData).sort().map((puzzleId) => (
//                             <div key={puzzleId} className="mb-4">
//                                 <h3 className="text-lg font-semibold text-gray-300 mb-2">
//                                     {puzzleData[puzzleId]?.question || `Puzzle ${puzzleId}: Select the culprit`}
//                                 </h3>
//                                 <div className="flex flex-wrap gap-4">
//                                     {puzzleData[puzzleId]?.options?.map((suspect) => (
//                                         <button
//                                             key={suspect.value}
//                                             onClick={() => handleSuspectSelect(parseInt(puzzleId), suspect.value)}
//                                             className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedSuspects[`puzzle${puzzleId}`] === suspect.value
//                                                 ? 'bg-indigo-700 text-white'
//                                                 : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                                                 }`}
//                                         >
//                                             {suspect.name}
//                                         </button>
//                                     ))}
//                                     {!puzzleData[puzzleId]?.options && (
//                                         <p className="text-gray-500">Loading options...</p>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Check Answer Button */}
//                         <div className="mt-6">
//                             <button
//                                 onClick={handleCheckAnswer}
//                                 className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center"
//                                 disabled={loading || Object.keys(puzzleData).length < 3}
//                             >
//                                 {loading ? (
//                                     'Checking...'
//                                 ) : (
//                                     'Check Answer'
//                                 )}
//                             </button>
//                         </div>

//                         {/* Display result and narrative */}
//                         {isSelectionCorrect !== null && (
//                             <div className="mt-6 p-4 rounded-lg border">
//                                 {isSelectionCorrect ? (
//                                     <>
//                                         <div className="flex items-center gap-2 text-green-500 mb-2">
//                                             <CheckCircle className="w-5 h-5" />
//                                             <h4 className="font-semibold">Correct!</h4>
//                                         </div>
//                                         <p className="text-gray-400 leading-relaxed whitespace-pre-line">
//                                             {finalNarrative}
//                                         </p>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <div className="flex items-center gap-2 text-red-500 mb-2">
//                                             <XCircle className="w-5 h-5" />
//                                             <h4 className="font-semibold">Incorrect.</h4>
//                                         </div>
//                                         <p className="text-gray-400 leading-relaxed whitespace-pre-line">
//                                             {finalNarrative}
//                                         </p>
//                                     </>
//                                 )}
//                                 {isSelectionCorrect !== null && (
//                                     <div className="mt-6">
//                                         <button
//                                             onClick={handleProceed}
//                                             className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center"
//                                         >
//                                             Proceed to End Game
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                         {error && (
//                             <div className="mt-4 text-red-500">
//                                 {error}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <div
//                     className={`w-80 bg-gray-700 border-l border-gray-600 fixed top-0 bottom-0 right-0 p-6 overflow-y-auto transition-transform duration-300 transform ${isNotebookOpen ? 'translate-x-0' : 'translate-x-full'}`}
//                 >
//                     <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-lg font-semibold text-indigo-300">
//                             Detective's Notebook
//                         </h2>
//                         <button
//                             onClick={() => setIsNotebookOpen(false)}
//                             className="text-gray-400 hover:text-gray-300"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                                 className="w-5 h-5"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 011.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                     {notebookEntries.length > 0 ? (
//                         <ul className="space-y-2">
//                             {notebookEntries.map((entry, index) => (
//                                 <li
//                                     key={index}
//                                     className="text-gray-400 text-sm border-b border-gray-600 pb-2"
//                                 >
//                                     {entry}
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-gray-500 text-sm">No entries yet.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FinalPuzzle;