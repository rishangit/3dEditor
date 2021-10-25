import { createGlobalStyle } from 'styled-components';
import '../styled/fonts/font.scss';

export default createGlobalStyle`
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

*{
  box-sizing: border-box;
}

body, html, .App, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body{
  background-color: #f1f1f1;
  position: fixed;
  font-family:'lato-light'
}

*{
    font-weight:100;
    letter-spacing:0.1rem;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
`;
