// // const { Sequelize } = require('sequelize');
// // const db = require('../config/db');

// // const queryController = {
// //   executeQuery: async (req, res) => {
// //     const { query } = req.body;
// //     const currentPuzzle = req.body.currentPuzzle; // You'll need to send this from the frontend
// //     const currentBranch = req.body.currentBranch; // Optional

// //     let expectedResult;
// //     let notebookUpdate;
// //     let nextPuzzle;
// //     let branchPath;
// //     let timePenalty = 0;

// //     // Define logic to match the incoming query with expected outcomes
// //     // based on the current puzzle and branch. This will likely involve
// //     // checking against predefined correct and incorrect queries and their effects.

// //     // Example (very basic and needs to be expanded significantly):
// //     if (currentPuzzle === 1 && query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
// //       expectedResult = [{ person_id: 'P1002', access_count: 2 }];

// //       notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
// //       nextPuzzle = 2;
// //     } else if (currentPuzzle === 1 && query.includes("biometric")) {
// //       expectedResult = [{ access_id: 101, person_id: 'P1033' }];
// //       timePenalty = 30;
// //     } else if (currentPuzzle === 1 && query.includes("access_time > '2025-04-29 14:00:00'")) {
// //       expectedResult = [{ access_id: 104, person_id: 'P1100' }];
// //       branchPath = '/puzzle/1/forgery';
// //     } else {
// //       timePenalty = 30; // Default penalty for incorrect query
// //     }

// //     if (expectedResult) {
// //       res.json({ resultText: 'Query executed successfully.', table: expectedResult, notebookUpdate, next: nextPuzzle, branch: branchPath, timePenalty });
// //     } else {
// //       res.status(400).json({ error: 'Incorrect query or no specific outcome defined.', timePenalty });
// //     }

// //     // In a real application, you would use Sequelize to execute the
// //     // provided query against your SQL database and then determine
// //     // the game consequences based on the actual results.
// //     // The 'expectedResult' logic above is a placeholder for your game logic.
// //   },
// // };

// // module.exports = queryController;
// // const { Sequelize } = require('sequelize');
// // const db = require('../config/db'); // your Sequelize instance

// // const queryController = {
// //   executeQuery: async (req, res) => {
// //     const { query, currentPuzzle, currentBranch } = req.body;

// //     let notebookUpdate;
// //     let nextPuzzle;
// //     let branchPath;
// //     let timePenalty = 0;

// //     try {
// //       // 🧠 Execute the query from frontend
// //       const [results, metadata] = await db.query(query);

// //       // ✅ Logic based on actual query
// //       if (currentPuzzle === 1 && query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
// //         const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
// //         if (lydia) {
// //           notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
// //           nextPuzzle = 2;
// //         }
// //       } else if (currentPuzzle === 1 && query.includes("biometric")) {
// //         timePenalty = 30;
// //       } else if (currentPuzzle === 1 && query.includes("access_time > '2025-04-29 14:00:00'")) {
// //         const match = results.find(row => row.person_id === 'P1100');
// //         if (match) {
// //           branchPath = '/puzzle/1/forgery';
// //         }
// //       } else {
// //         timePenalty = 30; // default penalty
// //       }

// //       res.json({
// //         resultText: 'Query executed successfully.',
// //         table: results,
// //         notebookUpdate,
// //         next: nextPuzzle,
// //         branch: branchPath,
// //         timePenalty
// //       });

// //     } catch (err) {
// //       console.error('Query error:', err);
// //       res.status(400).json({ error: 'Query execution failed. Please check your SQL syntax.', timePenalty: 30 });
// //     }
// //   }
// // };
// // module.exports = queryController;

// // const { Sequelize } = require('sequelize');
// // const db = require('../config/db'); // your Sequelize instance

// // const queryController = {
// //   executeQuery: async (req, res) => {
// //     const { query, currentPuzzle, currentBranch } = req.body;

// //     let notebookUpdate;
// //     let nextPuzzle;
// //     let branchPath;
// //     let timePenalty = 0;

// //     try {
// //       // 🧠 Execute the query from frontend
// //       const [results, metadata] = await db.query(query);

// //       // ✅ Logic based on actual query
// //       if (currentPuzzle === 1 && query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
// //         const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
// //         if (lydia) {
// //           notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
// //           nextPuzzle = 2;
// //         }
// //       } else if (currentPuzzle === 1 && query.includes("biometric")) {
// //         timePenalty = 30;
// //       } else if (currentPuzzle === 1 && query.includes("access_time > '2025-04-29 14:00:00'")) {
// //         // If the query includes the time condition, navigate to the forgery branch
// //         branchPath = '/puzzle/1/forgery';
// //       } else {
// //         timePenalty = 30; // default penalty
// //       }

// //       res.json({
// //         resultText: 'Query executed successfully.',
// //         table: results,
// //         notebookUpdate,
// //         next: nextPuzzle,
// //         branch: branchPath,
// //         timePenalty
// //       });

// //     } catch (err) {
// //       console.error('Query error:', err);
// //       res.status(400).json({ error: 'Query execution failed. Please check your SQL syntax.', timePenalty: 30 });
// //     }
// //   }
// // };
// // module.exports = queryController;

// // const { Sequelize } = require('sequelize');
// // const db = require('../config/db'); // your Sequelize instance

// // const queryController = {
// //   executeQuery: async (req, res) => {
// //   console.log('Full req.body:', req.body);
// //     const { query, currentPuzzle, currentBranch } = req.body;

// //     let notebookUpdate;
// //     let nextPuzzle;
// //     let branchPath;
// //     let timePenalty = 0;
// //     let isCorrect = false;
// //     let isMisleading = false;

// //     try {
// //       // 🧠 Execute the query from frontend
// //       const [results, metadata] = await db.query(query);

// //       // ✅ Logic for Puzzle 1
// //       if (currentPuzzle === 1) {
// //         if (query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
// //           const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
// //           if (lydia) {
// //             notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
// //             nextPuzzle = 2;
// //             isCorrect = true;
// //           }
// //         } else if (query.includes("biometric")) {
// //           timePenalty = 30;
// //         } else if (query.includes("access_time > '2025-04-29 14:00:00'")) {
// //           branchPath = '/puzzle/1/forgery';
// //           isMisleading = true; // Assuming this leads to a false lead initially
// //         } else {
// //           timePenalty = 30; // default penalty for other incorrect queries
// //         }
// //       }
// //       // ✅ Logic for Puzzle 2
// //       else if (currentPuzzle === 2) {
// //         if (
// //           query.includes("security_logs") &&
// //           query.includes("device_registry") &&
// //           query.includes("personnel") &&
// //           query.includes("'P1033'") &&
// //           query.includes("'footage corrupted'")
// //         ) {
// //           const axel = results.find(row => row.name && row.event_type === 'footage corrupted' && row.location);
// // console.log('Query results:', results); // <--- Inspect the results
// // console.log('Axel found:', axel); 
// //           if (axel) {
// //             notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious.';
// //             nextPuzzle = 3;
// //             isCorrect = true;
// //           } else {
// //             timePenalty = 30; // Correct query structure but no matching data
// //           }
// //         } else if (query.includes("security_logs") && query.includes("'login'")) {
// //           timePenalty = 30;
// //         } else if (
// //           query.includes("device_registry") &&
// //           query.includes("security_logs") &&
// //           query.includes("'Main Lobby'") &&
// //           query.includes("'footage corrupted'")
// //         ) {
// //           branchPath = '/puzzle/2/stage-left';
// //           isMisleading = true;
// //         } else {
// //           timePenalty = 30; // Default for other incorrect queries in puzzle 2
// //         }
// //       }
// //       // Add logic for handling queries within branches of Puzzle 2 if needed
// //       else if (currentPuzzle === 2 && currentBranch === 'false_lead_marcus') {
// //         if (query.includes("TIME(sl.timestamp)") && query.includes("'P1067'") && query.includes("'footage corrupted'")) {
// //           isMisleading = true; // Reinforcing the false lead
// //           // You might want to provide specific feedback or a notebook update here
// //         } else if (query.includes("ORDER BY timestamp DESC") && query.includes("security_logs")) {
// //           timePenalty = 30; // Incorrect within the branch
// //         } else if (query.includes("GROUP BY dr.location")) {
// //           timePenalty = 30; // Incorrect within the branch
// //         } else if (query.includes("TIME()")) {
// //           // User selected the correct SQL function in the riddle
// //           // You might want to provide positive feedback here, but the navigation
// //           // should likely still depend on the subsequent query.
// //         } else {
// //           timePenalty = 30;
// //         }
// //       }

