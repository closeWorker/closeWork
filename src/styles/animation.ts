import { keyframes } from "styled-components"

export const AnimationFade = keyframes`
    0% {
        transform: translateY(-30%);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
`

export const AnimationFadeOut = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
      }

      100% {
        transform: translateY(-30%);
        opacity: 0;
      }
`
