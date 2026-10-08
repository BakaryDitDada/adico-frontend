import { css } from "styled-components";

const BREAKPOINTS = {
  base: "28.75em",
  sm: "47.5em",   // 760px
  md: "56.25em",  // 900px
  lg: "75em",     // 1200px
  xl: "112.5em",  // 1800px
};

const responsive = (styles, media) => {
  const breakpoint = BREAKPOINTS[media];

  if(!breakpoint) return ""

  const query = media === "xl"
    ? `(min-width: ${breakpoint})`
    : `(max-width: ${breakpoint})`

  return css`
    @media ${query} {
      ${styles}
    }
  `;
}

export default responsive;