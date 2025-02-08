import React, { useState, useEffect } from "react";
import { Block } from "../interfaces";

interface CheckboxBlockProps {
  block: Block;
}

const CheckboxBlock: React.FC<CheckboxBlockProps> = ({ block }) => {
  const LOCAL_STORAGE_KEY = `block_${block.id}`; // Clave única para cada bloque
  const [completed, setCompleted] = useState<boolean>(block.completed);

  useEffect(() => {
    // Recuperar el estado desde localStorage
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const { completed: savedCompleted, date } = JSON.parse(storedData);
      const today = new Date().toDateString();

      // Si la fecha guardada es diferente a la de hoy, reiniciar el checkbox
      if (date !== today) {
        setCompleted(false);
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ completed: false, date: today })
        );
      } else {
        setCompleted(savedCompleted);
      }
    } else {
      // Si no hay datos, guardar el estado inicial con la fecha de hoy
      const today = new Date().toDateString();
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ completed, date: today })
      );
    }
  }, []);

  const handleChange = () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ completed: newCompleted, date: new Date().toDateString() })
    );
  };

  return (
    <div className="block gap-4 m-4">
      <label className="text-2xl text-stone-700 font-semibold m-2">
        <input className="w-5 h-5 text-2xl me-2 text-stone-900" type="checkbox" checked={completed} onChange={handleChange} />
        {block.name}
      </label>
      <p className="text-stone-700 text-lg px-3">{block.content}</p>
    </div>
  );
};

export default CheckboxBlock;
