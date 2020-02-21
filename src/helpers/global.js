import { createGlobalStyle } from "styled-components"
import { fadeInUp, fadeOutDown } from "react-animations"
import { keyframes } from "styled-components"

const key_fadeInUp = keyframes`${fadeInUp}`
const key_fadeOutDown = keyframes`${fadeOutDown}`

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: ${({ theme }) => theme.transition}
  }

  .ui.card .segment{
    color: #363537;
  }

  .ui.message{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // transition: ${({ theme }) => theme.transition}
  }

  .item-enter {
    opacity: 0;
  }
  
  .item-enter-active {
    animation: 400ms ${key_fadeInUp};
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .item-enter-done{
  }

  .item-exit {
    opacity: 1;
    animation: 400ms ${key_fadeOutDown};
  }

  .item-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }
  `
