import React from "react";
import { UserContext } from "../UserContext";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const Comments = () => {
  const { comments } = useContext(UserContext);
  const { id } = useParams();
  console.log("comments", comments.data);
  if (comments) {
    return null;
  }
  const commentsArray = comments.data;


/*   const singleCommentsOfItems = commentsArray.map((comment) => {
    console.log("comment", comment)
    return comment.idItem == id;
  });
  console.log("singleCommentsOfItems", singleCommentsOfItems */

  return <Wrapper></Wrapper>;
};

const ImageFruit = styled.img`
  width: auto;
  height: 350px;
  border-radius: 10px;
`;

const ItemPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const CommentSectionPostAre = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: left;
  align-items: center;
  text-align: left;
  margin-left: 40px;
  overflow-wrap: break-word;
  width: 400px; */
`;

const Wrapper = styled.div`
  height: 60px;
  margin-top: 150px;
  margin-left: auto;
  margin-left: auto;
`;
const Description = styled.p`
  width: 50%;
`;
const FullSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: left;
  align-items: center;
  text-align: left;
`;
const Textarea = styled.textarea`
  margin-top: 30px;
  width: 420px;
  height: 100px;
`;

const PostButtton = styled.button`
  width: 20%;
  height: 10%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-left: 5px;
  margin-top: 10px;
  font-size: 20px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  display: block;
`;
