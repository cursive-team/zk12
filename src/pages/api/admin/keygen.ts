import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/server/prisma";
import { generateSignatureKeyPair } from "@/lib/shared/signature";
import { allCardUids, allSpeakerUids } from "@/shared/keygen";
import { getServerRandomNullifierRandomness } from "@/lib/server/proving";

type CreateChipKeyData = {
  chipId: string;
  signaturePublicKey: string;
  signaturePrivateKey: string;
};

type PrecreateUserData = {
  chipId: string;
  isRegistered: boolean;
  isUserSpeaker: boolean;
  displayName: string;
  encryptionPublicKey: string;
  signaturePublicKey: string;
  psiPublicKeysLink: string;
};

type CreateLocationData = {
  id: number;
  chipId: string;
  name: string;
  stage: string;
  speaker: string;
  description: string;
  startTime: string;
  endTime: string;
  signaturePublicKey: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const password = req.body.password;
  if (password !== process.env.KEYGEN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // const existingChipKey = await prisma.chipKey.findFirst();
  // if (existingChipKey) {
  //   return res.status(400).json({ error: "Chip keys already exist" });
  // }

  try {
    const allUserIds: number[] = [];
    const speakerUserIds: number[] = [];

    const allChipKeyData: CreateChipKeyData[] = [];
    const allUserData: PrecreateUserData[] = [];

    let userIndex = 1;
    for (const chipUid of allCardUids) {
      // Generate and save signing keypair
      const { signingKey, verifyingKey } = generateSignatureKeyPair();
      allChipKeyData.push({
        chipId: chipUid,
        signaturePublicKey: verifyingKey,
        signaturePrivateKey: signingKey,
      });

      allUserIds.push(userIndex);

      if (!allSpeakerUids.includes(chipUid)) {
        allUserData.push({
          chipId: chipUid,
          isRegistered: false,
          isUserSpeaker: false,
          displayName: chipUid,
          encryptionPublicKey: "",
          signaturePublicKey: verifyingKey,
          psiPublicKeysLink: "",
        });
      } else {
        allUserData.push({
          chipId: chipUid,
          isRegistered: false,
          isUserSpeaker: true,
          displayName: chipUid,
          encryptionPublicKey: "",
          signaturePublicKey: verifyingKey,
          psiPublicKeysLink: "",
        });
        speakerUserIds.push(userIndex);
      }

      userIndex++;
    }

    const newKeyUids = [];
    for (let i = 1; i <= 50; i++) {
      newKeyUids.push("CURSIVE" + i.toString().padStart(2, "0"));
    }

    for (const chipId of newKeyUids) {
      // Generate and save signing keypair
      const { signingKey, verifyingKey } = generateSignatureKeyPair();
      allChipKeyData.push({
        chipId,
        signaturePublicKey: verifyingKey,
        signaturePrivateKey: signingKey,
      });

      allUserData.push({
        chipId,
        isRegistered: false,
        isUserSpeaker: false,
        displayName: chipId,
        encryptionPublicKey: "",
        signaturePublicKey: verifyingKey,
        psiPublicKeysLink: "",
      });
    }

    // Create all chip keys
    await prisma.chipKey.createMany({
      data: allChipKeyData,
    });

    // Create all users
    await prisma.user.createMany({
      data: allUserData,
    });

    // BEGIN HARDCODED QUESTS FOR ZK Summit 12

    // Quest 1: Meet 10 attendees
    await prisma.quest.create({
      data: {
        name: "🦋 Social Butterfly",
        description:
          "Connect with 10 people to make this proof & collect 2 extra NFC badges to take home!",
        userRequirements: {
          create: [
            {
              name: "Connect with 10 attendees at ZK Summit 12",
              numSigsRequired: 10,
              sigNullifierRandomness: getServerRandomNullifierRandomness(), // Ensures signatures cannot be reused to meet this requirement
              users: {
                connect: allUserIds.map((id) => ({ id })),
              },
            },
          ],
        },
        locationRequirements: {
          create: [],
        },
      },
    });

    // Quest 2: Meet 3 speakers
    await prisma.quest.create({
      data: {
        name: "🎤 Speaker Whisperer",
        description:
          "Ask 3 speakers a question or share feedback about their talk!",
        userRequirements: {
          create: [
            {
              name: "Connect with 3 speakers at ZK Summit 12",
              numSigsRequired: 3,
              sigNullifierRandomness: getServerRandomNullifierRandomness(), // Ensures signatures cannot be reused to meet this requirement
              users: {
                connect: speakerUserIds.map((id) => ({ id })),
              },
            },
          ],
        },
        locationRequirements: {
          create: [],
        },
      },
    });

    // Quest 3: 33 taps for a ring
    await prisma.quest.create({
      data: {
        name: "💍 5 Rings To Rule Them All",
        description:
          "Be one of the first 5 to collect 33 taps to claim one of Cursive's exclusive NFC rings.",
        userRequirements: {
          create: [],
        },
        locationRequirements: {
          create: [
            {
              name: "Tap 33 badges at ZK Summit 12",
              numSigsRequired: 33,
              sigNullifierRandomness: getServerRandomNullifierRandomness(), // Ensures signatures cannot be reused to meet this requirement
              locations: {
                connect: allUserIds.map((id) => ({ id })),
              },
            },
          ],
        },
      },
    });

    // END HARDCODED QUESTS FOR ZK Summit

    res.status(200).json({});
  } catch (error) {
    console.log("Failed to generate keys", error);
    res.status(500).json({ error: "Failed to generate keys" });
  }
}
