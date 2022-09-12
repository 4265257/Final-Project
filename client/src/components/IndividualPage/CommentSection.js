import React from "react";
import { UserContext } from "../UserContext";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const CommentSection = () => {
  const { comments, setComment, handleAfterPost } = useContext(UserContext);
  const [isDisabled, setDisabled] = useState(true);
  const { user } = useAuth0();
  const { id } = useParams();
  const commentsArray = comments?.data;
  const filteredCommentsArray = commentsArray?.filter((comment) => {
    if (comment.idItem == id) {
      return comment;
    }
  });
  return (
    <Wrapper>
      <h3>Comment section</h3>
      {filteredCommentsArray?.length == 0 && (
        <Textarea>No comments yet!</Textarea>
      )}
      <Comments />
      {user && (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleAfterPost(id);
            e.target.reset();
            setDisabled(true);
          }}
        >
          <Input
            type="text"
            onChange={(e) => {
              setComment(e.target.value);
              if (e.target.value.length === 0) {
                setDisabled(true);
              } else {
                setDisabled(false);
              }
            }}
          />
          <PostButtton type="submit" disabled={isDisabled} />
        </Form>
      )}
    </Wrapper>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.textarea`
  margin-top: 10px;
  font-size: 20px;
  background: rgb(68, 150, 58, 0.6);
  border-radius: 5px;
  display: block;
  height: 100px;
  width: 300px;
  font-family: var(--heading-font-family);
`;
const PostButtton = styled.input`
  margin-top: 10px;
  width: 25%;
  height: 10%;
  color: white;
  border-radius: 5px;
  padding: 5px;
  background-color: ${(p) => (p.disabled ? "gray" : "#3A1D00")};
  border-color: ${(p) => (p.disabled ? "gray" : "#3A1D00")};
`;
const Wrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  margin: 40px;
  padding: 40px;
`;
const Textarea = styled.div`
  margin-top: 30px;
  width: 300px;
  height: 50px;
  text-align: center;
`;
