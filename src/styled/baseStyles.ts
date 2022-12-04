import { createGlobalStyle } from "styled-components";

const BasedStyles = createGlobalStyle`
  :root {
    --padding-base: 1.6rem;

    /* dark mode */
    --color-dark: #1a1b1e;
    --color-dark-effect: #3a3c3f;
    --color-light: #fff;
    --color-primary: #01bf71;
    --color-primary-dark: #0c945b;
    --color-text: #c1c2c5;
    --color-text-dark: #000;

    /* light mode */
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;;
  }

  body {
    font-family: "Encode Sans Expanded", sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    box-sizing: border-box;
    font-weight: 400;
    color: var(--color-text);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    width: 100%;
  }

  h1 {
    font-size: 3.2rem;

    @media screen and (max-width: 320px) {
      font-size: 2.8rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 3.6rem;
    }
  }

  h2 {
    font-size: 3rem;

    @media screen and (max-width: 320px) {
      font-size: 2.6rem;
    }
  }

  h3 {
    font-size: 1.6rem;

    @media screen and (max-width: 320px) {
      font-size: 1.4rem;
    }
  }
`;

export { BasedStyles };
