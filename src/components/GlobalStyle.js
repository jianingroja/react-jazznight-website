import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    @media (max-width:1200px){
        font-size:80%;
    }
    @media (max-width:1000px){
        /* opacity:0; */
    }
}

body{
    background-color:black;
    font-family: 'Inter', sans-serif;
    overflow-x:hidden;

}

button{
    font-weight:bold;
    font-size:1.1rem;
    cursor: pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    background:transparent;
    color:white;
    transition:all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background:#23d997;
        color:white;
    }
}

h1{
    color:whitesmoke;
}

h2{
    font-weight:lighter;
    font-size:4rem;
    color:whitesmoke;
}

h3{
     color:whitesmoke;
}

h4{
    font-weight:bold;
    font-size:2rem;
}

span{
   font-weight:bold;
    color:#23d997;
}

a{
    font-size:1.1rem;
}

p{
    padding:3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
    line-height:150%;
    font-weight:lighter;
}
`;

export default GlobalStyle;