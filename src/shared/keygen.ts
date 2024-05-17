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
    isPersonSpeaker: false,
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
    isPersonSpeaker: false,
  },
  "5": {
    box: "brown",
    type: "person",
    label: "vivek 2",
    isPersonSpeaker: false,
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
  "12": {
    box: "two",
    type: "person",
    label: "speaker 1",
    isPersonSpeaker: false,
  },
  "13": {
    box: "two",
    type: "person",
    label: "speaker 2",
    isPersonSpeaker: false,
  },
  "14": {
    box: "two",
    type: "person",
    label: "speaker 3",
    isPersonSpeaker: false,
  },
  "15": {
    box: "two",
    type: "person",
    label: "speaker 4",
    isPersonSpeaker: false,
  },
  "16": {
    box: "two",
    type: "person",
    label: "speaker 5",
    isPersonSpeaker: false,
  },
  "17": {
    box: "two",
    type: "person",
    label: "speaker 6",
    isPersonSpeaker: false,
  },
  "18": {
    box: "two",
    type: "person",
    label: "speaker 7",
    isPersonSpeaker: false,
  },
  "19": {
    box: "two",
    type: "person",
    label: "speaker 8",
    isPersonSpeaker: false,
  },
  "20": {
    box: "two",
    type: "person",
    label: "speaker 9",
    isPersonSpeaker: false,
  },
  "21": {
    box: "two",
    type: "person",
    label: "speaker 10",
    isPersonSpeaker: false,
  },
  "22": {
    box: "two",
    type: "person",
    label: "speaker 11",
    isPersonSpeaker: false,
  },
  "23": {
    box: "two",
    type: "person",
    label: "speaker 12",
    isPersonSpeaker: false,
  },
  "24": {
    box: "two",
    type: "person",
    label: "speaker 13",
    isPersonSpeaker: false,
  },
  "25": {
    box: "two",
    type: "person",
    label: "speaker 14",
    isPersonSpeaker: false,
  },
  "26": {
    box: "two",
    type: "person",
    label: "speaker 15",
    isPersonSpeaker: false,
  },
  "27": {
    box: "two",
    type: "person",
    label: "speaker 16",
    isPersonSpeaker: false,
  },
  "28": {
    box: "two",
    type: "person",
    label: "speaker 17",
    isPersonSpeaker: false,
  },
  "29": {
    box: "two",
    type: "person",
    label: "speaker 18",
    isPersonSpeaker: false,
  },
  "30": {
    box: "two",
    type: "person",
    label: "speaker 19",
    isPersonSpeaker: false,
  },
  "31": {
    box: "two",
    type: "person",
    label: "speaker 20",
    isPersonSpeaker: false,
  },
  "32": {
    box: "two",
    type: "person",
    label: "speaker 21",
    isPersonSpeaker: false,
  },
  "33": {
    box: "two",
    type: "person",
    label: "speaker 22",
    isPersonSpeaker: false,
  },
  "34": {
    box: "two",
    type: "person",
    label: "speaker 23",
    isPersonSpeaker: false,
  },
  "35": {
    box: "two",
    type: "person",
    label: "speaker 24",
    isPersonSpeaker: false,
  },
  "36": {
    box: "two",
    type: "person",
    label: "speaker 25",
    isPersonSpeaker: false,
  },
  "37": {
    box: "two",
    type: "person",
    label: "speaker 26",
    isPersonSpeaker: false,
  },
  "38": {
    box: "two",
    type: "person",
    label: "speaker 27",
    isPersonSpeaker: false,
  },
  "39": {
    box: "two",
    type: "person",
    label: "speaker 28",
    isPersonSpeaker: false,
  },
  "40": {
    box: "two",
    type: "person",
    label: "speaker 29",
    isPersonSpeaker: false,
  },
  "41": {
    box: "two",
    type: "person",
    label: "speaker 30",
    isPersonSpeaker: false,
  },
  "42": {
    box: "two",
    type: "person",
    label: "speaker 31",
    isPersonSpeaker: false,
  },
  "43": {
    box: "two",
    type: "person",
    label: "speaker 32",
    isPersonSpeaker: false,
  },
  "44": {
    box: "two",
    type: "person",
    label: "speaker 33",
    isPersonSpeaker: false,
  },
  "45": {
    box: "two",
    type: "person",
    label: "speaker 34",
    isPersonSpeaker: false,
  },
  "46": {
    box: "two",
    type: "person",
    label: "speaker 35",
    isPersonSpeaker: false,
  },
  "47": {
    box: "two",
    type: "person",
    label: "speaker 36",
    isPersonSpeaker: false,
  },
  "48": {
    box: "two",
    type: "person",
    label: "speaker 37",
    isPersonSpeaker: false,
  },
  "49": {
    box: "two",
    type: "person",
    label: "speaker 38",
    isPersonSpeaker: false,
  },
  "50": {
    box: "two",
    type: "person",
    label: "speaker 39",
    isPersonSpeaker: false,
  },
  "51": {
    box: "brown",
    type: "talk",
    label: "talk 1",
    talkName: "MynaWallet",
    talkStage: "main",
    talkDescription: `​MynaWallet is AA wallet operated by Japanese national ID card that guarantees the security of a hardware wallet and sybil resistance. By leveraging zero-knowledge proofs, one's on-chain activity is not linked with their national ID card and users can publicly prove properties about their identity without actually revealing who they are.
    
    ​MynaWalletは、日本のマイナンバーカードによって運営されるAAウォレットであり、ハードウェアウォレットの安全性と耐シビル性を保証します。
    
    ​ゼロ知識証明を活用することで、チェーン上での活動がマイナンバーカードとリンクされることはなく、ユーザーは自分が誰であるかを実際に明かすことなく、自身の身元に関する特性を公に証明することができます。
    `,
    talkSpeaker: "Nico and Hiro",
    talkStartTime: "10:00",
    talkEndTime: "10:30",
  },
  "52": {
    box: "brown",
    type: "talk",
    label: "talk 2",
    talkName: "Proof of Passport",
    talkStage: "main",
    talkDescription: `Proof of Passport lets users use their passport to generate zero-knowledge proofs of humanity, nationality or age while staying privacy-preserving.

    ​Proof of Passportは、パスポートを使用して、プライバシーを保護しながら、人間であること、国籍、年齢をゼロ知識で証明することができます。
    `,
    talkSpeaker: "Florent and Rémi",
    talkStartTime: "10:30",
    talkEndTime: "11:00",
  },
  "53": {
    box: "brown",
    type: "talk",
    label: "talk 3",
    talkName: "Cursive NFC Activations",
    talkStage: "main",
    talkDescription: `​Cursive focuses on consumer-facing apps of signed data to provide users with data ownership and authenticity. We create tangible, interactive experiences to better educate average people on signatures and other advanced cryptography. We are primarily focused on signatures from NFC and emails.
    
    ​Cursiveは、署名付きデータの消費者向けアプリケーションに焦点を当て、ユーザーにデータの所有権と信頼性を提供しています。
    
    ​私たちは、署名やその他の高度な暗号技術について一般の人々をよりよく啓発するために、具体的でインタラクティブな体験を創造します。主にNFCと電子メールによる署名に焦点を当てています。
    `,
    talkSpeaker: "Vivek and Andrew",
    talkStartTime: "11:00",
    talkEndTime: "11:30",
  },
  "54": {
    box: "two",
    type: "person",
    label: "speaker 25",
    isPersonSpeaker: false,
  },
  "55": {
    box: "two",
    type: "person",
    label: "speaker 26",
    isPersonSpeaker: false,
  },
  "56": {
    box: "two",
    type: "person",
    label: "speaker 27",
    isPersonSpeaker: false,
  },
  "57": {
    box: "two",
    type: "person",
    label: "speaker 28",
    isPersonSpeaker: false,
  },
  "58": {
    box: "two",
    type: "person",
    label: "speaker 29",
    isPersonSpeaker: false,
  },
  "59": {
    box: "two",
    type: "person",
    label: "speaker 30",
    isPersonSpeaker: false,
  },
  "60": {
    box: "two",
    type: "person",
    label: "speaker 31",
    isPersonSpeaker: false,
  },
  "61": {
    box: "two",
    type: "person",
    label: "speaker 32",
    isPersonSpeaker: false,
  },
  "62": {
    box: "two",
    type: "person",
    label: "speaker 33",
    isPersonSpeaker: false,
  },
  "63": {
    box: "two",
    type: "person",
    label: "speaker 34",
    isPersonSpeaker: false,
  },
  "64": {
    box: "two",
    type: "person",
    label: "speaker 35",
    isPersonSpeaker: false,
  },
  "65": {
    box: "two",
    type: "person",
    label: "speaker 36",
    isPersonSpeaker: false,
  },
};
