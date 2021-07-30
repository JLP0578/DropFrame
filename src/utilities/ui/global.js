import {createGlobalStyle} from 'styled-components'
import {font, color} from '@theme/theme'

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
box-sizing: border-box;
overflow-anchor: auto;
}

html {
margin: 0px;
padding: 0px;
width: 100%;
height: 100%;
}

body {
margin: 0px;
padding: 0px;
width: 100%;
height: 100%;
position: relative;
overflow: hidden;
}

#root{
width: 100%;
height: 100%;
}
`;

export default GlobalStyle;
