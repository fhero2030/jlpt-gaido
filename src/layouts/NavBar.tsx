import React from "react";
import ScreenContainer from "./ScreenContainer";

const NavBar: React.FC = () => {
  return (
    <header className="w-full bg-secodary">
      <ScreenContainer
        as="nav"
        className="mx-auto flex items-center justify-between px-16 py-4"
      >
        <h1 className="text-lg font-semibold">
          JLPT <span className="text-highlights">ガイド</span>
        </h1>

        <button className="rounded-md border-2 px-6 py-2 text-sm">Login</button>
      </ScreenContainer>
    </header>
  );
};

export default NavBar;
