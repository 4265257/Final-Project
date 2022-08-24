import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
    :root {
      --primary-color: 	#faefee;
      --secondary-color : #e0edf4;
      --page-horizontal-padding: 20px;
      --header-height: 50px;
      --max-content-width: 1200px;
      --heading-font-family: Garamond, Helvetica, sans-serif;
      --user-img-width: 120px;
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
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        //display: block;
        position:relative
    }
    body {
        line-height: 1;
        background-color: white; 
        min-height: 1000px;   
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
        font-family: var(--heading-font-family);
        color: black;
    }
    h1 {
      font-size: 35px;
    }
    h2{
        font-size: 25px;
    }
    header{
        height: 50px;
        background-color: var(--secondary-color);
    }
    button{
        border: none;
        border-radius: 5px;
    }
    div, p, button, span, input {
        color: black;
        font-family: var(--heading-font-family);
        
    }
    a{
        color: black;
        text-decoration: none;
    }
    footer {
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: var(--secondary-color);
        text-align: center;
}


`;
