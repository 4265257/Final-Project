import React from 'react'
import { ItemContext } from "../ItemContext";
import { useState, useContext, useEffect } from "react";

export const IndividualPage = () => {
    const { veggies, fruits, fineHerbes } = useContext(ItemContext);

  return (
    <div>IndividualPage</div>
  )
}
