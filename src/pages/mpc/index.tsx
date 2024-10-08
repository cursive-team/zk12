import Link from "next/link";
import React from "react";
import { Card } from "@/components/cards/Card";

export default function MPCPage() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <span className="text-iron-600 font-sans text-sm">
        Perform privacy-preserving computations with a group of attendees! This
        includes statistics, sorting, and a Karma Calculator game from Barry
        WhiteHat.
      </span>

      {/* <Link href={`/mpc/fruits`}>
        <Card.Base className="flex flex-col gap-4 p-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <Card.Title className="text-iron-950 text-sm font-bold">
                  🍎 Rate fruits
                </Card.Title>
                <span className="text-xs font-iron-600 font-sans">
                  Rate some fruits with your friends, discover how aligned you
                  are. Computes average and standard deviation without revealing
                  individual ratings.
                </span>
              </div>
            </div>
          </div>
        </Card.Base>
      </Link> */}

      <Link href={`/mpc/topics`}>
        <Card.Base className="flex flex-col gap-4 p-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <Card.Title className="text-iron-950 text-sm font-bold">
                  🔐 Rate cryptographic topics
                </Card.Title>
                <span className="text-xs font-iron-600 font-sans">
                  Rate cryptographic topics with your friends, discover how
                  aligned you are. Computes average and standard deviation
                  without revealing individual ratings.
                </span>
              </div>
            </div>
          </div>
        </Card.Base>
      </Link>

      <Link href={`/mpc/talks`}>
        <Card.Base className="flex flex-col gap-4 p-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <Card.Title className="text-iron-950 text-sm font-bold">
                  🥇 Top main stage talk
                </Card.Title>
                <span className="text-xs font-iron-600 font-sans">
                  {`Rate some talks, only reveal the crowd favorite.
                  Learn about which one was most interesting without putting
                  down other speakers.`}
                </span>
              </div>
            </div>
          </div>
        </Card.Base>
      </Link>

      <Link href={`/mpc/karma`}>
        <Card.Base className="flex flex-col gap-4 p-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <Card.Title className="text-iron-950 text-sm font-bold">
                  ✨ Karma calculator
                </Card.Title>
                <span className="text-xs font-iron-600 font-sans">
                  {`Update each other's karma privately, only reveal the net karma
                  given/received at the end of the round. Concept from Barry WhiteHat.`}
                </span>
              </div>
            </div>
          </div>
        </Card.Base>
      </Link>
    </div>
  );
}
