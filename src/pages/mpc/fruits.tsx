import React from "react";
import { AppBackHeader } from "@/components/AppHeader";
import { Button } from "@/components/Button";

export default function Fruits() {
  return (
    <div>
      <AppBackHeader />

      <div className="flex flex-col gap-6 h-modal">
        <div className="flex flex-col gap-6">
          <span className="text-lg xs:text-xl text-iron-950 leading-6 font-medium">
            🍎 Rate fruits
          </span>
          <span className="text-iron-600 text-sm font-normal">{`Rate some fruits with your friends, discover how aligned you
                    are without revealing any specific votes. Votes happen in
                    batches of 10.`}</span>
        </div>

        <div className="flex flex-col gap-6 mb-4">Fruits here</div>
        <Button disabled={true}>Submit ratings</Button>
      </div>
    </div>
  );
}

Fruits.getInitialProps = () => {
  return { showHeader: false, showFooter: false };
};