// //       res.json({
// //         resultText: 'Query executed successfully.',
// //         table: results,
// //         notebookUpdate,
// //         next: nextPuzzle,
// //         branch: branchPath,
// //         timePenalty,
// //         isCorrect,
// //         isMisleading
// //       });

// //     } catch (err) {
// //       console.error('Query error:', err);
// //       res.status(400).json({ error: 'Query execution failed. Please check your SQL syntax.', timePenalty: 30 });
// //     }
// //   }
// // };
// // module.exports = queryController;

// //shreyas version
// const { Sequelize } = require('sequelize');
// const db = require('../config/db');

// const queryController = {
//   executeQuery: async (req, res) => {
//     const { query } = req.body;
//     const currentPuzzle = req.body.currentPuzzle;
//     const currentBranch = req.body.currentBranch;

//     let expectedResult;
//     let notebookUpdate;
//     let nextPuzzle;
//     let branchPath;
//     let timePenalty = 0;

//     if (currentPuzzle === 1 && query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
//       expectedResult = [{ person_id: 'P1002', access_count: 2 }];
//       notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
//       nextPuzzle = 2;
//     } else if (currentPuzzle === 1 && query.includes("biometric")) {
//       expectedResult = [{ access_id: 101, person_id: 'P1033' }];
//       timePenalty = 30;
//     } else if (currentPuzzle === 1 && query.includes("access_time > '2025-04-29 14:00:00'")) {
//       expectedResult = [{ access_id: 104, person_id: 'P1100' }];
//       branchPath = '/puzzle/1/forgery';
//     }

//     // // ✅ Puzzle 2 Logic (Modified)
//     // else if (currentPuzzle === 2) {
//     //   if (
//     //     query.includes("SELECT p.name, sl.event_type, dr.location") &&
//     //     query.includes("FROM security_logs sl") &&
//     //     query.includes("JOIN device_registry dr ON sl.terminal_id = dr.terminal_id") &&
//     //     query.includes("JOIN personnel p ON p.person_id = 'P1033'") &&
//     //     query.includes("WHERE sl.event_type = 'footage corrupted'")
//     //   ) {
//     //     expectedResult = [
//     //       { name: 'Axel Borne', event_type: 'footage corrupted', location: 'Security Room A - Console T-03' },
//     //     ];
//     //     notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious.';
//     //     nextPuzzle = 3;
//     //   } else if (query.includes("SELECT * FROM security_logs WHERE event_type = 'login'")) {
//     //     timePenalty = 30; // Incorrect query
//     //   } else if (
//     //     query.includes("SELECT * FROM device_registry dr") &&
//     //     query.includes("JOIN security_logs sl ON dr.terminal_id = sl.terminal_id") &&
//     //     query.includes("WHERE dr.location = 'Main Lobby'") &&
//     //     query.includes("AND sl.event_type = 'footage corrupted'")
//     //   ) {
//     //     // Misleading query for Puzzle 2
//     //     expectedResult = []; // Simulate an empty result
//     //     branchPath = '/puzzle/2/stage-left';
//     //     // No nextPuzzle here, the frontend will handle navigation on "Proceed"
//     //   } else {
//     //     timePenalty = 30; // Default penalty for other incorrect queries in Puzzle 2
//     //   }
//     // } else {
//     //   timePenalty = 30; // Default penalty for incorrect puzzle context
//     // }
//     else if (currentPuzzle === 2) {
//       try {
//         const [results] = await db.query(query);
//         expectedResult = results;

//         // Check if the query is the intended correct one
//         if (
//           results.length > 0 &&
//           results.some(r =>
//             r.name === 'Axel Borne' &&
//             r.event_type === 'footage corrupted' &&
//             r.location?.includes('Security Room A')
//           )
//         ) {
//           notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious.';
//           nextPuzzle = 3;
//         } else if (query.includes("event_type = 'login'")) {
//           timePenalty = 30;
//         } else if (query.includes("Main Lobby") && query.includes("footage corrupted")) {
//           branchPath = '/puzzle/2/stage-left';
//         } else {
//           timePenalty = 30;
//         }
//       } catch (err) {
//         console.error('Query execution failed:', err);
//         return res.status(400).json({ error: 'Failed to execute query.', timePenalty: 30 });
//       }
//     }
//     if (expectedResult !== undefined) {
//       res.json({
//         resultText: 'Query executed successfully.',
//         table: expectedResult,
//         notebookUpdate,
//         next: nextPuzzle,
//         branch: branchPath,
//         timePenalty,
//       });
//     } else {
//       res.status(400).json({ error: 'Incorrect query or no specific outcome defined.', timePenalty });
//     }
//   },
// };

// module.exports = queryController;

// backend/controllers/queryController.js
// const { Sequelize } = require('sequelize');
// const db = require('../config/db');

// const queryController = {
//   executeQuery: async (req, res) => {
//     const { query } = req.body;
//     const currentPuzzle = req.body.currentPuzzle;
//     const currentBranch = req.body.currentBranch;

//     let expectedResult = []; // Initialize as an empty array
//     let notebookUpdate;
//     let nextPuzzle;
//     let branchPath;
//     let timePenalty = 0;
//     let isCorrect = false;
//     let isMisleading = false;

//     console.log('Received query data on backend:', { query, currentPuzzle, currentBranch });

//     try {
//       const [results, metadata] = await db.query(query);
//       console.log('Raw query results:', results); // Log the raw results from the database

//       if (currentPuzzle === 1) {
//         if (query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
//           const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
//           if (lydia) {
//             expectedResult = [lydia];
//             notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
//             nextPuzzle = 2;
//             isCorrect = true;
//           }
//         } else if (query.includes("biometric")) {
//           timePenalty = 30;
//         } else if (query.includes("access_time > '2025-04-29 14:00:00'")) {
//           branchPath = '/puzzle/1/forgery';
//           isMisleading = true;
//         } else {
//           timePenalty = 30;
//         }
//       }
//       //  Puzzle 2 Logic (Modified)
//       else if (currentPuzzle === 2) {
//         if (
//           query.includes("SELECT p.name, sl.event_type, dr.location") &&
//           query.includes("FROM security_logs sl") &&
//           query.includes("JOIN device_registry dr ON sl.terminal_id = dr.terminal_id") &&
//           query.includes("JOIN personnel p ON p.person_id = 'P1033'") &&
//           query.includes("WHERE sl.event_type = 'footage corrupted'")
//         ) {
//           const axel = results.find(row => row.name === 'Axel Borne' && row.event_type === 'footage corrupted' && row.location && row.location.includes('Security Room A'));
//           if (axel) {
//             expectedResult = [axel];
//             notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious.';
//             nextPuzzle = 3;
//             isCorrect = true;
//           } else {
//             timePenalty = 30; // Correct query structure but no matching data
//           }
//         } else if (query.includes("SELECT * FROM security_logs WHERE event_type = 'login'")) {
//           timePenalty = 30; // Incorrect query
//         } else if (
//           query.includes("SELECT * FROM device_registry dr") &&
//           query.includes("JOIN security_logs sl ON dr.terminal_id = sl.terminal_id") &&
//           query.includes("WHERE dr.location = 'Main Lobby'") &&
//           query.includes("AND sl.event_type = 'footage corrupted'")
//         ) {
//           // Misleading query for Puzzle 2
//           expectedResult = results; // Send back the actual results, even if empty
//           branchPath = '/puzzle/2/stage-left';
//           isMisleading = true;
//           // No nextPuzzle here, the frontend will handle navigation on "Proceed"
//         } else {
//           timePenalty = 30; // Default penalty for other incorrect queries in Puzzle 2
//         }
//       } else if (currentPuzzle === 2 && currentBranch === 'stage-left') {
//         if (query.includes("TIME(sl.timestamp)") && query.includes("'P1067'") && query.includes("'footage corrupted'")) {
//           expectedResult = results; // Send back the time if found for Marcus
//           isMisleading = true;
//         } else if (query.includes("ORDER BY timestamp DESC") && query.includes("security_logs")) {
//           expectedResult = results;
//           timePenalty = 30;
//         } else if (query.includes("GROUP BY dr.location")) {
//           expectedResult = results;
//           timePenalty = 30;
//         } else if (query.includes("TIME()")) {
//           // User selected the correct SQL function in the riddle
//           expectedResult = [{ message: 'Correct SQL function selected.' }];
//         } else {
//           timePenalty = 30;
//         }
//       } else {
//         timePenalty = 30; // Default penalty for incorrect puzzle context
//       }

