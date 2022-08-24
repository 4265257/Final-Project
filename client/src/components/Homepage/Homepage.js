import React from "react";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { ItemContext } from "../ItemContext";
const Homepage = () => {
  const { veggiesInfo, fruitsInfo, fineHerbesInfo } = useContext(ItemContext);
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: 20 }}>Vegetables</h2>
      <Layout>
        {veggiesInfo.map((veggie) => {
          return (
            <ImageArea key={veggie.id} to={`/${veggie.id}`}>
              <Image
                style={{
                  height: 200,
                }}
                cloudName="yarabrek"
                publicId={veggie.avatarPic}
              />
              <Label>{veggie.name}</Label>
            </ImageArea>
          );
        })}
      </Layout>
      <h2 style={{ textAlign: "center", margin: 20 }}>Fines Herbes</h2>
      <Layout>
        {fineHerbesInfo.map((fineHerbe) => {
          return (
            <ImageArea
              key={fineHerbe.id}
              to={`/${fineHerbe.id}`}
            >
              <Image
                style={{
                  height: 200,
                }}
                cloudName="yarabrek"
                publicId={fineHerbe.avatarPic}
              />
              <Label>{fineHerbe.name}</Label>
            </ImageArea>
          );
        })}
      </Layout>
      <h2 style={{ textAlign: "center", margin: 20 }}>Fruits</h2>
      <Layout>
        {fruitsInfo.map((fruit) => {
          return (
            <ImageArea key={fruit.id} to={`/${fruit.id}`}>
              <Image
                style={{
                  height: 200,
                }}
                cloudName="yarabrek"
                publicId={fruit.avatarPic}
              />
              <Label>{fruit.name}</Label>
            </ImageArea>
          );
        })}
      </Layout>
    </div>
  );
};

const HomeArea = styled.div``;
const Layout = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
 // margin-bottom: 20px;
  //margin-left: auto;
  // margin-right: auto;
`;
const Label = styled.div`
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
  font-size: 25px;
  background: rgb(72, 72, 72, 0.6);
  color: White;
`;
const ImageArea = styled(Link)`
  width: fit-content;
  position: relative;
  // border: solid black 2px;
  border-radius: 5px;
  margin: 10px;
`;

export default Homepage;

// const ItemPic = styled.img`
//   margin: 10px;
//   height: auto;
//   width: auto;
//   max-width: 150px;
//   border: none;
//   `;
// const LayoutSmallerSec = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20%;
// `;
// const DescriptionArea = styled.form`
//   background-color: var(--primary-color);
//   display: inline-flex;
//   flex-direction: column;
//   text-align: center;
//   margin-left: 40px;
//   width: 30%;
//   border-radius: 10px;
//   padding: 10px;
//   `;
// const ItemName = styled.div`
//   width: 75%;
//   margin-left: auto;
//   margin-right: auto;
//   `;
// const ItemPrice = styled.div`
//   margin-top: 8px;
//   `;
// const InputQty = styled.input`
//   width: 20%;
//   margin-left: 5px;
//   `;
// const ItemQty = styled.div`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   `;
// const AddToCartButton = styled.button`
//   width: fit-content;
//   border: 0ch;
//   border-radius: 5px;
//   font-size: 20px;
//   margin-left: auto;
//   margin-right: auto;
//   padding: 10px 15px;
//   background-color: var(--secondary-color);
//   cursor: pointer;
//   &&:active {
//     background: #e5e5e5;
//     -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
//     -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
//     box-shadow: inset 0px 0px 5px #c1c1c1;
//     outline: none;
//   }
//   `;
// const Button = styled.button`
//   background: none;
//   color: inherit;
//   border: none;
//   padding: 0;
//   font: inherit;
//   cursor: pointer;
//   outline: inherit;
//   width: 150px;
//   `;
// const OutOfStockLabel = styled.span`
//   margin: 100px 0 10px 0;
//   `;
{
  /*         {getItems.map((item) => {
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
        })} */
}
