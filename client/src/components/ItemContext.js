import { createContext, useState, useEffect } from "react";
export const ItemContext = createContext(null);
export const ItemProvider = ({ children }) => {
  const [veggies, setVeggies] = useState(null);
  const [fruits, setFruits] = useState(null);
  const [fineHerbes, setFineHerbes] = useState(null);
  useEffect(() => {
    fetch("/getVeggies")
      .then((res) => res.json())
      .then((data) => {
        setVeggies(data);
      });
  }, []);
  useEffect(() => {
    fetch("/getFruits")
      .then((res) => res.json())
      .then((data) => {
        setFruits(data);
      });
  }, []);
  useEffect(() => {
    fetch("/getFineHerbes")
      .then((res) => res.json())
      .then((data) => {
        setFineHerbes(data);
      });
  }, []);

  if (!veggies) {
    return null;
  }
  if (!fruits) {
    return null;
  }
  if (!fineHerbes) {
    return null;
  }

  return (
    <ItemContext.Provider
      value={{
        veggies, 
        fruits, 
        fineHerbes
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