//       res.json({
//         resultText: 'Query executed successfully.',
//         table: expectedResult,
//         notebookUpdate,
//         next: nextPuzzle,
//         branch: branchPath,
//         timePenalty,
//         isCorrect,
//         isMisleading,
//       });

//     } catch (err) {
//       console.error('Query error:', err);
//       res.status(400).json({ error: 'Query execution failed. Please check your SQL syntax.', timePenalty: 30 });
//     }
//   },
// };

// module.exports = queryController;
// const { Sequelize } = require('sequelize');
// const db = require('../config/db'); // your Sequelize instance
// const queryController = {
//   executeQuery: async (req, res) => {
//     const { query, currentPuzzle, currentBranch } = req.body;

//     let notebookUpdate;
//     let nextPuzzle;
//     let branchPath;
//     let timePenalty = 0;
//     let isCorrect = false;
//     let isMisleading = false;

//     try {
//       //  Execute the query from frontend
//       const [results, metadata] = await db.query(query);
//       console.log('Query Results:', results); // Log the results from the database

//       //  Logic based on actual query and puzzle
//       if (currentPuzzle === 1) {
//         if (query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
//           const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
//           if (lydia) {
//             notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
//             nextPuzzle = 2;
//             isCorrect = true;
//           }
//         } else if (query.includes("biometric")) {
//           timePenalty = 30;
//         } else if (query.includes("access_time > '2025-04-29 14:00:00'")) {
//           const match = results.find(row => row.person_id === 'P1100');
//           if (match) {
//             branchPath = '/puzzle/1/forgery';
//             isMisleading = true;
//           }
//         } else {
//           timePenalty = 30; // default penalty
//         }
//       } else if (currentPuzzle === 2) {
//         if (
//           query.includes("SELECT p.name, sl.event_type, dr.location") &&
//           query.includes("FROM security_logs sl") &&
//           query.includes("JOIN device_registry dr ON sl.terminal_id = dr.terminal_id") &&
//           query.includes("JOIN personnel p ON p.person_id = 'P1033'") &&
//           query.includes("WHERE sl.event_type = 'footage corrupted'")
//         ) {
//           const axel = results.find(row => row.name === 'Axel Borne' && row.event_type === 'footage corrupted' && row.location && row.location.includes('Security Room A'));
//           if (axel) {
//             notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious.';
//             nextPuzzle = 3;
//             isCorrect = true;
//           } else {
//             timePenalty = 30; // Correct query structure but no matching data
//           }
//         } else if (query.includes("SELECT * FROM security_logs WHERE event_type = 'login'")) {
//           timePenalty = 30; // Incorrect query
//         } else if (
//           query.includes("SELECT * FROM device_registry dr") &&
//           query.includes("JOIN security_logs sl ON dr.terminal_id = sl.terminal_id") &&
//           query.includes("WHERE dr.location = 'Main Lobby'") &&
//           query.includes("AND sl.event_type = 'footage corrupted'")
//         ) {
//           // Misleading query for Puzzle 2 - Redirect irrespective of results
//           branchPath = '/puzzle/2/stage-left';
//           isMisleading = true;
//         } else {
//           timePenalty = 30; // Default penalty for other incorrect queries in Puzzle 2
//         }
//       } else if (currentPuzzle === 2 && currentBranch === 'stage-left') {
//         if (query.includes("TIME(sl.timestamp)") && query.includes("'P1067'") && query.includes("'footage corrupted'")) {
//           // Logic for correct query in the branch - you might want to set isCorrect here
//           // based on the results if needed.
//         } else if (query.includes("ORDER BY timestamp DESC") && query.includes("security_logs")) {
//           timePenalty = 30;
//         } else if (query.includes("GROUP BY dr.location")) {
//           timePenalty = 30;
//         } else if (query.includes("TIME()")) {
//           // User selected the correct SQL function in the riddle
//           // You might want to provide specific feedback here.
//         } else {
//           timePenalty = 30;
//         }
//       } else {
//         timePenalty = 30; // Default penalty for incorrect puzzle context
//       }

//       res.json({
//         resultText: 'Query executed successfully.',
//         table: results,
//         notebookUpdate,
//         next: nextPuzzle,
//         branch: branchPath,
//         timePenalty,
//         isCorrect,
//         isMisleading,
//       });

//     } catch (err) {
//       console.error('Query error:', err);
//       res.status(400).json({ error: 'Query execution failed. Please check your SQL syntax.', timePenalty: 30 });
//     }
//   }
// };
// module.exports = queryController;
//************************************ */
// const { Sequelize } = require('sequelize');
// //const cleanQuery = query.replace(/\s+/g, ' ').toLowerCase();

// const db = require('../config/dbGame'); // your Sequelize instance
// const queryController = {

//   executeQuery: async (req, res) => {


//     const { query, currentPuzzle, currentBranch } = req.body;

//     let notebookUpdate;
//     let nextPuzzle;
//     let branchPath;
//     let timePenalty = 0;
//     let isCorrect = false;
//     let isMisleading = false;

//     try {
//       //  Execute the query from frontend
//       const [results, metadata] = await db.query(query);
//       console.log('Query Results:', results); // Log the results from the database

