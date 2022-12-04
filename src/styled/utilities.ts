import { css } from "styled-components";

const Container = css`
  width: min(100%, 1200px);
  padding-left: var(--padding-base);
  padding-right: var(--padding-base);
  margin-inline: auto;
`;

const ButtonIcon = css`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

const CtaButton = css`
  padding: 0.5rem 1.6rem;
  border-radius: 100px;
  transition: all 0.4s;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
`;

const Block = css`
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

const Dark = css`
  background: var(--color-dark);
`;

const Grid = css`
  display: grid;
`;

const Card = css`
  padding: 2rem;
  border-radius: 7px;
`;

const Image = css`
  display: block;
  width: 100%;
`;

const Text = css`
  font-size: 1.6rem;

  @media screen and (max-width: 375px) {
    font-size: 1.4rem;
  }
`;

const Input = css`
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 7px;
`;

export {
  Container,
  ButtonIcon,
  CtaButton,
  Block,
  Grid,
  Card,
  Image,
  Dark,
  Text,
  Input,
};
