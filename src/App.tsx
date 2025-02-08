import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import { AppState, Block } from "./interfaces";

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(() => {
    const savedState = localStorage.getItem("appState");
    return savedState
      ? JSON.parse(savedState)
      : {
          currentWeight: 0,
          previousWeight: null,
          blocks: [
            { id: "1", name: "Desayuno", completed: false, content: "" },
            { id: "2", name: "Colación 1", completed: false, content: "" },
            { id: "3", name: "Comida", completed: false, content: "" },
            { id: "4", name: "Colación 2", completed: false, content: "" },
            { id: "5", name: "Cena", completed: false, content: "" },
          ],
          allCompleted: false,
        };
  });

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(appState));
  }, [appState]);

  const handleSubmit = (weight: number, blocks: Block[]) => {
    const allCompleted = blocks.every((block) => block.completed);
    setAppState({
      currentWeight: weight,
      previousWeight: appState.currentWeight,
      blocks,
      allCompleted,
    });
  };

  return (
    <Router>
      <nav className="flex justify-around bg-stone-900 text-white py-5 text-xl font-semibold">
        <Link to="/">Inicio</Link> | <Link to="/input">Ingresar Datos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage appState={appState} />} />
        <Route
          path="/input"
          element={<InputPage onSubmit={handleSubmit} />}
        />
      </Routes>
    </Router>
  );
};

export default App;