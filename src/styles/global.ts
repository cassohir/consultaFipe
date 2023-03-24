import { globalCss } from ".";




export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: "#f9f6fc",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },
  "textarea,button, body, input": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});
