import React from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Comments = () => {
  const { comments, handleAfterDeletePost } = useContext(UserContext);
  const { id } = useParams();
  const { user } = useAuth0();
  if (!comments?.data?.length) {
    return null;
  }
  const commentsArray = comments.data;
  const filteredCommentsArray = commentsArray.filter((comment) => {
    if (comment.idItem == id) {
      return comment;
    }
  });

  return (
    <div>
      {filteredCommentsArray?.map((comment, index) => {
        return (
          <CommentSection key={index}>
            {comment?.user?.picture && (
              <ImageUser src={comment.user?.picture} />
            )}
            {comment?.user?.name && <Name>{comment?.user?.name} </Name>}
            <Status>{comment.status}</Status>
            {comment?.user?.sub == user?.sub && (
              <DeleteButton
                onClick={() => {
                  const commentId = comment?.newId;
                  return handleAfterDeletePost(id, commentId);
                }}
              >
                delete
              </DeleteButton>
            )}
          </CommentSection>
        );
      })}
    </div>
  );
};

const ImageUser = styled.img`
  width: auto;
  height: 50px;
  border-radius: 10px;
`;
const CommentSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: auto;
  align-items: center;
  width: 300px;
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
const Status = styled.div`
  width: 50%;
  word-wrap: break-word;
  position: absolute;
  top: 20px;
  left: 60px;
`;
const Name = styled.p`
  position: absolute;
  top: 0;
  left: 60px;
`;
