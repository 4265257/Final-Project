import { createGlobalStyle } from "styled-components";
import PicGarden from "./Pics/gardenPic.JPG";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
    :root {
      --primary-color: #44963A;
      --secondary-color : #3A1D00;
      --body-fonts: "Nunito","Helvetica", "Arial", sans-serif;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: var(--body-fonts);
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        position: relative;
        background-image: 
        url(${PicGarden});
        background-position: center;
        background-size: cover;
        background-repeat: repeat;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3 {
        text-align: center;
   }
    h1 {
        font-size: 35px;
        color: white;
    }
    h2{
        font-size: 25px;
        color: black;
        background-color: white;
        width: fit-content;
        text-align: center;
        border-radius: 5px;
        padding: 5px;
        margin-left: auto;
        margin-right: auto; 
    }
    h3{
        font-size: 20px;
    }
    header{
        margin:0 ;
        top:0;
        z-index:1000;
        background-color: var(--primary-color);
    }
    button{
        border: none;
        font-size: 15px;
        color: white;
    }
    button, input, a {
        cursor: pointer;
    }
    a{
        color: white;
        text-decoration: none;
    }
    footer {
        width: 100%;
        background-color: var(--primary-color);
        text-align: center;
        color: white;
        margin-top: auto;
    }
`;