//       //  Logic based on actual query and puzzle
//       if (currentPuzzle === 1) {
//         if (query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
//           const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
//           if (lydia) {
//             notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
//             nextPuzzle = 2;
//             isCorrect = true;
//           }
//         } else if (query.includes("biometric")) {
//           timePenalty = 30;
//         } else if (query.includes("access_time > '2025-04-29 14:00:00'")) {
//           const match = results.find(row => row.person_id === 'P1100');
//           if (match) {
//             branchPath = '/puzzle/1/forgery';
//             isMisleading = true;
//           }
//         } else {
//           timePenalty = 30; // default penalty
//         }
//       } else if (currentPuzzle === 2) {
//         if (
//           query.includes("SELECT p.name, sl.event_type, dr.location") &&
//           query.includes("FROM security_logs sl") &&
//           query.includes("JOIN device_registry dr ON sl.terminal_id = dr.terminal_id") &&
//           query.includes("JOIN personnel p ON p.person_id = 'P1033'") &&
//           query.includes("WHERE sl.event_type = 'footage corrupted'")
//         ) {
//           const axel = results.find(row => row.name === 'Axel Borne' && row.event_type === 'footage corrupted' && row.location && row.location.includes('Security Room A'));
//           if (axel) {
//             notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious.';
//             nextPuzzle = 3;
//             isCorrect = true;
//           } else {
//             timePenalty = 30; // Correct query structure but no matching data
//           }
//         } else if (query.includes("SELECT * FROM security_logs WHERE event_type = 'login'")) {
//           timePenalty = 30; // Incorrect query
//         } else if (
//           query.includes("SELECT * FROM device_registry dr") &&
//           query.includes("JOIN security_logs sl ON dr.terminal_id = sl.terminal_id") &&
//           query.includes("WHERE dr.location = 'Main Lobby'") &&
//           query.includes("AND sl.event_type = 'footage corrupted'")
//         ) {
//           // Misleading query for Puzzle 2 - Redirect irrespective of results
//           branchPath = '/puzzle/2/stage-left';
//           isMisleading = true;
//         } else {
//           timePenalty = 30; // Default penalty for other incorrect queries in Puzzle 2
//         }
//       } else if (currentPuzzle === 2 && currentBranch === 'stage-left') {
//         if (query.includes("TIME(sl.timestamp)") && query.includes("'P1067'") && query.includes("'footage corrupted'")) {
//           // Logic for correct query in the branch - you might want to set isCorrect here
//           // based on the results if needed.
//         } else if (query.includes("ORDER BY timestamp DESC") && query.includes("security_logs")) {
//           timePenalty = 30;
//         } else if (query.includes("GROUP BY dr.location")) {
//           timePenalty = 30;
//         } else if (query.includes("TIME()")) {
//           // User selected the correct SQL function in the riddle
//           // You might want to provide specific feedback here.
//         } else {
//           timePenalty = 30;
//         }
//         // }if (currentPuzzle === 3) {
//         //   // Correct query for Puzzle 3 (identifying the unknown entity)
//         //   if (
//         //     query.includes("SELECT bm.*, p.name") &&
//         //     query.includes("WHERE bm.person_id = 'P1100'") &&
//         //     query.includes("LEFT JOIN personnel p ON bm.person_id = p.person_id")
//         //   ) {
//         //     const unknownEntity = results.find(row => row.person_id === 'P1100' && row.time_out === null);
//         //     if (unknownEntity) {
//         //       notebookUpdate = 'Entity "P1100" identified as an anomaly with no personnel record. Likely using a cloned ID or has found a way to remain unrecorded.';
//         //       nextPuzzle = 4;
//         //       isCorrect = true;
//         //     } else {
//         //       timePenalty = 30; // Correct query structure but no matching data
//         //     }
//         //   }
//         //   // Incorrect query for Puzzle 3
//         //   else if (query.includes("SELECT * FROM backstage_movements WHERE room_id = 'R-01'")) {
//         //     timePenalty = 30;
//         //   }
//         //   // Misleading query for Puzzle 3 - Technician branch (unique word: 'device_registry')
//         //   else if (query.includes("device_registry") && query.includes("LIKE '%Backstage%'")) {
//         //     branchPath = '/puzzle/3/technician';
//         //     isMisleading = true;
//         //     nextPuzzle = null;
//         //   }
//         //   // Misleading query for Puzzle 3 - Archivist branch (unique phrase: "bm.room_id = 'R-03'")
//         //   else if (query.includes("bm.room_id = 'R-03'") && query.includes("ORDER BY bm.time_in DESC")) {
//         //     branchPath = '/puzzle/3/archivist';
//         //     isMisleading = true;
//         //     nextPuzzle = null;
//         //   }
//         //   // Default penalty for other incorrect queries in Puzzle 3
//         //   else {
//         //     timePenalty = 30;
//         //   }
//         // } else {
//         //   timePenalty = 30; // Default penalty for incorrect puzzle context
//         // }
//       } else if (currentPuzzle === 3) {
//         switch (parseInt(queryId)) {
//           case 1: // Correct query for Puzzle 3
//             const unknownEntity = results.find(row => row.person_id === 'P1100' && row.time_out === null);
//             if (unknownEntity) {
//               notebookUpdate = 'Entity "P1100" identified as an anomaly with no personnel record. Likely using a cloned ID or has found a way to remain unrecorded.';
//               nextPuzzle = 4;
//               isCorrect = true;
//             } else {
//               timePenalty = 30;
//             }
//             break;
//           case 2: // Incorrect query for Puzzle 3
//             timePenalty = 30;
//             break;
//           case 3: // Misleading - Archivist
//             branchPath = '/puzzle/3/archivist';
//             isMisleading = true;
//             nextPuzzle = null;
//             break;
//           case 4: // Misleading - Technician
//             branchPath = '/puzzle/3/technician';
//             isMisleading = true;
//             nextPuzzle = null;
//             break;
//           default:
//             timePenalty = 30; // Default for other incorrect queries in Puzzle 3
//             break;
//         }
//       } else {
//         timePenalty = 30; // Default penalty for incorrect puzzle context
//       }
//       res.json({
//         resultText: 'Query executed successfully.',
//         table: results,
//         notebookUpdate,
//         next: nextPuzzle,
//         branch: branchPath,
//         timePenalty,
//         isCorrect,
//         isMisleading,
//       });

//     } catch (err) {
//       console.error('Query error:', err);
//       res.status(400).json({ error: 'Query execution failed. Please check your SQL syntax.', timePenalty: 30 });
//     }
//   }
// };
// module.exports = queryController;
// const { Sequelize } = require('sequelize');
// //const cleanQuery = query.replace(/\s+/g, ' ').toLowerCase();

// const db = require('../config/dbGame'); // your Sequelize instance
// const queryController = {

//     executeQuery: async (req, res) => {


//         const { query, currentPuzzle, currentBranch, queryId } = req.body; // Assuming you might send queryId now

//         let notebookUpdate;
//         let nextPuzzle;
//         let branchPath;
//         let timePenalty = 0;
//         let isCorrect = false;
//         let isMisleading = false;
//         let suspectQuestion = null;
//         let suspectOptions = null;

//         try {
//             //  Execute the query from frontend
//             const [results, metadata] = await db.query(query);
//             console.log('Query Results:', results); // Log the results from the database

//             //  Logic based on actual query and puzzle
//             if (currentPuzzle === 1) {
//                 if (query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
//                     const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
//                     if (lydia) {
//                         notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.';
//                         nextPuzzle = 2;
//                         isCorrect = true;
//                         suspectQuestion = "Who accessed the vault with unusual timing?";
//                         suspectOptions = [
//                             { name: 'Lydia Crane, due to her unusual re-entry.', value: 'lydiaCrane' },
//                             { name: 'P1100, based on the later, unrecorded access.', value: 'p1100_phantom' },
//                             { name: 'Axel Borne, as he accessed the vault biometrically.', value: 'axelBorne' },
//                             { name: 'Grace Tanaka, given her unrestricted access.', value: 'graceTanaka' },
//                         ];
//                     }
//                 } else if (query.includes("biometric")) {
//                     timePenalty = 30;
                    
