import { css } from "@emotion/react";

export const GlobalStyle = css({
  ".pac-container": {
    borderTop: "none",
    borderRadius: "8px",

    width: "100%",
    marginTop: "8px",
    padding: `12px 0`,

    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.15)",

    "& > .pac-item:first-of-type": {
      borderTop: "none",
    },
  },

  ".pac-item": {
    display: "flex",
    alignItems: "center",
    gap: "4px",

    border: "none",
    padding: "4px 16px",

    "&:hover": {
      backgroundColor: "#f3f3f3",
    },

    "& > .pac-icon": {
      display: "none",
    },
  },
});
