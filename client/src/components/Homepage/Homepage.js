import React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";

const Homepage = () => {

  return (
    <div>
      <HomeArea>
        <h2 style={{ textAlign: "center", margin: 20 }}>Vegetables</h2>
{/*         {getItems.map((item) => {
          return (
            <ItemArea key={item._id}>
              <Button onClick={openPopup}>
                <ItemPic src={item.imageSrc} name={item._id} />
              </Button>
              <DescriptionArea onSubmit={handleSubmit}>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price}$</ItemPrice>
                <ItemQty>
                  Qty :
                  {item.numInStock !== 0 && (
                    <InputQty
                      type="number"
                      min={1}
                      max={item.numInStock}
                      name="quantity"
                      defaultValue="1"
                    ></InputQty>
                  )}
                  {item.numInStock === 0 && (
                    <OutOfStockLabel> Out of Stock</OutOfStockLabel>
                  )}
                </ItemQty>
                {item.numInStock !== 0 && (
                  <AddToCartButton type="submit" name="submit" id={item._id}>
                    Add to cart
                  </AddToCartButton>
                )}
              </DescriptionArea>
            </ItemArea>
          );
        })} */}
      </HomeArea>
    </div>
  );
};

const ItemArea = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  margin: 10px 0 0 0;
`;

const ItemPic = styled.img`
  margin: 10px;
  height: auto;
  width: auto;
  max-width: 150px;
  border: none;
`;
const DescriptionArea = styled.form`
  background-color: var(--primary-color);
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  margin-left: 40px;
  width: 30%;
  border-radius: 10px;
  padding: 10px;
`;
const ItemName = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;
const ItemPrice = styled.div`
  margin-top: 8px;
`;
const InputQty = styled.input`
  width: 20%;
  margin-left: 5px;
`;
const HomeArea = styled.div``;
const ItemQty = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const AddToCartButton = styled.button`
  width: fit-content;
  border: 0ch;
  border-radius: 5px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 15px;
  background-color: var(--secondary-color);
  cursor: pointer;
  &&:active {
    background: #e5e5e5;
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
  }
`;
const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 150px;
`;
const OutOfStockLabel = styled.span`
  margin: 100px 0 10px 0;
`;

export default Homepage;