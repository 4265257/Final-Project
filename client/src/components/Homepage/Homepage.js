import React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";
const Homepage = () => {
  return (
    <div>
      <HomeArea>
        <h2 style={{ textAlign: "center", margin: 20 }}>Vegetables</h2>
        <Layout>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124940/DSC_0805_xzekip.jpg"
            />
          <Label>Cucumber</Label>
          </ImageArea>

          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124940/DSC_0811_vvhnkz.jpg"
            />
          <Label>Zucchini</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124939/DSC_0448i_kmahnf.jpg"
            />
          <Label>Kale</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124937/DSC_0775_pey1fy.jpg"
            />
          <Label>Green Bean</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124937/DSC_0393i_gytbv5.jpg"
            />
          <Label>Tomato</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124939/DSC_0615_c9y8zm.jpg"
            />
          <Label>Lettuce</Label>
          </ImageArea>
        </Layout>
        <h2 style={{ textAlign: "center", margin: 20 }}>Fine Herbes</h2>
        <Layout>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124940/DSC_0951_mmocpa.jpg"
            />
          <Label>Chives</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124939/DSC_0444_nor5uh.jpg"
            />
          <Label>Persil</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124938/DSC_0553_twbtxn.jpg"
            />
          <Label>Mint</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124938/DSC_0142_qaawax.jpg"
            />
          <Label>Sage</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124937/DSC_0769_af3jmh.jpg"
            />
          <Label>Basil</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124937/DSC_0688_kar8jl.jpg"
            />
          <Label>Thyme</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124937/DSC_0140_w7dzws.jpg"
            />
          <Label>Coriander</Label>
          </ImageArea>
        </Layout>

        <h2 style={{ textAlign: "center", margin: 20 }}>Fruits</h2>
        <LayoutSmallerSec>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124938/DSC_0544_mxtf2o.jpg"
            />
          <Label>Strawberry</Label>
          </ImageArea>
          <ImageArea>
            <Image
              style={{
                height: 200,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
              cloudName="yarabrek"
              publicId="https://res.cloudinary.com/yarabrek/image/upload/v1661124940/DSC_0824_d9whbm.jpg"
            />
          <Label>Raspberry</Label>
          </ImageArea>
        </LayoutSmallerSec>
      </HomeArea>
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
  // margin: 10px 0 0 0;
`;
const LayoutSmallerSec = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
  margin-bottom: 20%; 
`;
const Label = styled.div`
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
  font-size: 25px;
 background: 	rgb(72,72,72, 0.6);
  color: White;
`;
const ImageArea = styled.div`
width: fit-content;
position:relative;
border: solid black 2px;
border-radius: 5px;
margin:10px;
`;

export default Homepage;

// const ItemPic = styled.img`
//   margin: 10px;
//   height: auto;
//   width: auto;
//   max-width: 150px;
//   border: none;
//   `;
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
