export type KeygenData = {
  box: "brown" | "one" | "two"; // Box the card is located in
  type: "person" | "talk"; // Person or talk card
  label?: string; // Label for the card, used for testing
  isPersonSpeaker?: boolean; // Is this a speaker?
  talkName?: string; // Name of the talk
  talkStage?: "main" | "side" | "breakout" | "workshop"; // Stage of the talk
  talkSpeaker?: string; // Speaker of the talk
  talkDescription?: string; // Description of the talk
  talkStartTime?: string; // Start time of the talk ex: 09:00
  talkEndTime?: string; // End time of the talk ex: 10:00
};

export const initialKeygenData: Record<string, KeygenData> = {
  // BEGIN TEST CARDS
  "1": {
    box: "brown",
    type: "person",
    label: "andrew",
    isPersonSpeaker: true,
  },
  "2": {
    box: "brown",
    type: "person",
    label: "andrew",
    isPersonSpeaker: true,
  },
  "3": {
    box: "brown",
    type: "person",
    label: "andrew 3",
    isPersonSpeaker: true,
  },
  "4": {
    box: "brown",
    type: "person",
    label: "vivek 1",
    isPersonSpeaker: true,
  },
  "5": {
    box: "brown",
    type: "person",
    label: "vivek 2",
    isPersonSpeaker: true,
  },
  "6": {
    box: "brown",
    type: "person",
    label: "vivek 3",
    isPersonSpeaker: false,
  },
  "7": {
    box: "brown",
    type: "person",
    label: "kali",
    isPersonSpeaker: false,
  },
  "8": {
    box: "brown",
    type: "person",
    label: "rachel",
    isPersonSpeaker: false,
  },
  "9": {
    box: "brown",
    type: "person",
    label: "jack",
    isPersonSpeaker: false,
  },
  "10": {
    box: "brown",
    type: "person",
    label: "ian",
    isPersonSpeaker: false,
  },
  "11": {
    box: "brown",
    type: "person",
    label: "unregistered user",
    isPersonSpeaker: false,
  },
  // END TEST CARDS
  // BEGIN TALK CARDS
  // "1324009334839696": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 1",
  //   talkName: "Welcome to zkSummit",
  //   talkStage: "main",
  //   talkDescription: "Welcome to zkSummit",
  //   talkSpeaker: "Anna Rose",
  //   talkStartTime: "10:00",
  //   talkEndTime: "10:30",
  // },
  // "1269398825671056": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 2",
  //   talkName: "SNARK proving ASICs",
  //   talkStage: "main",
  //   talkDescription: "SNARK proving ASICs",
  //   talkSpeaker: "Justin Drake (Ethereum Foundation)",
  //   talkStartTime: "10:30",
  //   talkEndTime: "11:00",
  // },
  // "1294288161151376": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 3",
  //   talkName: "Binius: a Hardware-Optimized SNARK",
  //   talkStage: "main",
  //   talkDescription: "Binius: a Hardware-Optimized SNARK",
  //   talkSpeaker: "Jim Posen (Ulvetanna)",
  //   talkStartTime: "11:00",
  //   talkEndTime: "11:30",
  // },
  // "1206413130275216": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 4",
  //   talkName: "STIR: Reed–Solomon Proximity Testing with Fewer Queries",
  //   talkStage: "main",
  //   talkDescription: "STIR: Reed–Solomon Proximity Testing with Fewer Queries",
  //   talkSpeaker: "Gal Arnon (Weizmann Institute) & Giacomo Fenzi (EPFL)",
  //   talkStartTime: "12:00",
  //   talkEndTime: "12:30",
  // },
  // "1279255775615376": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 5",
  //   talkName: "Arke: Privacy-Preserving and Decentralised Contact Discovery",
  //   talkStage: "main",
  //   talkDescription:
  //     "Arke: Privacy-Preserving and Decentralised Contact Discovery",
  //   talkSpeaker: "Nicolas Mohnblatt (Geometry Research)",
  //   talkStartTime: "12:30",
  //   talkEndTime: "13:00",
  // },
  // "1281128381356432": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 6",
  //   talkName: "ZK Email: Novel ZK Applications Unlocked by Portable Provenance",
  //   talkStage: "main",
  //   talkDescription:
  //     "ZK Email: Novel ZK Applications Unlocked by Portable Provenance",
  //   talkSpeaker: "Aayush Gupta & Sora Suegami (ZK Email)",
  //   talkStartTime: "14:00",
  //   talkEndTime: "14:30",
  // },
  // "1338543504169360": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 7",
  //   talkName: "The Role of Decentralized Proving Networks in the Modular Stack",
  //   talkStage: "main",
  //   talkDescription:
  //     "The Role of Decentralized Proving Networks in the Modular Stack",
  //   talkSpeaker: "Uma Roy (Succinct)",
  //   talkStartTime: "14:30",
  //   talkEndTime: "15:00",
  // },
  // "1251282653616528": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 8",
  //   talkName: "Make Lurk Work",
  //   talkStage: "main",
  //   talkDescription: "Make Lurk Work",
  //   talkSpeaker: "Chhi'mèd Künzang (Lurk Lab)",
  //   talkStartTime: "15:30",
  //   talkEndTime: "15:45",
  // },
  // "1138410913077648": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 9",
  //   talkName: "o1VM: Building a Real-World zkVM for MIPS",
  //   talkStage: "main",
  //   talkDescription: "o1VM: Building a Real-World zkVM for MIPS",
  //   talkSpeaker: "Danny Willems (o1Labs)",
  //   talkStartTime: "15:45",
  //   talkEndTime: "16:00",
  // },
  // "1284736153885072": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 10",
  //   talkName: "2PC is for P2P: A TLSN-Based On/Off-Ramping Protocol",
  //   talkStage: "main",
  //   talkDescription: "2PC is for P2P: A TLSN-Based On/Off-Ramping Protocol",
  //   talkSpeaker: "Sachin Kumar (ZKP2P)",
  //   talkStartTime: "16:00",
  //   talkEndTime: "16:15",
  // },
  // "1210841241557392": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 11",
  //   talkName: "Pushing the Performance and Usability of Zero Knowledge Proofs",
  //   talkStage: "main",
  //   talkDescription:
  //     "Pushing the Performance and Usability of Zero Knowledge Proofs",
  //   talkSpeaker: "Ventali Tan (Lita)",
  //   talkStartTime: "16:15",
  //   talkEndTime: "16:30",
  // },
  // "1306859530426768": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 12",
  //   talkName: "Aptos Keyless: Blockchain Accounts without Secret Keys",
  //   talkStage: "main",
  //   talkDescription: "Aptos Keyless: Blockchain Accounts without Secret Keys",
  //   talkSpeaker: "Alin Tomescu (Aptos Labs)",
  //   talkStartTime: "17:00",
  //   talkEndTime: "17:30",
  // },
  // "1259116673964432": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 13",
  //   talkName: "ZK Fireside",
  //   talkStage: "main",
  //   talkDescription: "ZK Fireside",
  //   talkSpeaker: "Anna & Friends",
  //   talkStartTime: "17:30",
  //   talkEndTime: "18:00",
  // },
  // "1204029423425936": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 14",
  //   talkName: "The Last Challenge Attack",
  //   talkStage: "side",
  //   talkDescription: "The Last Challenge Attack",
  //   talkSpeaker: "Oana Ciobotaru (OpenZeppelin)",
  //   talkStartTime: "10:30",
  //   talkEndTime: "11:00",
  // },
  // "1223060423514512": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 15",
  //   talkName:
  //     "Pretty Optimal: Integrating Application-Specific Circuits and zkVMs",
  //   talkStage: "side",
  //   talkDescription:
  //     "Pretty Optimal: Integrating Application-Specific Circuits and zkVMs",
  //   talkSpeaker: "Victor Graf (RISC Zero)",
  //   talkStartTime: "11:00",
  //   talkEndTime: "11:30",
  // },
  // "1292419850377616": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 16",
  //   talkName:
  //     "1 Circuit, 5 Rollups: Building a Re-Usable DA Integration for ZK Rollups",
  //   talkStage: "side",
  //   talkDescription:
  //     "1 Circuit, 5 Rollups: Building a Re-Usable DA Integration for ZK Rollups",
  //   talkSpeaker: "Connor O'Hara (Celestia)",
  //   talkStartTime: "12:00",
  //   talkEndTime: "12:30",
  // },
  // "1210811176786320": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 17",
  //   talkName: "Circle STARKs",
  //   talkStage: "side",
  //   talkDescription: "Circle STARKs",
  //   talkSpeaker: "Ulrich Haböck (Polygon Zero) & Shahar Papini (StarkWare)",
  //   talkStartTime: "12:30",
  //   talkEndTime: "13:00",
  // },
  // "1185354905622928": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 18",
  //   talkName: "Insights into Practical Folding",
  //   talkStage: "side",
  //   talkDescription: "Insights into Practical Folding",
  //   talkSpeaker: "Mara Mihali (Aztec Labs)",
  //   talkStartTime: "14:00",
  //   talkEndTime: "14:30",
  // },
  // "1307757178591632": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 19",
  //   talkName: "Natively Compatible Super-Efficient Lookup Arguments",
  //   talkStage: "side",
  //   talkDescription: "Natively Compatible Super-Efficient Lookup Arguments",
  //   talkSpeaker: "Matteo Campanelli (Matter Labs)",
  //   talkStartTime: "14:30",
  //   talkEndTime: "15:00",
  // },
  // "1348331734636944": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 20",
  //   talkName:
  //     "zkEVM via zkLLVM - IVC Over PLONK-Based Procedurally Generated Type-1 zkEVM Circuits",
  //   talkStage: "side",
  //   talkDescription:
  //     "zkEVM via zkLLVM - IVC Over PLONK-Based Procedurally Generated Type-1 zkEVM Circuits",
  //   talkSpeaker: "Misha Komarov (=nil; Foundation)",
  //   talkStartTime: "15:30",
  //   talkEndTime: "15:45",
  // },
  // "1177925685942672": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 21",
  //   talkName: "Mechanism Design for ZK-Rollup Prover Markets",
  //   talkStage: "side",
  //   talkDescription: "Mechanism Design for ZK-Rollup Prover Markets",
  //   talkSpeaker: "Wenhao Wang (Yale University)",
  //   talkStartTime: "15:45",
  //   talkEndTime: "16:00",
  // },
  // "1311893232097680": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 22",
  //   talkName: "Protecting against Bad Actors in Private Systems",
  //   talkStage: "side",
  //   talkDescription: "Protecting against Bad Actors in Private Systems",
  //   talkSpeaker: "Damian Straszak (Aleph Zero)",
  //   talkStartTime: "16:00",
  //   talkEndTime: "16:15",
  // },
  // "1217580045244816": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 23",
  //   talkName: "Sharing Randomness in Distributed Proving",
  //   talkStage: "side",
  //   talkDescription: "Sharing Randomness in Distributed Proving",
  //   talkSpeaker: "Tamir Hemo (Succinct)",
  //   talkStartTime: "16:15",
  //   talkEndTime: "16:30",
  // },
  // "1149401734388112": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 24",
  //   talkName: "Folding, Codes and Linear Algebra",
  //   talkStage: "side",
  //   talkDescription: "Folding, Codes and Linear Algebra",
  //   talkSpeaker: "Alex Evans (Bain Capital Crypto)",
  //   talkStartTime: "17:00",
  //   talkEndTime: "17:30",
  // },
  // "1306657666963856": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 25",
  //   talkName:
  //     "Common Pitfalls and Optimization for Modern Cryptographic Protocol Implementations",
  //   talkStage: "side",
  //   talkDescription:
  //     "Common Pitfalls and Optimization for Modern Cryptographic Protocol Implementations",
  //   talkSpeaker: "Shresth Agrawal (Common Prefix)",
  //   talkStartTime: "17:30",
  //   talkEndTime: "18:00",
  // },
  // "1197509663070608": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 26",
  //   talkName: "SCRIBE: Asymptotically Optimal Streaming SNARKs",
  //   talkStage: "breakout",
  //   talkDescription: "SCRIBE: Asymptotically Optimal Streaming SNARKs",
  //   talkSpeaker: "Tushar Reddy Mopuri (University of Pennsylvania)",
  //   talkStartTime: "10:30",
  //   talkEndTime: "11:00",
  // },
  // "1319813151791504": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 27",
  //   talkName:
  //     "Application of Graph Methods for Efficient Quotient Polynomial Computation in Halo2",
  //   talkStage: "breakout",
  //   talkDescription:
  //     "Application of Graph Methods for Efficient Quotient Polynomial Computation in Halo2",
  //   talkSpeaker: "Karthik Inbasekar (Ingonyama)",
  //   talkStartTime: "11:00",
  //   talkEndTime: "11:30",
  // },
  // "1186772244830608": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 28",
  //   talkName: "ZK Consensus: One Proof to Rule Them All",
  //   talkStage: "breakout",
  //   talkDescription: "ZK Consensus: One Proof to Rule Them All",
  //   talkSpeaker: "Calum Moore (Payy)",
  //   talkStartTime: "12:00",
  //   talkEndTime: "12:30",
  // },
  // "1220659536796048": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 29",
  //   talkName: "Mopro: Client-Side Proving on Mobile Made Easy",
  //   talkStage: "breakout",
  //   talkDescription: "Mopro: Client-Side Proving on Mobile Made Easy",
  //   talkSpeaker: "Oskar Thoren (Independent)",
  //   talkStartTime: "12:30",
  //   talkEndTime: "13:00",
  // },
  // "1271314381085072": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 30",
  //   talkName: "Polynomial Acceleration for STARK VMs",
  //   talkStage: "breakout",
  //   talkDescription: "Polynomial Acceleration for STARK VMs",
  //   talkSpeaker: "Alan Szepieniec (Neptune)",
  //   talkStartTime: "14:00",
  //   talkEndTime: "14:30",
  // },
  // "1250221796694416": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 31",
  //   talkName: "Anonymous Credentials Based on Programmable Zero-Knowledge",
  //   talkStage: "breakout",
  //   talkDescription:
  //     "Anonymous Credentials Based on Programmable Zero-Knowledge",
  //   talkSpeaker: "Johannes Sedlmeir (SnT, University of Luxembourg)",
  //   talkStartTime: "14:30",
  //   talkEndTime: "15:00",
  // },
  // "1255727944767888": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 32",
  //   talkName: "ZkSnap - End-to-End Private Voting at No Cost to Users",
  //   talkStage: "breakout",
  //   talkDescription: "ZkSnap - End-to-End Private Voting at No Cost to Users",
  //   talkSpeaker: "Rahul Ghangas (Aerius Labs)",
  //   talkStartTime: "15:30",
  //   talkEndTime: "15:45",
  // },
  // "1163601970010512": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 33",
  //   talkName: "Moprheus: Proof of Transformation for AI Provenance",
  //   talkStage: "breakout",
  //   talkDescription: "Moprheus: Proof of Transformation for AI Provenance",
  //   talkSpeaker: "Daniel Bessonov & Rohan Sanjay (Morpheus)",
  //   talkStartTime: "15:45",
  //   talkEndTime: "16:00",
  // },
  // "1188992742922640": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 34",
  //   talkName: "MPC-Enabled Proof Markets",
  //   talkStage: "breakout",
  //   talkDescription: "MPC-Enabled Proof Markets",
  //   talkSpeaker: "Daniel Kales (TACEO)",
  //   talkStartTime: "16:00",
  //   talkEndTime: "16:15",
  // },
  // "1312047850920336": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 35",
  //   talkName: "To Compute or Not to Compute on FPGA, That is The Question",
  //   talkStage: "breakout",
  //   talkDescription:
  //     "To Compute or Not to Compute on FPGA, That is The Question",
  //   talkSpeaker: "Tibor Tribus & Vladimir Marcin (MAYA-ZK)",
  //   talkStartTime: "16:15",
  //   talkEndTime: "16:30",
  // },
  // "1208680873007504": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 36",
  //   talkName:
  //     "ZK in Restricted Environments - Can State-of-the-Art Systems Run on Smartcards?",
  //   talkStage: "breakout",
  //   talkDescription:
  //     "ZK in Restricted Environments - Can State-of-the-Art Systems Run on Smartcards?",
  //   talkSpeaker: "Silur (Independent)",
  //   talkStartTime: "17:00",
  //   talkEndTime: "17:30",
  // },
  // "1136148539054480": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 37",
  //   talkName: "Compiling to ZKVMs",
  //   talkStage: "breakout",
  //   talkDescription: "Compiling to ZKVMs",
  //   talkSpeaker: "Alberto Centelles (Anoma)",
  //   talkStartTime: "17:30",
  //   talkEndTime: "18:00",
  // },
  // "1228356118190480": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 38",
  //   talkName:
  //     "ZK Building Blocks for Electronic ID Verification: from Signature Verification to Mobile Proving",
  //   talkStage: "workshop",
  //   talkDescription:
  //     "ZK Building Blocks for Electronic ID Verification: from Signature Verification to Mobile Proving",
  //   talkSpeaker: "Théo Madzou (Ocelots)",
  //   talkStartTime: "10:30",
  //   talkEndTime: "11:30",
  // },
  // "1152636918503824": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 39",
  //   talkName: "zkPassport: Secure and Private Identity Using Your ePassport",
  //   talkStage: "workshop",
  //   talkDescription:
  //     "zkPassport: Secure and Private Identity Using Your ePassport",
  //   talkSpeaker: "Michael Elliot & Derya Karli (zkPassport)",
  //   talkStartTime: "12:00",
  //   talkEndTime: "13:00",
  // },
  // "1317395085203856": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 40",
  //   talkName: "Insights from and on Taxonomy of ZKP Vulnerabilities",
  //   talkStage: "workshop",
  //   talkDescription: "Insights from and on Taxonomy of ZKP Vulnerabilities",
  //   talkSpeaker: "Gyumin Roh (KALOS)",
  //   talkStartTime: "14:00",
  //   talkEndTime: "15:00",
  // },
  // "1276781874452880": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 41",
  //   talkName: "Let's Build Something Impossible Using Multi-Party FHE",
  //   talkStage: "workshop",
  //   talkDescription: "Let's Build Something Impossible Using Multi-Party FHE",
  //   talkSpeaker: "Janmajaya Mall (Gauss Labs)",
  //   talkStartTime: "15:30",
  //   talkEndTime: "16:30",
  // },
  // "1205326503549328": {
  //   box: "brown",
  //   type: "talk",
  //   label: "talk 42",
  //   talkName:
  //     "Securing Tomorrow: A Deep Dive into ZK for Automated Regulatory Compliance",
  //   talkStage: "workshop",
  //   talkDescription:
  //     "Securing Tomorrow: A Deep Dive into ZK for Automated Regulatory Compliance",
  //   talkSpeaker: "Maya Krasovsky (Independent)",
  //   talkStartTime: "17:00",
  //   talkEndTime: "18:00",
  // },
  // END TALK CARDS
  // BEGIN SPEAKER CARDS
  "12": {
    box: "two",
    type: "person",
    label: "speaker 1",
    isPersonSpeaker: true,
  },
  "13": {
    box: "two",
    type: "person",
    label: "speaker 2",
    isPersonSpeaker: true,
  },
  "14": {
    box: "two",
    type: "person",
    label: "speaker 3",
    isPersonSpeaker: true,
  },
  "15": {
    box: "two",
    type: "person",
    label: "speaker 4",
    isPersonSpeaker: true,
  },
  "16": {
    box: "two",
    type: "person",
    label: "speaker 5",
    isPersonSpeaker: true,
  },
  "17": {
    box: "two",
    type: "person",
    label: "speaker 6",
    isPersonSpeaker: true,
  },
  "18": {
    box: "two",
    type: "person",
    label: "speaker 7",
    isPersonSpeaker: true,
  },
  "19": {
    box: "two",
    type: "person",
    label: "speaker 8",
    isPersonSpeaker: true,
  },
  "20": {
    box: "two",
    type: "person",
    label: "speaker 9",
    isPersonSpeaker: true,
  },
  "21": {
    box: "two",
    type: "person",
    label: "speaker 10",
    isPersonSpeaker: true,
  },
  "22": {
    box: "two",
    type: "person",
    label: "speaker 11",
    isPersonSpeaker: true,
  },
  "23": {
    box: "two",
    type: "person",
    label: "speaker 12",
    isPersonSpeaker: true,
  },
  "24": {
    box: "two",
    type: "person",
    label: "speaker 13",
    isPersonSpeaker: true,
  },
  "25": {
    box: "two",
    type: "person",
    label: "speaker 14",
    isPersonSpeaker: true,
  },
  "26": {
    box: "two",
    type: "person",
    label: "speaker 15",
    isPersonSpeaker: true,
  },
  "27": {
    box: "two",
    type: "person",
    label: "speaker 16",
    isPersonSpeaker: true,
  },
  "28": {
    box: "two",
    type: "person",
    label: "speaker 17",
    isPersonSpeaker: true,
  },
  "29": {
    box: "two",
    type: "person",
    label: "speaker 18",
    isPersonSpeaker: true,
  },
  "30": {
    box: "two",
    type: "person",
    label: "speaker 19",
    isPersonSpeaker: true,
  },
  "31": {
    box: "two",
    type: "person",
    label: "speaker 20",
    isPersonSpeaker: true,
  },
  "32": {
    box: "two",
    type: "person",
    label: "speaker 21",
    isPersonSpeaker: true,
  },
  "33": {
    box: "two",
    type: "person",
    label: "speaker 22",
    isPersonSpeaker: true,
  },
  "34": {
    box: "two",
    type: "person",
    label: "speaker 23",
    isPersonSpeaker: true,
  },
  "35": {
    box: "two",
    type: "person",
    label: "speaker 24",
    isPersonSpeaker: true,
  },
  "36": {
    box: "two",
    type: "person",
    label: "speaker 25",
    isPersonSpeaker: true,
  },
  "37": {
    box: "two",
    type: "person",
    label: "speaker 26",
    isPersonSpeaker: true,
  },
  "38": {
    box: "two",
    type: "person",
    label: "speaker 27",
    isPersonSpeaker: true,
  },
  "39": {
    box: "two",
    type: "person",
    label: "speaker 28",
    isPersonSpeaker: true,
  },
  "40": {
    box: "two",
    type: "person",
    label: "speaker 29",
    isPersonSpeaker: true,
  },
  "41": {
    box: "two",
    type: "person",
    label: "speaker 30",
    isPersonSpeaker: true,
  },
  "42": {
    box: "two",
    type: "person",
    label: "speaker 31",
    isPersonSpeaker: true,
  },
  "43": {
    box: "two",
    type: "person",
    label: "speaker 32",
    isPersonSpeaker: true,
  },
  "44": {
    box: "two",
    type: "person",
    label: "speaker 33",
    isPersonSpeaker: true,
  },
  "45": {
    box: "two",
    type: "person",
    label: "speaker 34",
    isPersonSpeaker: true,
  },
  "46": {
    box: "two",
    type: "person",
    label: "speaker 35",
    isPersonSpeaker: true,
  },
  "47": {
    box: "two",
    type: "person",
    label: "speaker 36",
    isPersonSpeaker: true,
  },
  "48": {
    box: "two",
    type: "person",
    label: "speaker 37",
    isPersonSpeaker: true,
  },
  "49": {
    box: "two",
    type: "person",
    label: "speaker 38",
    isPersonSpeaker: true,
  },
  "50": {
    box: "two",
    type: "person",
    label: "speaker 39",
    isPersonSpeaker: true,
  },
};
