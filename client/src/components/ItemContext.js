import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemContext = createContext(null);
export const ItemProvider = ({ children }) => {
  const [veggies, setVeggies] = useState(null);
  const [fruits, setFruits] = useState(null);
  const [fineHerbes, setFineHerbes] = useState(null);
 
  //const { id } = useParams();

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
  const veggiesInfo = veggies.data;
  const fineHerbesInfo = fineHerbes.data;
  const fruitsInfo = fruits.data;
  return (
    <ItemContext.Provider
      value={{
        veggiesInfo,
        fineHerbesInfo,
        fruitsInfo,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

/* const handleAfterPost = () => {
  const data = { status: comment };

  fetch("/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      setComment(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}; */

/*    veggieInfo,
fineHerbeInfo,
fruitInfo */
// const [veggie, setVeggie] = useState(null);
// const [fruit, setFruit] = useState(null);
// const [fineHerbe, setFineHerbe] = useState(null);
//  const veggieInfo = veggie.data
//  const fineHerbeInfo = fineHerbe.data
//  const fruitInfo = fruit.data

/* useEffect(() => {
  fetch(`/getVeggie/${ id }`)
  .then((res) => res.json())
  .then((data) => {
    setVeggie(data);
  });
}, []);
useEffect(() => {
  fetch(`/getFruit/${ id }`)
  .then((res) => res.json())
  .then((data) => {
    setFruit(data);
  });
}, []);
useEffect(() => {
  fetch(`/getFineHerbe/${ id }`)
  .then((res) => res.json())
  .then((data) => {
    setFineHerbe(data);
  });
}, []); */
/* if (!veggie) {
  return null;
}
if (!fruit) {
  return null;
}
if (!fineHerbe) {
  return null;
} */
