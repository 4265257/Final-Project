import React from "react";
import { UserContext } from "../UserContext";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const Comments = () => {
  const { comments } = useContext(UserContext);
  const { id } = useParams();
    // console.log("comments", comments);
  if (!comments?.data?.length) {
    return null;
  }
  const commentsArray = comments.data;
//   console.log("commentsarray", commentsArray);
  const filteredCommentsArray = commentsArray.filter((comment) => {
      if (comment.idItem == id) {
         // console.log(comment.status);
          return comment;
        }
    });
//   console.log("filteredCommentsArray",filteredCommentsArray)
  
  return (
      <div>
      {filteredCommentsArray.map((comment, i) => {
        return (
            <div key={i} >
            <div>{comment.idItem}</div>
            <div>{comment?.user?.nickname} </div>
            <div>{comment.status}</div>
          </div>
        );
        //comment
    })}
    </div>
  );
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
  /* height: 60px;
  margin-top: 150px;
  margin-left: auto;
  margin-left: auto; */
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

/* commentsArray.forEach((comment) => {
  if (comment.idItem == id) {
      console.log(comment.status);
      return comment;
  }
}); */
// const duplicateIds = commentsArray
//   .map(v => v.idItem)
//   .filter((v, i, vIds) => vIds.indexOf(v) !== i)
// const duplicates = commentsArray
//   .filter(obj => duplicateIds.includes(obj.idItem));
// console.log("duplicates",duplicates)

/*   const singleCommentsOfItems = commentsArray.map((comment) => {
      console.log("comment", comment)
      return comment.idItem == id;
    });
    console.log("singleCommentsOfItems", singleCommentsOfItems */

//     const duplicateIds = commentsArray
//  .map(v => v)
//  const urlId = duplicateIds.find(item => item.idItem == id)
//  console.log("urlId",urlId);

// commentsArray.forEach((comment) =>{
//     console.log(comment)
//     const urlId = [...comment].find(item => item.idItem == id)
//     console.log(urlId)
//     return urlId
// }
// );

//    const result = Array.from(commentsArray).find(item => item.idItem == id);
//    console.log("result", result);
// commentsArray.map(comment => {
//     console.log("comment", comment)
//     const  commentSameUrl = comment.find(item => item.idItem == id);
//     console.log("commentSameUrl", commentSameUrl)

//     return commentSameUrl})

// const result = [...commentsArray].find(item => item.idItem == id);
// console.log(result);

//console.log("urlComments", urlComments)