//                 } else if (query.includes("access_time > '2025-04-29 14:00:00'")) {
//                     const match = results.find(row => row.person_id === 'P1100');
//                     if (match) {
//                         branchPath = '/puzzle/1/forgery';
//                         isMisleading = true;
//                     }
//                 } else {
//                     timePenalty = 30; // default penalty
//                 }
//             } else if (currentPuzzle === 2) {
//                 if (
//                     query.includes("SELECT p.name, sl.event_type, dr.location") &&
//                     query.includes("FROM security_logs sl") &&
//                     query.includes("JOIN device_registry dr ON sl.terminal_id = dr.terminal_id") &&
//                     query.includes("JOIN personnel p ON p.person_id = 'P1033'") &&
//                     query.includes("WHERE sl.event_type = 'footage corrupted'")
//                 ) {
//                     const axel = results.find(row => row.name === 'Axel Borne' && row.event_type === 'footage corrupted' && row.location && row.location.includes('Vault Entrance'));
//                     if (axel) {
//                         notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious.';
//                         nextPuzzle = 3;
//                         isCorrect = true;
//                         suspectQuestion = "Who was on duty during the CCTV malfunction?";
//                         suspectOptions = [
//                             { name: 'Axel Borne, the audio technician assigned to the CCTV console.', value: 'axelBorne' },
//                             { name: 'Marcus Bell, the anxious stage manager seen near the Main Lobby.', value: 'marcusBell' },
//                             { name: 'Lydia Crane, perhaps trying to hide her movements.', value: 'lydiaCrane' },
//                             { name: 'P1100, if they somehow manipulated the system remotely.', value: 'p1100_phantom' },
//                         ];
//                     } else {
//                         timePenalty = 30; // Correct query structure but no matching data
//                     }
//                 } else if (query.includes("SELECT * FROM security_logs WHERE event_type = 'login'")) {
//                     timePenalty = 30; // Incorrect query
//                 } else if (
//                     query.includes("SELECT * FROM device_registry dr") &&
//                     query.includes("JOIN security_logs sl ON dr.terminal_id = sl.terminal_id") &&
//                     query.includes("WHERE dr.location = 'Main Lobby'") &&
//                     query.includes("AND sl.event_type = 'footage corrupted'")
//                 ) {
//                     // Misleading query for Puzzle 2 - Redirect irrespective of results
//                     branchPath = '/puzzle/2/stage-left';
//                     isMisleading = true;
//                 } else {
//                     timePenalty = 30; // Default penalty for other incorrect queries in Puzzle 2
//                 }
//             } else if (currentPuzzle === 2 && currentBranch === 'stage-left') {
//                 if (query.includes("TIME(sl.timestamp)") && query.includes("'P1067'") && query.includes("'footage corrupted'")) {
//                     // Logic for correct query in the branch - you might want to set isCorrect here
//                     // based on the results if needed.
//                     // Example:
//                     // if (results.some(row => /* your condition */)) {
//                     //     isCorrect = true;
//                     //     nextPuzzle = 3;
//                     //     suspectQuestion = "...";
//                     //     suspectOptions = [...];
//                     // }
//                 } else if (query.includes("ORDER BY timestamp DESC") && query.includes("security_logs")) {
//                     timePenalty = 30;
//                 } else if (query.includes("GROUP BY dr.location")) {
//                     timePenalty = 30;
//                 } else if (query.includes("TIME()")) {
//                     // User selected the correct SQL function in the riddle
//                     // You might want to provide specific feedback here.
//                 } else {
//                     timePenalty = 30;
//                 }
//             } else if (currentPuzzle === 3) {
//                 switch (parseInt(queryId)) {
//                     case 1: // Correct query for Puzzle 3
//                         const unknownEntity = results.find(row => row.person_id === 'P1100' && row.time_out === null);
//                         if (unknownEntity) {
//                             notebookUpdate = 'Entity "P1100" identified as an anomaly with no personnel record. Likely using a cloned ID or has found a way to remain unrecorded.';
//                             nextPuzzle = 4;
//                             isCorrect = true;
//                             suspectQuestion = "Who is this 'P1100' entity, based on their unusual record?";
//                             suspectOptions = [
//                                 { name: 'A phantom operative', value: 'p1100' },
//                                 { name: 'A known employee using a false identity', value: 'false_identity' },
//                             ];
//                         } else {
//                             timePenalty = 30;
//                         }
//                         break;
//                     case 2: // Incorrect query for Puzzle 3
//                     timePenalty = 30;
//                         break;
//                     case 3: // Misleading - Archivist
//                         branchPath = '/puzzle/3/archivist';
//                         isMisleading = true;
//                         nextPuzzle = null;
//                         break;
//                     case 4: // Misleading - Technician
//                         branchPath = '/puzzle/3/technician';
//                         isMisleading = true;
//                         nextPuzzle = null;
//                         break;
//                     default:
//                         timePenalty = 30; // Default for other incorrect queries in Puzzle 3
//                         break;
//                 }
//             } else {
//                 timePenalty = 30; // Default penalty for incorrect puzzle context
//             }
//             res.json({
//                 resultText: 'Query executed successfully.',
//                 table: results,
//                 notebookUpdate,
//                 next: nextPuzzle,
//                 branch: branchPath,
//                 timePenalty,
//                 isCorrect,
//                 isMisleading,
//                 suspectQuestion,
//                 suspectOptions,
//             });

//         } catch (err) {
//             console.error('Query error:', err);
//             res.status(400).json({ error: 'Query execution failed. Please check your SQL syntax.', timePenalty: 30 });
//         }
//     }
// };
// module.exports = queryController;
const { Sequelize } = require('sequelize');
//const cleanQuery = query.replace(/\s+/g, ' ').toLowerCase();

