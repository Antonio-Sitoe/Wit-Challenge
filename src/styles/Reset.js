import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { bgColor, primaryColor } from './Colors';

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  background: ${bgColor};
  color: ${primaryColor};
font-family: 'Roboto', sans-serif;
  }

  img {
    width: 100%;
    display: block;
  }

 p {
  font-size: 1.1rem;
  }
`;

const anime = keyframes`
  from {
    opacity:0;
    transform: translateY(-30px)
  }
  to {
    opacity:1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  max-width: 930px;
  margin: 0 auto 5rem auto;
  padding: 0 1rem;
  animation: 0.5s ${anime};
`;

export const H2 = styled.h2`
  font-size: 2rem;
`;
