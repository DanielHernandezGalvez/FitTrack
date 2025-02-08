import React from "react";
import WeightDisplay from "../components/WeightDisplay";
import BlockList from "../components/BlockList";
import { AppState } from "../interfaces";
import GymAttendance from "../components/GymAssistance";

interface HomePageProps {
  appState: AppState;
}

const HomePage: React.FC<HomePageProps> = ({ appState }) => {
  return (
    <div className="flex flex-col justify-center items-center h-3/4 pt-5">
        <GymAttendance />
      <WeightDisplay currentWeight={appState.currentWeight} previousWeight={appState.previousWeight} />
      <BlockList blocks={appState.blocks} allCompleted={appState.allCompleted} />
    </div>
  );
};

export default HomePage;