const db = require('../config/dbGame'); // your Sequelize instance
const queryController = {

    executeQuery: async (req, res) => {
        const { query, currentPuzzle, currentBranch, queryId } = req.body; // Assuming you might send queryId now

        let notebookUpdate;
        let nextPuzzle;
        let branchPath;
        let timePenalty = 0;
        let isCorrect = false;
        let isMisleading = false;
        let suspectQuestion = null;
        let suspectOptions = null;

        try {
            //  Execute the query from frontend
            const [results, metadata] = await db.query(query);
            console.log('Query Results:', results); // Log the results from the database

            //  Logic based on actual query and puzzle
            // if (currentPuzzle === 1) {
            //     if (query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
            //         const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
            //         if (lydia) {
            //             notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.  Chat Lead: Okay, so Lydia went into the vault twice, right around when things got weird. That second time is super sus. Maybe check her out?';
            //             nextPuzzle = 2;
            //             isCorrect = true;
            //             suspectQuestion = "Who accessed the vault with unusual timing?";
            //             suspectOptions = [
            //                 { name: 'Lydia Crane, due to her unusual re-entry.', value: 'lydiaCrane' },
            //                 { name: 'P1100, based on the later, unrecorded access.', value: 'p1100_phantom' },
            //                 { name: 'Axel Borne, as he accessed the vault biometrically.', value: 'axelBorne' },
            //                 { name: 'Grace Tanaka, given her unrestricted access.', value: 'graceTanaka' },
            //             ];
            //         }
            //     } else if (query.includes("biometric")) {
            //         timePenalty = 30;
            //         notebookUpdate = "Chat Lead: Hmm, that's an interesting angle, but let's refocus a bit. What's the clue really asking us to count or consider about the vault entries?";

            //     } else if (query.includes("access_time > '2025-04-29 14:00:00'")) {
            //         const match = results.find(row => row.person_id === 'P1100');
            //         if (match) {
            //             branchPath = '/puzzle/1/forgery';
            //             isMisleading = true;
            //             notebookUpdate = "Chat Lead: Wait, who's this 'P1100'? They showed up late, after the timeline we're focused on. That's really odd...and maybe connected to the camera issues?";
            //         }
            //     } else {
            //         timePenalty = 30; // default penalty
            //         notebookUpdate = "Chat Lead: Let's make sure we're looking at all the relevant activity. Does the clue prioritize recent entries, or something else?";
            //     }
            // } 
            if (currentPuzzle === 1) {
                if (query.includes("vault_access_logs") && query.includes("COUNT(*)")) {
                    const lydia = results.find(row => row.person_id === 'P1002' && row.access_count === 2);
                    if (lydia) {
                        notebookUpdate = 'Suspect: Lydia Crane (P1002). Note: Re-entered vault within minutes.  Chat Lead: Okay, so Lydia went into the vault twice, right around when things got weird. That second time is super sus. Maybe check her out?';
                        nextPuzzle = 2;
                        isCorrect = true;
                        suspectQuestion = "Who accessed the vault with unusual timing?";
                        suspectOptions = [
                            { name: 'Lydia Crane, due to her unusual re-entry.', value: 'lydiaCrane' },
                            { name: 'P1100, based on the later, unrecorded access.', value: 'p1100_phantom' },
                            { name: 'Axel Borne, as he accessed the vault biometrically.', value: 'axelBorne' },
                            { name: 'Grace Tanaka, given her unrestricted access.', value: 'graceTanaka' },
                        ];
                    }
                } else if (query.includes("biometric")) {
                    timePenalty = 30;
                    notebookUpdate = "Chat Lead: Hmm, that's an interesting angle, but let's refocus a bit. What's the clue really asking us to count or consider about the vault entries?";

                } else if (query.includes("access_time > '2025-04-29 14:00:00'")) {
                    const match = results.find(row => row.person_id === 'P1100');
                    if (match) {
                        branchPath = '/puzzle/1/forgery';
                        isMisleading = true;
                        notebookUpdate = "Chat Lead: Wait, who's this 'P1100'? They showed up late, after the timeline we're focused on. That's really odd...and maybe connected to the camera issues?";
                    }
                } else {
                    timePenalty = 30; // default penalty
                    notebookUpdate = "Chat Lead: Let's make sure we're looking at all the relevant activity. Does the clue prioritize recent entries, or something else?";
                }
            } else if (currentPuzzle === 1 && currentBranch === 'forgery') {
                if (
                    query.includes("SELECT vl.person_id, p.name, vl.access_time FROM vault_access_logs vl") &&
                    query.includes("JOIN personnel p ON vl.person_id = p.person_id") &&
                    query.includes("WHERE vl.access_time BETWEEN '2025-04-29 12:00:00' AND '2025-04-29 14:00:00'") &&
                    query.includes("ORDER BY vl.access_time")
                ) {
                    const graceEntry = results.find(row => row.name === 'Grace Tanaka' && row.access_time === '2025-04-29 13:55:00');
                    if (graceEntry) {
                        notebookUpdate = "Chat Lead: Look at Grace's entry right before the incident! And her unrestricted access... Something's not right. This feels like our forgery lead.";
                        nextPuzzle = 2; // Or whatever the next puzzle is after following this branch
                        isCorrect = true;
                        suspectQuestion = "Who accessed the vault suspiciously close to the incident, given their access level?";
                        suspectOptions = [
                            { name: 'Grace Tanaka, due to her entry just before the alarm.', value: 'graceTanaka' },
                            { name: 'Lydia Crane, with her unusual double entry.', value: 'lydiaCrane' },
                            { name: 'Axel Borne, despite no direct evidence in this timeframe.', value: 'axelBorne' },
                        ];
                    } else {
                        timePenalty = 30;
                        notebookUpdate = "Chat Lead: We're on the right track looking at the timeline, but let's focus on who had access right around when things went down.";
                    }
                } else if (query.includes("SELECT * FROM vault_access_logs ORDER BY access_time DESC LIMIT 2")) {
                    timePenalty = 30;
                    notebookUpdate = "Chat Lead: That shows the latest entries, but we need to look at a specific window of time related to the incident.";
                } else if (query.includes("SELECT p.name, COUNT(vl.access_id) AS access_count FROM vault_access_logs vl JOIN personnel p ON vl.person_id = p.person_id GROUP BY p.name ORDER BY access_count DESC")) {
                    timePenalty = 30;
                    notebookUpdate = "Chat Lead: While access counts are interesting, the forgery clue is about a specific moment in time. Let's look at the logs around the time of the incident.";
                } else {
                    timePenalty = 30;
                    notebookUpdate = "Chat Lead: This is about a specific timeframe. Can we narrow our query to the time the forgery might have occurred?";
                }
            } 
             else if (currentPuzzle === 2) {
                if (
                    query.includes("SELECT p.name, sl.event_type, dr.location") &&
                    query.includes("FROM security_logs sl") &&
                    query.includes("JOIN device_registry dr ON sl.terminal_id = dr.terminal_id") &&
                    query.includes("JOIN personnel p ON p.person_id = 'P1033'") &&
                    query.includes("WHERE sl.event_type = 'footage corrupted'")
                ) {
                    const axel = results.find(row => row.name === 'Axel Borne' && row.event_type === 'footage corrupted' && row.location && row.location.includes('Vault Entrance'));
                    if (axel) {
                        notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious. Chat Lead: Axel was at the security computer when the cameras went down. That\'s very suspicious, given his job. Remember the riddle about someone \'near the console\'?';
                        nextPuzzle = 3;
                        isCorrect = true;
                        suspectQuestion = "Who was on duty during the CCTV malfunction?";
                        suspectOptions = [
                            { name: 'Axel Borne, the audio technician assigned to the CCTV console.', value: 'axelBorne' },
                            { name: 'Marcus Bell, the anxious stage manager seen near the Main Lobby.', value: 'marcusBell' },
                            { name: 'Lydia Crane, perhaps trying to hide her movements.', value: 'lydiaCrane' },
                            { name: 'P1100, if they somehow manipulated the system remotely.', value: 'p1100_phantom' },
                        ];
                    } else {
                        timePenalty = 30; // Correct query structure but no matching data
                        notebookUpdate = "Chat Lead: That might not be the most direct path. Instead of who was there, can we narrow down what happened to the footage itself?";
                    }
                } else if (query.includes("SELECT * FROM security_logs WHERE event_type = 'login'")) {
                    timePenalty = 30; // Incorrect query
                    notebookUpdate = "Chat Lead: That might not be the most direct path. Instead of who was there, can we narrow down what happened to the footage itself?";
                } else if (
                    query.includes("SELECT * FROM device_registry dr") &&
                    query.includes("JOIN security_logs sl ON dr.terminal_id = sl.terminal_id") &&
                    query.includes("WHERE dr.location = 'Main Lobby'") &&
                    query.includes("AND sl.event_type = 'footage corrupted'")
                ) {
                    // Misleading query for Puzzle 2 - Redirect irrespective of results
                    branchPath = '/puzzle/2/stage-left';
                    isMisleading = true;
                    branch = '/puzzle/2/stage-left'; // ✅ Ensure 'branch' is set here
                    notebookUpdate = "Chat Lead: Okay, the video wasn't messed up from the lobby, but Marcus was acting really jumpy nearby when it happened... Worth keeping an eye on him, even if he wasn't at the controls.";
                } else {
                    timePenalty = 30; // Default penalty for other incorrect queries in Puzzle 2
                    notebookUpdate = "Chat Lead: There's a lot going on there... but can we isolate the specific record we need? What's the key verb or phrase in the clue?";
                }
            
            } else if (currentPuzzle === 2 && currentBranch === 'stage-left') {
                if (query.includes("TIME(sl.timestamp)") && query.includes("'P1067'") && query.includes("'footage corrupted'")) {
                    const marcusAtTime = results.find(row => row.person_id === 'P1067' && row.event_type === 'footage corrupted');
                    if (marcusAtTime) {
                        notebookUpdate = "Chat Lead: Good job! You found the moment the footage was corrupted. Marcus being near the security console at that exact time is highly suspicious, especially given his nervous behavior earlier.";
                        nextPuzzle = 3;
                        isCorrect = true;
                        suspectQuestion = "Who was present when the security footage was corrupted?";
                        suspectOptions = [
                            { name: 'Marcus Bell, seen near the security console.', value: 'marcusBell' },
                            { name: 'Axel Borne, who has technical knowledge of the system.', value: 'axelBorne' },
                            { name: 'Lydia Crane, whose motives are still unclear.', value: 'lydiaCrane' },
                        ];
                    } else if (query.includes("ORDER BY timestamp DESC") && query.includes("security_logs")) {
                        timePenalty = 30;
                        notebookUpdate = "Chat Lead: That shows the latest activity, but we need to find the *specific* event related to the camera malfunction. Think about the keywords in the clue.";
                    } else if (query.includes("GROUP BY dr.location")) {
                        timePenalty = 30;
                        notebookUpdate = "Chat Lead: Focusing on locations is good, but the clue is about a specific *event* that occurred. What kind of event are we looking for in the security logs?";
                    } else if (query.includes("TIME()") && !query.includes("'footage corrupted'")) {
                        notebookUpdate = "Chat Lead: You're using `TIME()` correctly! Now, what *kind* of event around that time are we investigating?";
                    } else if (query.includes("TIME()") && !query.includes("'P1067'")) {
                        notebookUpdate = "Chat Lead: The `TIME()` function is key! Now, who was near the security system when this happened?";
                    } else if (query.includes("TIME()")) {
                        notebookUpdate = "Chat Lead: You're on the right track with `TIME()`! Can you combine it with the specific event and the individual we suspect?";
                    } else {
                        timePenalty = 30;
                        notebookUpdate = "Chat Lead: There's a lot going on there... but can we isolate the specific record we need? What's the key verb or phrase in the clue?";
                    }
            }
// else if (currentPuzzle === 2) {

//                 if (

//                     query.includes("SELECT p.name, sl.event_type, dr.location") &&

//                     query.includes("FROM security_logs sl") &&

//                     query.includes("JOIN device_registry dr ON sl.terminal_id = dr.terminal_id") &&

//                     query.includes("JOIN personnel p ON p.person_id = 'P1033'") &&

//                     query.includes("WHERE sl.event_type = 'footage corrupted'")

//                 ) {

//                     const axel = results.find(row => row.name === 'Axel Borne' && row.event_type === 'footage corrupted' && row.location && row.location.includes('Vault Entrance'));

//                     if (axel) {

//                         notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious. Chat Lead: Axel was at the security computer when the cameras went down. That\'s very suspicious, given his job. Remember the riddle about someone \'near the console\'?';

//                         nextPuzzle = 3;

//                         isCorrect = true;

//                         suspectQuestion = "Who was on duty during the CCTV malfunction?";

//                         suspectOptions = [

//                             { name: 'Axel Borne, the audio technician assigned to the CCTV console.', value: 'axelBorne' },

//                             { name: 'Marcus Bell, the anxious stage manager seen near the Main Lobby.', value: 'marcusBell' },

//                             { name: 'Lydia Crane, perhaps trying to hide her movements.', value: 'lydiaCrane' },

//                             { name: 'P1100, if they somehow manipulated the system remotely.', value: 'p1100_phantom' },

//                         ];

//                     } else {

//                         timePenalty = 30; // Correct query structure but no matching data

//                         notebookUpdate = "Chat Lead: That might not be the most direct path. Instead of who was there, can we narrow down what happened to the footage itself?";

//                     }

//                 } else if (query.includes("SELECT * FROM security_logs WHERE event_type = 'login'")) {

//                     timePenalty = 30; // Incorrect query

//                     notebookUpdate = "Chat Lead: That might not be the most direct path. Instead of who was there, can we narrow down what happened to the footage itself?";

//                 } else if (

//                     query.includes("SELECT * FROM device_registry dr") &&

//                     query.includes("JOIN security_logs sl ON dr.terminal_id = sl.terminal_id") &&

//                     query.includes("WHERE dr.location = 'Main Lobby'") &&

//                     query.includes("AND sl.event_type = 'footage corrupted'")

//                 ) {

//                     // Misleading query for Puzzle 2 - Redirect irrespective of results

//                     branchPath = '/puzzle/2/stage-left';

//                     isMisleading = true;

//                     notebookUpdate = "Chat Lead: Okay, the video wasn't messed up from the lobby, but Marcus was acting really jumpy nearby when it happened... Worth keeping an eye on him, even if he wasn't at the controls.";

//                 } else {

//                     timePenalty = 30; // Default penalty for other incorrect queries in Puzzle 2

//                     notebookUpdate = "Chat Lead: There's a lot going on there... but can we isolate the specific record we need? What's the key verb or phrase in the clue?";

//                 }

//             } else if (currentPuzzle === 2 && currentBranch === 'stage-left') {

//                 if (query.includes("TIME(sl.timestamp)") && query.includes("'P1067'") && query.includes("'footage corrupted'")) {

                    // Logic for correct query in the branch - you might want to set isCorrect here

                    // based on the results if needed.

                    // Example:

                    // if (results.some(row => /* your condition */)) {

                    //  isCorrect = true;

                    //  nextPuzzle = 3;

                    //  suspectQuestion = "...";

                    //  suspectOptions = [...];

                    // }

//                 } 
// else if (currentPuzzle === 2) {
//         if (
//           query.includes("SELECT p.name, sl.event_type, dr.location") &&
//           query.includes("FROM security_logs sl") &&
//           query.includes("JOIN device_registry dr ON sl.terminal_id = dr.terminal_id") &&
//           query.includes("JOIN personnel p ON p.person_id = 'P1033'") &&
//           query.includes("WHERE sl.event_type = 'footage corrupted'")
//         ) {
//           const axel = results.find(row => row.name === 'Axel Borne' && row.event_type === 'footage corrupted' && row.location && row.location.includes('Security Room A'));
//           if (axel) {
//             notebookUpdate = 'Suspect: Axel Borne. Note: As the audio technician, he has access and knowledge of the security systems. His presence near the console during the corruption is highly suspicious.';
//             nextPuzzle = 3;
//             isCorrect = true;
//           } else {
//             timePenalty = 30; // Correct query structure but no matching data
//           }
//         } else if (query.includes("SELECT * FROM security_logs WHERE event_type = 'login'")) {
//           timePenalty = 30; // Incorrect query
//         } else if (
//           query.includes("SELECT * FROM device_registry dr") &&
//           query.includes("JOIN security_logs sl ON dr.terminal_id = sl.terminal_id") &&
//           query.includes("WHERE dr.location = 'Main Lobby'") &&
//           query.includes("AND sl.event_type = 'footage corrupted'")
//         ) {
//           // Misleading query for Puzzle 2 - Redirect irrespective of results
//           branchPath = '/puzzle/2/stage-left';
//           isMisleading = true;
//         } else {
//           timePenalty = 30; // Default penalty for other incorrect queries in Puzzle 2
//         }
//       } else if (currentPuzzle === 2 && currentBranch === 'stage-left') {
//         if (query.includes("TIME(sl.timestamp)") && query.includes("'P1067'") && query.includes("'footage corrupted'")) {
//           // Logic for correct query in the branch - you might want to set isCorrect here
//           // based on the results if needed.
//         } else if (query.includes("ORDER BY timestamp DESC") && query.includes("security_logs")) {
//           timePenalty = 30;
//         } else if (query.includes("GROUP BY dr.location")) {
//           timePenalty = 30;
//         } else if (query.includes("TIME()")) {
//           // User selected the correct SQL function in the riddle
//           // You might want to provide specific feedback here.
//         } else {
//           timePenalty = 30;
//         }
          //   } else if (currentPuzzle === 3) {
              
          //       switch (parseInt(queryId)) {
          //           case 1: // Correct query for Puzzle 3
          //               const unknownEntity = results.find(row => row.person_id === 'P1100' && row.time_out === null);
          //               if (unknownEntity) {
          //                   notebookUpdate = 'Entity "P1100" identified as an anomaly with no personnel record. Likely using a cloned ID or has found a way to remain unrecorded. Chat Lead: \'P1100\' went into Room R-03 and...just stayed there? That\'s super weird. We need to know who that is and what they\'re doing. \'Ghost\' leaving \'footprints,\' remember?';
          //                   nextPuzzle = 4;
          //                   isCorrect = true;
          //                   suspectQuestion = "Who is this 'P1100' entity, based on their unusual record?";
          //                   suspectOptions = [
          //                       { name: 'A phantom operative', value: 'p1100' },
          //                       { name: 'A known employee using a false identity', value: 'false_identity' },
          //                   ];
          //               } else {
          //                   timePenalty = 30;
          //                   notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
          //               }
          //               break;
          //           case 2: // Incorrect query for Puzzle 3
          //               timePenalty = 30;
          //               notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
          //               break;
          //           case 3: // Misleading - Archivist
          //               branchPath = '/puzzle/3/archivist';
          //               isMisleading = true;
          //               nextPuzzle = null;
          //               notebookUpdate = "Chat Lead: Grace went into that room, but after \'P1100\' was already there. Did she see something? Is she connected somehow?";
          //               break;
          //           case 4: // Misleading - Technician
          //               branchPath = '/puzzle/3/technician';
          //               isMisleading = true;
          //               nextPuzzle = null;
          //               notebookUpdate = "Chat Lead: Axel was in the hallway near R-03, and he knows the security system... Could he be involved with \'P1100\' somehow? Is he \'P1100\'?";
          //               break;
          //           default:
          //               timePenalty = 30; // Default for other incorrect queries in Puzzle 3
          //               notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
          //               break;
          //       }
          //   } else {
          //       timePenalty = 30; // Default penalty for incorrect puzzle context
          //       notebookUpdate = "Chat Lead:  Incorrect puzzle context"
          //   }
          // //  else if (currentPuzzle === 3) {
          // //       if (query.includes("P1100") && query.includes("time_out") && query.includes("NULL")) {
          // //           // Correct query for Puzzle 3
          // //           const unknownEntity = results.find(row => row.person_id === 'P1100' && row.time_out === null);
          // //           if (unknownEntity) {
          // //               notebookUpdate = 'Entity "P1100" identified as an anomaly with no personnel record. Likely using a cloned ID or has found a way to remain unrecorded. Chat Lead: \'P1100\' went into Room R-03 and...just stayed there? That\'s super weird. We need to know who that is and what they\'re doing. \'Ghost\' leaving \'footprints,\' remember?';
          // //               nextPuzzle = 4;
          // //               isCorrect = true;
          // //               suspectQuestion = "Who is this 'P1100' entity, based on their unusual record?";
          // //               suspectOptions = [
          // //                   { name: 'A phantom operative', value: 'p1100' },
          // //                   { name: 'A known employee using a false identity', value: 'false_identity' },
          // //               ];
          // //           } else {
          // //               timePenalty = 30;
          // //               notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
          // //           }
          // //       } else if (query.includes("security_logs") ) {
          // //               timePenalty = 30;
          // //               notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus.  What is unusual about P1100's activity?";
          // //       }
          // //        else if (query.includes("personnel") ) {
          // //               timePenalty = 30;
          // //               notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus.  What is unusual about P1100's activity?";
          // //       }
          // //       else {
          // //           timePenalty = 30; // Default for other incorrect queries in Puzzle 3
          // //           notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
          // //       }
          // //   } else {
          // //       timePenalty = 30; // Default penalty for incorrect puzzle context
          // //       notebookUpdate = "Chat Lead:  Incorrect puzzle context";
          // //   }
  //             }else if (currentPuzzle === 3) {
  //             if (
  //    query.includes("SELECT bm.*, p.name") &&
  //   query.includes("WHERE bm.person_id = 'P1100'") &&
  //    query.includes("LEFT JOIN personnel p ON bm.person_id = p.person_id")
  // ){ 
                
  //                       const unknownEntity = results.find(row => row.person_id === 'P1100' && row.time_out === null);
  //                       if (unknownEntity) {
  //                           notebookUpdate = 'Entity "P1100" identified as an anomaly with no personnel record. Likely using a cloned ID or has found a way to remain unrecorded. Chat Lead: \'P1100\' went into Room R-03 and...just stayed there? That\'s super weird. We need to know who that is and what they\'re doing. \'Ghost\' leaving \'footprints,\' remember?';
  //                           nextPuzzle = 4;
  //                           isCorrect = true;
  //                           suspectQuestion = "Who is this 'P1100' entity, based on their unusual record?";
  //                           suspectOptions = [
  //                               { name: 'A phantom operative', value: 'p1100' },
  //                               { name: 'A known employee using a false identity', value: 'false_identity' },
  //                           ];
  //                       } else {
  //                           timePenalty = 30;
  //                           notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
  //                       }
  //                     }
  //                     else if (query.includes("SELECT * FROM backstage_movements WHERE room_id = 'R-01'")) {
  //   timePenalty = 30;
   
                    
  //                       timePenalty = 30;
  //                       notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
  //                     }
  //                    else if (query.includes("bm.room_id = 'R-03'") && query.includes("ORDER BY bm.time_in DESC"))
  //                    {
  //                       branchPath = '/puzzle/3/archivist';
  //                       isMisleading = true;
  //                       nextPuzzle = null;
  //                       notebookUpdate = "Chat Lead: Grace went into that room, but after \'P1100\' was already there. Did she see something? Is she connected somehow?";
  //                    }
  //                   else if (query.includes("device_registry") && query.includes("LIKE '%Backstage%'")) {
  //                       branchPath = '/puzzle/3/technician';
  //                       isMisleading = true;
  //                       nextPuzzle = null;
  //                       notebookUpdate = "Chat Lead: Axel was in the hallway near R-03, and he knows the security system... Could he be involved with \'P1100\' somehow? Is he \'P1100\'?";
  //                    }
  //                   else{
  //                       timePenalty = 30; // Default for other incorrect queries in Puzzle 3
  //                       notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
  //                   }
  //               }
  //           else {
  //               timePenalty = 30; // Default penalty for incorrect puzzle context
  //               notebookUpdate = "Chat Lead:  Incorrect puzzle context"
  //           }
              }else if (currentPuzzle === 3) {
                if (
                    query.includes("SELECT bm.*, p.name") &&
                    query.includes("WHERE bm.person_id = 'P1100'") &&
                    query.includes("LEFT JOIN personnel p ON bm.person_id = p.person_id")
                ) {
                    const unknownEntity = results.find(row => row.person_id === 'P1100' && row.time_out === null);
                    if (unknownEntity) {
                        notebookUpdate = 'Entity "P1100" identified as an anomaly with no personnel record. Likely using a cloned ID or has found a way to remain unrecorded. Chat Lead: \'P1100\' went into Room R-03 and...just stayed there? That\'s super weird. We need to know who that is and what they\'re doing. \'Ghost\' leaving \'footprints,\' remember?';
                        nextPuzzle = 4;
                        isCorrect = true;
                        suspectQuestion = "Who is this 'P1100' entity, based on their unusual record?";
                        suspectOptions = [
                            { name: 'A phantom operative', value: 'p1100' },
                            { name: 'A known employee using a false identity', value: 'false_identity' },
                        ];
                        console.log('Puzzle 3 - Correct Query - P1100:', unknownEntity); // Add this line
                         console.log('Puzzle 3 - Correct Query - isCorrect:', isCorrect);
                         console.log('Puzzle 3 - Correct Query - notebookUpdate:', notebookUpdate);
                    } else {
                        timePenalty = 30;
                        notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
                        console.log('Puzzle 3 - Incorrect Query - P1100 not found'); // Add this line
                    }
                } else if (query.includes("SELECT * FROM backstage_movements WHERE room_id = 'R-01'")) {
                    timePenalty = 30;
                    notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
                    console.log('Puzzle 3 - Incorrect Query - R-01'); // Add this line
                } else if (query.includes("bm.room_id = 'R-03'") && query.includes("ORDER BY bm.time_in DESC")) {
                    branchPath = '/puzzle/3/archivist';
                    isMisleading = true;
                    nextPuzzle = null;
                    notebookUpdate = "Chat Lead: Grace went into that room, but after \'P1100\' was already there. Did she see something? Is she connected somehow?";
                    console.log('Puzzle 3 - Misleading Query - archivist'); // Add this line
                } else if (query.includes("device_registry") && query.includes("LIKE '%Backstage%'")) {
                    branchPath = '/puzzle/3/technician';
                    isMisleading = true;
                    nextPuzzle = null;
                    notebookUpdate = "Chat Lead: Axel was in the hallway near R-03, and he knows the security system... Could he be involved with \'P1100\' somehow? Is he \'P1100\'?";
                    console.log('Puzzle 3 - Misleading Query - technician'); // Add this line
                } else {
                    timePenalty = 30; // Default for other incorrect queries in Puzzle 3
                    notebookUpdate = "Chat Lead: That gives us some context, but... let's tighten the focus. Where are we looking for \'P1100\' specifically, and who might have been with them there?";
                    console.log('Puzzle 3 - Incorrect Query - default'); // Add this line
                }
            } else {
                timePenalty = 30; // Default penalty for incorrect puzzle context
                notebookUpdate = "Chat Lead:  Incorrect puzzle context";
                console.log('Incorrect Puzzle Context'); // Add this line
            }

            res.json({
                resultText: 'Query executed successfully.',
                table: results,
                notebookUpdate,
                next: nextPuzzle,
                branch: branchPath,
                timePenalty,
                isCorrect,
                isMisleading,
                suspectQuestion,
                suspectOptions,
            });

        } catch (err) {
            console.error('Query error:', err);
            res.status(400).json({ error: 'Query execution failed. Please check your SQL syntax.', timePenalty: 30 });
        }
    }
};
module.exports = queryController;
