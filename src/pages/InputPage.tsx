import React, { useState, useEffect } from "react";
import { Block } from "../interfaces";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

interface InputPageProps {
  onSubmit: (weight: number, blocks: Block[]) => void;
}

const LOCAL_STORAGE_KEY = "userBlocks"; // Clave para almacenar datos

const InputPage: React.FC<InputPageProps> = ({ onSubmit }) => {
  const [weight, setWeight] = useState(localStorage.getItem("weight") || ""); // Recuperar peso
  const [blocks, setBlocks] = useState<Block[]>(() => {
    const storedBlocks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedBlocks ? JSON.parse(storedBlocks) : [
      { id: "1", name: "Desayuno", completed: false, content: "" },
      { id: "2", name: "Colación 1", completed: false, content: "" },
      { id: "3", name: "Comida", completed: false, content: "" },
      { id: "4", name: "Colación 2", completed: false, content: "" },
      { id: "5", name: "Cena", completed: false, content: "" },
    ];
  });

  const navigate = useNavigate(); // Hook para navegación


  // Guardar en localStorage cuando cambian los bloques o el peso
  useEffect(() => {
    localStorage.setItem("weight", weight);
  }, [weight]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blocks));
  }, [blocks]);

  const handleContentChange = (id: string, content: string) => {
    const updatedBlocks = blocks.map((block) =>
      block.id === id ? { ...block, content } : block
    );
    setBlocks(updatedBlocks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNumber = weight.trim() ? parseFloat(weight) : NaN;
    onSubmit(weightNumber, blocks);
    navigate("/");
  };

  return (
    <div className="px-3 h-screen ">
      <h1 className="text-center text-2xl my-5">Ingresa tu peso y el contenido de los bloques</h1>
      <form onSubmit={handleSubmit}>
        <input
            className="text-stone-700 text-3xl px-3"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Peso en kg"
          
        />
        {blocks.map((block) => (
          <div key={block.id}>
            <label className="text-stone-700">{block.name}</label>
            <input
                className="text-stone-700 text-lg px-3 border border-stone-200 m-4 "
              type="text"
              value={block.content}
              onChange={(e) => handleContentChange(block.id, e.target.value)}
              placeholder={`Contenido para ${block.name}`}
            />
          </div>
        ))}
        <button type="submit" className="my-5 pointer bg-stone-900 text-white p-3 rounded-xl">Guardar</button>
      </form>
    </div>
  );
};

export default InputPage;
