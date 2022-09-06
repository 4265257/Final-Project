import React from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PicUser from "../../Pics/blank-profile-picture.png";
import { useAuth0 } from "@auth0/auth0-react";

export const Comments = () => {
  const { comments, handleAfterDeletePost } = useContext(UserContext);
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth0();
  if (!comments?.data?.length) {
    return null;
  }
  const commentsArray = comments.data;
  const filteredCommentsArray = commentsArray.filter((comment) => {
    if (comment.idItem == id) {
      return comment;
    }
  });
  //console.log("commentsArray", commentsArray[0]?.user.sub);
  // console.log("user", user.sub);
 // console.log("comments", comments.data?.[16]._id);

  return (
    <div>
      {filteredCommentsArray.map((comment, index) => {
        return (
          <CommentSection key={index}>
            {comment?.user?.picture && (
              <ImageUser src={comment.user?.picture} />
            )}
            {!comment?.user?.picture && <ImageUser src={PicUser} />}
            {comment?.user?.name && <Name>{comment?.user?.name} </Name>}
            {!comment?.user?.name && <Name>Anonymous user</Name>}
            <Status>{comment.status}</Status>
            {comment?.user?.sub == user?.sub && (
              <DeleteButton
                onClick={() => {
                  const commentId =  comment?.newId;
                  console.log("comment", commentId);
                  return handleAfterDeletePost(id, commentId);
                }}
              >
                delete
              </DeleteButton>
            )}
          </CommentSection>
        );
        //comment
      })}
    </div>
  );
};

const ImageUser = styled.img`
  width: auto;
  height: 50px;
  border-radius: 10px;
`;

const ItemPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const CommentSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  //justify-content: center;
  //align-content: left;
  //white-space: nowrap;
  //overflow: hidden;
  // text-overflow: ellipsis;
  //word-wrap: break-word;
  overflow: auto;
  align-items: center;
  //text-align: left;
  // margin: 40px;
  // overflow-wrap: break-word;
  //width: 300px;
  //height: fit-content;
  border: solid 2px gray;
  border-radius: 5px;
  background-color: white;
  margin: 20px 0px;
`;
const DeleteButton = styled.button`
  width: 60px;
  height: 30px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  padding: 4px;
  margin-left: 5px;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

//const Wrapper = styled.div`
/* height: 60px;
  margin-top: 150px;
  margin-left: auto;
  margin-left: auto; */
//`;
const Status = styled.div`
  width: 50%;
  word-wrap: break-word;
  //margin-top:80px ;
  position: absolute;
  top: 20px;
  left: 60px;
  // height: fit-content;
  // width: 170px;
`;
const Name = styled.p`
  position: absolute;
  top: 0;
  left: 60px;
  // padding: 8px;
  // width: 50%;
`;
/* const FullSection = styled.div`
  display: flex;
  flex-direction: column;
 // justify-content: center;
  align-content: left;
  align-items: center;
  text-align: left;
`; */
// const Textarea = styled.textarea`
//   margin-top: 30px;
//   width: 420px;
//   height: 100px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   margin-left: 5px;
//   margin-top: 10px;
//   font-size: 20px;
//   background-color: var(--secondary-color);
//   border-radius: 5px;
//   display: block;
// `;

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
