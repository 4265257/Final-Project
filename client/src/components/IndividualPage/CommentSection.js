import React from "react";
import { UserContext } from "../UserContext";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";

export const CommentSection = () => {
  const { setComment, handleAfterPost } = useContext(UserContext);
  const [isDisabled, setDisabled] = useState(true);

  const { id } = useParams();
  /*   console.log("id", id)
   */
  // console.log("comment", comment)
  return (
    <Wrapper>
      <h3>Comment section</h3>
      <Comments />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleAfterPost(id);
          e.target.reset();
        }}
      >
        <Input
          type="text"
          onChange={(e) => {
            //e.target.reset();
            setComment(e.target.value);
            if (e.target.value.length === 0) {
              setDisabled(true);
            } else {
              setDisabled(false);
            }
          }}
        />
        <PostButtton
         // style={{ backgroundColor: "#e0edf4", border: "none", padding: 5 }}
          type="submit"
          disabled={isDisabled}
        />
      </Form>
      {/* <div>

{comment}  
</div> */}
      {/* <CommentSectionPostAre>
      </CommentSectionPostAre> */}
    </Wrapper>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.textarea`
  //margin-left: 5px;
  margin-top: 10px;
  font-size: 20px;
  background: rgb(68, 150, 58, 0.6);
  border-radius: 5px;
  display: block;
  height: 100px;
  width: 300px;
font-family: var( --heading-font-family);
`;

const PostButtton = styled.input`
  margin-top: 10px;
  width: 25%;
  height: 10%;
  color: white;
  //background-color:var(--secondary-color); 
  border-radius: 5px;
  padding: 5px;
   background-color: ${(p) => (p.disabled ? "gray" : "#3A1D00" )};
  border-color: ${(p) => (p.disabled ? "gray" : "#3A1D00")};
`;
const Wrapper = styled.div`
background-color: white;
border-radius: 5px;
margin: 40px;
padding: 40px;
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

{
  /* <PostButtton type="submit"  onClick={setComment("")}>
     Post
   </PostButtton> */
}





// import React from "react";
// import { UserContext } from "../UserContext";
// import { useState, useContext, useEffect } from "react";
// import styled from "styled-components";
// import { Comments } from "./Comments";
// import { useParams } from "react-router-dom";

// export const CommentSection = () => {
//   const { setComment, handleAfterPost } = useContext(UserContext);
//   const [isDisabled, setDisabled] = useState(true);

//   const { id } = useParams();
//   /*   console.log("id", id)
//    */
//   // console.log("comment", comment)
//   return (
//     <Wrapper>
//       <h3>Comment section</h3>
//       <Comments />
//       <Form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleAfterPost(id);
//           e.target.reset();
//         }}
//       >
//         <Input
//           type="text"
//           onChange={(e) => {
//             //e.target.reset();
//             setComment(e.target.value);
//             if (e.target.value.length == 0) {
//               setDisabled(true);
//             } else {
//               setDisabled(false);
//             }
//           }}
//         />
//         <PostButtton
//          // style={{ backgroundColor: "#e0edf4", border: "none", padding: 5 }}
//           type="submit"
//           disabled={isDisabled}
//         />
//       </Form>
//       {/* <div>

// {comment}  
// </div> */}
//       {/* <CommentSectionPostAre>
//       </CommentSectionPostAre> */}
//     </Wrapper>
//   );
// };
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.textarea`
//   //margin-left: 5px;
//   margin-top: 10px;
//   font-size: 20px;
//   background: rgb(68, 150, 58, 0.6);
//   border-radius: 5px;
//   display: block;
//   height: 100px;
//   width: 300px;
// font-family: var( --heading-font-family);
// `;

// const PostButtton = styled.input`
//   margin-top: 10px;
//   width: 25%;
//   height: 10%;
//   color: white;
//   //background-color:var(--secondary-color); 
//   border-radius: 5px;
//   padding: 5px;
//    background-color: ${(p) => (p.disabled ? "gray" : "#3A1D00" )};
//   border-color: ${(p) => (p.disabled ? "gray" : "#3A1D00")};
// `;
// const Wrapper = styled.div`
// background-color: white;
// border-radius: 5px;
// margin: 40px;
// padding: 40px;
//   /* height: 60px;
//   margin-top: 150px;
//   margin-left: auto;
//   margin-left: auto; */
// `;
// const Description = styled.p`
//   width: 50%;
//   `;
// const FullSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-content: left;
//   align-items: center;
//   text-align: left;
// `;
// const Textarea = styled.textarea`
//   margin-top: 30px;
//   width: 420px;
//   height: 100px;
// `;

// const ImageFruit = styled.img`
//   width: auto;
//   height: 350px;
//   border-radius: 10px;
// `;

// const ItemPage = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
// `;
// const CommentSectionPostAre = styled.div`
//   /* display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-content: left;
//     align-items: center;
//     text-align: left;
//     margin-left: 40px;
//     overflow-wrap: break-word;
//     width: 400px; */
// `;

// {
//   /* <PostButtton type="submit"  onClick={setComment("")}>
//      Post
//    </PostButtton> */
// }
