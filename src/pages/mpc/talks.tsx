import React, { useEffect, useState } from "react";
import { AppBackHeader } from "@/components/AppHeader";
import { Button } from "@/components/Button";
/* @ts-ignore */
import { JIFFClient, JIFFClientBigNumber } from "jiff-mpc";
import { toast } from "sonner";
import Rating from "@mui/material/Rating";
import { Input } from "@/components/Input";
import { getAuthToken } from "@/lib/client/localStorage";
import { Room, RoomMember } from "@prisma/client";
import { Spinner } from "@/components/Spinner";
import { classed } from "@tw-classed/react";

enum OutputState {
  NOT_CONNECTED,
  AWAITING_OTHER_PARTIES_CONNECTION,
  CONNECTED,
  AWAITING_OTHER_PARTIES_INPUTS,
  COMPUTING,
  SHOW_RESULTS,
  ERROR,
}

const Title = classed.h3("block font-sans text-iron-950", {
  variants: {
    size: {
      small: "text-base leading-1 font-semibold",
      medium: "text-[21px] leading-5 font-medium",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

const Description = classed.span("text-md text-iron-600 leading-5");

const fruits = [
  "Memory checking in IVC-based zkVMs (Jens Groth)",
  "From IVCs to RCGs (Ariel Gabizon)",
  "Circom buses: the power to structure ZK circuits (Albert Rubio)",
  "Building cryptographic apps for human connection (Vivek Bhupatiraju & Andrew Lu)",
  "Analyzing and Benchmarking ZK-Rollups (Stefanos Chaliasos)",
  "WHIR: Reed–Solomon Proximity Testing with Super-Fast Verification (Eylon Yogev)",
  "Make Web3 use Web2: verifiable SQL db for contracts (nikkolasg)",
  "ZK Trust Legos: Luring Web2 Onchain with ZK Primitives (alizk)",
  "Zirgen: A Novel DSL for Writing Efficient zk-STARK Circuits (Jacob Weightman)",
  "Abstractions for a multi-prover zkVM (Georg Wiese)",
  "MegaPlonk. Or, how I learned to stop worrying and love the plonk. (Zac Williamson)",
];

export default function Talks() {
  const [createRoomName, setCreateRoomName] = useState<string>();
  const [createRoomPassword, setCreateRoomPassword] = useState<string>("");
  const [createRoomPartyCount, setCreateRoomPartyCount] = useState<number>();
  const [hasCreatedRoom, setHasCreatedRoom] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>();
  const [allRooms, setAllRooms] = useState<
    Record<string, Room & { members: RoomMember[] }>
  >({});
  const [jiffClient, setJiffClient] = useState<typeof JIFFClient | null>(null);
  const [ratings, setRatings] = useState<number[]>(
    Array(fruits.length).fill(0)
  );
  const [output, setOutput] = useState<OutputState>(OutputState.NOT_CONNECTED);
  const [avgResults, setAvgResults] = useState<number[]>([]);
  const [stdResults, setStdResults] = useState<number[]>([]);
  const [loadingRooms, setLoadingRooms] = useState<boolean>(true);
  const [loadingCreateRoom, setLoadingCreateRoom] = useState<boolean>(false);
  const [loadingJoin, setLoadingJoin] = useState<number>();

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("/api/mpc/get_all_rooms");
      const { rooms } = await response.json();
      const roomsMapping = rooms.reduce(
        (acc: Record<string, Room>, room: Room) => {
          acc[room.name] = room;
          return acc;
        },
        {}
      );
      setCreateRoomName(undefined);
      setCreateRoomPartyCount(undefined);
      setCreateRoomPassword("");
      setLoadingRooms(false);
      setAllRooms(roomsMapping);
    };
    fetchRooms();
  }, []);

  const handleCreateRoom = async () => {
    setLoadingCreateRoom(true);
    if (!createRoomName || !createRoomPartyCount) {
      setLoadingCreateRoom(false);
      return toast.error("Please fill in all fields");
    }

    const newRoomName = "TALKS-" + createRoomName;

    if (createRoomPartyCount < 2) {
      setLoadingCreateRoom(false);
      return toast.error("Party count must be at least 2");
    }

    if (/\s/.test(createRoomName)) {
      setLoadingCreateRoom(false);
      return toast.error("Room name cannot contain whitespace");
    }

    const response = await fetch("/api/mpc/create_room", {
      method: "POST",
      body: JSON.stringify({
        name: newRoomName,
        numParties: createRoomPartyCount,
        password: createRoomPassword,
      }),
    });

    if (response.ok) {
      const response = await fetch("/api/mpc/get_all_rooms");
      const { rooms } = await response.json();
      const roomsMapping = rooms.reduce(
        (acc: Record<string, Room>, room: Room) => {
          acc[room.name] = room;
          return acc;
        },
        {}
      );
      setAllRooms(roomsMapping);
      setRoomName(newRoomName);
      setHasCreatedRoom(true);
      connect(newRoomName, createRoomPartyCount);
      toast.success("Room created successfully");
    } else {
      const { error } = await response.json();
      toast.error(error);
    }
    setLoadingCreateRoom(false);
  };

  const connect = (roomName: string, numParties: number) => {
    if (!roomName || numParties < 2) {
      toast.error("Please enter a valid room name and party count.");
      return;
    }

    const client = new JIFFClient(
      "https://mpc-fruits-zk-summit-12.onrender.com",
      roomName,
      {
        autoConnect: false,
        party_count: numParties,
        crypto_provider: true,
        Zp: 4093,
        // @ts-ignore
        onError: (_, error) => {
          console.error(error);
          if (
            error.includes("Maximum parties capacity reached") ||
            error.includes("contradicting party count")
          ) {
            setLoadingJoin(undefined);
            setLoadingCreateRoom(false);
            toast.error("Computation is full. Try another computation ID.");
          }
          setOutput(OutputState.ERROR);
        },
        onConnect: () => {
          console.log("Connected to server");
          setOutput(OutputState.CONNECTED);
        },
      }
    );

    client.apply_extension(JIFFClientBigNumber, {});
    client.connect();
    setOutput(OutputState.AWAITING_OTHER_PARTIES_CONNECTION);
    setJiffClient(client);
  };

  /**
   * MPC sorts
   */

  const mpcMax = (arr: any[]) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const cmp = arr[i].slt(max);
      max = cmp.if_else(max, arr[i]);
    }
    return max;
  };

  const mpcBubbleSort = (arr: any[]) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        const a = arr[j];
        const b = arr[j + 1];
        const cmp = a.slt(b);
        arr[j] = cmp.if_else(a, b);
        arr[j + 1] = cmp.if_else(b, a);
      }
    }

    return arr;
  };

  function oddEvenSort(a: any, lo: any, n: any) {
    if (n > 1) {
      const m = Math.floor(n / 2);
      oddEvenSort(a, lo, m);
      oddEvenSort(a, lo + m, m);
      oddEvenMerge(a, lo, n, 1);
    }
  }

  // lo: lower bound of indices, n: number of elements, r: step
  function oddEvenMerge(a: any, lo: any, n: any, r: any) {
    const m = r * 2;
    if (m < n) {
      oddEvenMerge(a, lo, n, m);
      oddEvenMerge(a, lo + r, n, m);

      for (let i = lo + r; i + r < lo + n; i += m) {
        compareExchange(a, i, i + r);
      }
    } else if (m === n) {
      compareExchange(a, lo, lo + r);
    }
  }

  function compareExchange(a: any, i: any, j: any) {
    if (j >= a.length || i >= a.length) {
      return;
    }

    const x = a[i];
    const y = a[j];

    const cmp = x.lt(y);
    a[i] = cmp.if_else(x, y);
    a[j] = cmp.if_else(y, x);
  }

  const submit = async () => {
    if (ratings.some((rating) => rating < 1 || rating > 5)) {
      toast.error("All ratings must be between 1 and 5.");
      return;
    }

    setOutput(OutputState.AWAITING_OTHER_PARTIES_INPUTS);

    if (jiffClient) {
      const newRatings = ratings.map((rating) => rating * 11);
      console.log(`Beginning MPC with ratings ${newRatings}`);
      let shares = await jiffClient.share_array(newRatings);
      console.log("Shares: ", shares);
      setOutput(OutputState.COMPUTING);

      // Start average computation
      const startAverageTime = Date.now();

      let sumShares: any[] = [];
      for (let i = 1; i <= jiffClient.party_count; i++) {
        for (let j = 0; j < fruits.length; j++) {
          if (i === 1) {
            sumShares.push(shares[i][j]);
          } else {
            sumShares[j] = sumShares[j].sadd(shares[i][j]);
          }
        }
      }

      for (let j = 0; j < fruits.length; j++) {
        sumShares[j] = sumShares[j].cadd(j);
      }

      const maxShare = mpcMax(sumShares);
      const max = await jiffClient.open(maxShare);
      console.log("max", max);

      const averageTime = Date.now() - startAverageTime;
      console.log("Ranking Time: ", averageTime);

      setAvgResults([max]);
      setOutput(OutputState.SHOW_RESULTS);
      toast.success(`MPC runtime: ${averageTime}`);

      console.log("ending", hasCreatedRoom);
    }
  };

  const getButtonDisplay = (): string => {
    switch (output) {
      case OutputState.NOT_CONNECTED:
        return "Connect";
      case OutputState.AWAITING_OTHER_PARTIES_CONNECTION:
        return "Awaiting other parties connection...";
      case OutputState.CONNECTED:
        return "Submit ratings to proceed!";
      case OutputState.AWAITING_OTHER_PARTIES_INPUTS:
        return "Awaiting other parties inputs...";
      case OutputState.COMPUTING:
        return "Computing...";
      case OutputState.SHOW_RESULTS:
        return "Here is the top talk!";
      case OutputState.ERROR:
        return "Error - please try again";
    }
  };

  if (roomName) {
    return (
      <div>
        <AppBackHeader
          onBackClick={() => {
            if (output !== OutputState.SHOW_RESULTS) {
              let choice = window.confirm(
                "Are you sure you want to leave? This will end the computation for the entire room."
              );
              if (choice) {
                setRoomName(undefined);
              }
            } else {
              setRoomName(undefined);
            }
          }}
        />

        <div className="flex flex-col gap-6 h-modal">
          <div className="flex flex-col gap-4">
            <span className="text-lg xs:text-xl text-iron-950 leading-6 font-medium">
              {`🥇 Top main stage talk`}
            </span>
            <span className="text-iron-600 text-sm font-normal">{`Rate the workshop talks with your friends, and find out the crowd favorite without revealing the ratings of any other ones!`}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg xs:text-xl text-iron-950 leading-6 font-medium">
              {roomName.slice(6)}
            </span>
            <Description>{getButtonDisplay()}</Description>
          </div>
          <div>
            {output === OutputState.CONNECTED && (
              <div className="mb-16">
                {fruits.map((fruit, index) => (
                  <div key={index} className="mb-4">
                    <label className="block text-black mb-2">{fruit}</label>
                    <Rating
                      name={`rating-${index}`}
                      value={ratings[index]}
                      onChange={(event, newValue) => {
                        const newRatings = [...ratings];
                        newRatings[index] = newValue || 0;
                        setRatings(newRatings);
                      }}
                      max={5}
                    />
                  </div>
                ))}
                <Button onClick={submit}>Submit</Button>
              </div>
            )}
            {output === OutputState.SHOW_RESULTS && (
              <div className="text-black">
                {avgResults.map((el, ind) => (
                  <div className="flex flex-col gap-4" key={ind}>
                    {`#${ind + 1} `}
                    {fruits[el % fruits.length]}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AppBackHeader />

      <div className="flex flex-col gap-6 h-modal">
        <div className="flex flex-col gap-4">
          <span className="text-lg xs:text-xl text-iron-950 leading-6 font-medium">
            {`🥇 Top main stage talk`}
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-iron-600 text-sm font-normal">
              <span className="text-iron-600 text-sm font-normal">{`Rate the workshop talks with your friends, and find out the crowd favorite without revealing the ratings of any other ones!`}</span>
            </span>
            <span className="text-iron-600 text-sm font-normal">
              {`Note: even with 2 people, this will take ~1 minute. Comparison is really slow in SS-MPC. And it gets quadratically worse with more parties! Reload if you don't see a room.`}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Title>Join a room</Title>
            <div className="flex flex-col gap-2">
              {loadingRooms ? (
                <Spinner />
              ) : Object.values(allRooms).filter(
                  (room) =>
                    room.members.length < room.numParties &&
                    room.name.startsWith("TALKS-")
                ).length === 0 ? (
                <span className="text-iron-600 text-sm font-normal">
                  No rooms available
                </span>
              ) : (
                Object.values(allRooms).map((room) =>
                  room.members.length < room.numParties &&
                  room.name.startsWith("TALKS-") ? (
                    <div
                      key={room.id}
                      className="flex items-center justify-between"
                    >
                      <Description>
                        {room.name.slice(6)} ({room.members.length}/
                        {room.numParties} members)
                      </Description>
                      <div className="max-w-[100px] ml-auto py-2">
                        <Button
                          size="small"
                          variant="tertiary"
                          disabled={
                            loadingJoin !== undefined && loadingJoin !== room.id
                          }
                          loading={loadingJoin === room.id}
                          onClick={async () => {
                            let password = window.prompt(
                              "Enter room password."
                            );

                            if (password === null) {
                              password = "";
                            }

                            setLoadingJoin(room.id);

                            const response = await fetch("/api/mpc/join_room", {
                              method: "POST",
                              body: JSON.stringify({
                                roomId: room.id,
                                password: password,
                              }),
                            });
                            if (!response.ok) {
                              const { error } = await response.json();
                              setLoadingJoin(undefined);
                              return toast.error(error);
                            }

                            setRoomName(room.name);
                            setHasCreatedRoom(false);
                            connect(room.name, room.numParties);
                            setLoadingJoin(undefined);
                          }}
                        >
                          Join
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex flex-col gap-1 ">
              <Title>Create new room</Title>
            </div>
            <Input
              label="Room name"
              value={createRoomName}
              onChange={(e) => setCreateRoomName(e.target.value)}
            />
            <Input
              label="Party count"
              type="number"
              value={createRoomPartyCount}
              onChange={(e) =>
                e.target.value
                  ? setCreateRoomPartyCount(Number(e.target.value))
                  : setCreateRoomPartyCount(undefined)
              }
            />
            <Input
              label="Password"
              value={createRoomPassword}
              onChange={(e) => setCreateRoomPassword(e.target.value)}
            />
            <Button onClick={handleCreateRoom} loading={loadingCreateRoom}>
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Talks.getInitialProps = () => {
  return { showHeader: false, showFooter: false };
};
